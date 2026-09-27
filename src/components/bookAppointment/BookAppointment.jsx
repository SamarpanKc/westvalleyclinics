import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import Loader from "../loader/Loader";

const schema = yup
  .object({
    patient_name: yup
      .string()
      .trim()
      .required("Full name is required.")
      .min(2, "Name must be at least 2 characters."),
    patient_phone: yup
      .string()
      .trim()
      .required("Phone number is required.")
      .test(
        "is-10-digits",
        "Please enter a valid 10-digit number (e.g. 98 0000 0000)",
        (val) => {
          if (!val) return false;
          const digits = val.replace(/\D/g, "");
          return digits.length === 10;
        }
      ),
    patient_email: yup
      .string()
      .trim()
      .email("Please enter a valid email address.")
      .optional(),
    department: yup.string().required("Please select a department."),
    appointment_date: yup
      .string()
      .required("Please select your appointment date."),
    appointment_time: yup
      .string()
      .required("Please select a preferred time slot."),
    notes: yup.string().trim(),
  })
  .required();

const departmentOptions = [
  { label: "Hair Transplant", value: "Hair Transplant" },
  { label: "Skin", value: "Skin" },
  { label: "Aesthetics & Antiaging", value: "Aesthetics & Antiaging" },
  { label: "General Consultation", value: "General Consultation" },
];

const timeSlotOptions = [
  {
    label: "Morning (09:00 AM - 12:00 PM)",
    value: "Morning (09:00 AM - 12:00 PM)",
  },
  {
    label: "Afternoon (01:00 PM - 04:00 PM)",
    value: "Afternoon (01:00 PM - 04:00 PM)",
  },
  {
    label: "Evening (05:00 PM - 07:00 PM)",
    value: "Evening (05:00 PM - 07:00 PM)",
  },
];

// 2-4-4 phone formatter (98 0000 0000)
const formatPhone244 = (rawVal) => {
  if (!rawVal) return "";
  const digits = rawVal.replace(/\D/g, "").slice(0, 10);
  if (digits.length <= 2) {
    return digits;
  }
  if (digits.length <= 6) {
    return `${digits.slice(0, 2)} ${digits.slice(2)}`;
  }
  return `${digits.slice(0, 2)} ${digits.slice(2, 6)} ${digits.slice(6, 10)}`;
};

function BookAppointment() {
  const formRef = useRef(null);
  const timeDropdownRef = useRef(null);
  const dateInputRef = useRef(null);

  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [status, setStatus] = useState(null);

  const [selectedDept, setSelectedDept] = useState("Hair Transplant");
  const [isTimeOpen, setIsTimeOpen] = useState(false);
  const [selectedTime, setSelectedTime] = useState("");

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onTouched",
    defaultValues: {
      department: "Hair Transplant",
    },
  });

  // Minimum selectable date is today
  const todayDate = new Date().toISOString().split("T")[0];

  // Close time dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        timeDropdownRef.current &&
        !timeDropdownRef.current.contains(event.target)
      ) {
        setIsTimeOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Phone input formatting
  const handlePhoneInputChange = (e) => {
    const formatted = formatPhone244(e.target.value);
    setValue("patient_phone", formatted, { shouldValidate: true });
  };

  // Block non-numeric keystrokes
  const handlePhoneKeyDown = (e) => {
    const allowedKeys = [
      "Backspace",
      "Delete",
      "Tab",
      "Escape",
      "Enter",
      "ArrowLeft",
      "ArrowRight",
      "ArrowUp",
      "ArrowDown",
      "Home",
      "End",
    ];
    if (allowedKeys.includes(e.key) || e.ctrlKey || e.metaKey) {
      return;
    }
    if (!/^\d$/.test(e.key)) {
      e.preventDefault();
    }
  };

  // Department selection
  const handleSelectDepartment = (deptValue) => {
    setSelectedDept(deptValue);
    setValue("department", deptValue, {
      shouldValidate: true,
      shouldDirty: true,
    });
  };

  // Time slot selection
  const handleSelectTimeSlot = (timeValue) => {
    setSelectedTime(timeValue);
    setValue("appointment_time", timeValue, {
      shouldValidate: true,
      shouldDirty: true,
    });
    setIsTimeOpen(false);
  };

  const onSubmit = async () => {
    if (!formRef.current) return;

    setIsProcessing(true);
    setStatus(null);

    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error("EmailJS environment variables are not defined.");
      }

      await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);

      setIsSuccess(true);
      setStatus({
        type: "success",
        text: "Consultation request sent successfully! Our clinical team will contact you shortly.",
      });

      reset();
      setSelectedDept("Hair Transplant");
      setValue("department", "Hair Transplant");
      setSelectedTime("");

      Swal.fire({
        title: "Appointment Requested",
        text: "Your consultation request has been submitted successfully. Our team will contact you soon.",
        icon: "success",
        confirmButtonColor: "#2D4F6F",
        timer: 3500,
      });

      setTimeout(() => {
        setIsSuccess(false);
      }, 4000);
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus({
        type: "error",
        text: "Something went wrong while sending your request. Please try again.",
      });

      Swal.fire({
        title: "Submission Error",
        text: "Something went wrong sending your request. Please try again or call us directly.",
        icon: "error",
        confirmButtonColor: "#2D4F6F",
        timer: 3500,
      });
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <section className="bg-[#FAFBFD] py-16 sm:py-20 lg:py-24 border-t border-[#E8EFF5]" id="contact">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16 xl:px-20">
        {/* Section Heading */}
        <div className="mx-auto max-w-[680px] text-center">
          <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#527E9F]">
            Direct Appointment
          </p>
          <h2
            className="mt-2.5 font-semibold leading-[1.08] tracking-[-0.035em] text-[#0E1A2B]"
            style={{ fontSize: "clamp(28px, 3.8vw, 46px)" }}
          >
            Book Your <span className="text-[#527E9F]">Consultation</span>
          </h2>
          <p className="mx-auto mt-4 max-w-[520px] text-[15px] sm:text-[16px] leading-[1.75] text-[#536273]">
            Schedule a confidential consultation with our medical specialists in Pokhara.
          </p>
        </div>

        {/* Clean Clinical Form Card */}
        <div className="mx-auto mt-12 max-w-[760px]">
          <div className="rounded-[24px] p-6 sm:p-10 lg:p-12">
            <form
              ref={formRef}
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              className="space-y-6"
            >
              {/* Hidden Department input for EmailJS & Yup */}
              <input
                type="hidden"
                id="department"
                {...register("department")}
                value={selectedDept}
              />

              {/* Department Selection */}
              <div>
                <label className="block text-[13px] font-semibold uppercase tracking-wider text-[#0E1A2B] mb-2.5">
                  Select Department <span className="text-red-500">*</span>
                </label>

                <div className="flex flex-wrap gap-2">
                  {departmentOptions.map((dept) => {
                    const isSelected = selectedDept === dept.value;
                    return (
                      <button
                        key={dept.value}
                        type="button"
                        onClick={() => handleSelectDepartment(dept.value)}
                        className={`px-4 py-2.5 rounded-full text-[13.5px] font-medium transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-[#2D4F6F] ${
                          isSelected
                            ? "bg-[#2D4F6F] text-white"
                            : "bg-[#EEF3F8] text-[#475569] hover:bg-[#E2ECF4] hover:text-[#0E1A2B]"
                        }`}
                      >
                        {dept.label}
                      </button>
                    );
                  })}
                </div>

                {errors.department && (
                  <p className="mt-1.5 text-[12.5px] font-medium text-red-600">
                    {errors.department?.message}
                  </p>
                )}
              </div>

              {/* 2. Patient Full Name */}
              <div>
                <label
                  htmlFor="patient_name"
                  className="block text-[13px] font-semibold uppercase tracking-wider text-[#0E1A2B] mb-2"
                >
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="patient_name"
                  type="text"
                  placeholder="e.g. Ramesh Thapa"
                  className={`w-full rounded-xl border px-4 py-3.5 text-[14.5px] text-[#0E1A2B] placeholder-[#94A3B8] transition-all bg-[#FAFBFD] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2D4F6F]/15 focus:border-[#2D4F6F] ${
                    errors.patient_name
                      ? "border-red-400 bg-red-50/20"
                      : "border-[#D8E2EC]"
                  }`}
                  {...register("patient_name")}
                />
                {errors.patient_name && (
                  <p className="mt-1.5 text-[12.5px] font-medium text-red-600">
                    {errors.patient_name?.message}
                  </p>
                )}
              </div>

              {/* 3. Phone & Email (2-Column Grid) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Phone */}
                <div>
                  <label
                    htmlFor="patient_phone"
                    className="block text-[13px] font-semibold uppercase tracking-wider text-[#0E1A2B] mb-2"
                  >
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="patient_phone"
                    type="tel"
                    inputMode="numeric"
                    maxLength={12}
                    placeholder="98 0000 0000"
                    onKeyDown={handlePhoneKeyDown}
                    className={`w-full rounded-xl border px-4 py-3.5 text-[14.5px] text-[#0E1A2B] placeholder-[#94A3B8] tracking-wide transition-all bg-[#FAFBFD] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2D4F6F]/15 focus:border-[#2D4F6F] ${
                      errors.patient_phone
                        ? "border-red-400 bg-red-50/20"
                        : "border-[#D8E2EC]"
                    }`}
                    {...register("patient_phone", {
                      onChange: handlePhoneInputChange,
                    })}
                  />
                  {errors.patient_phone && (
                    <p className="mt-1.5 text-[12.5px] font-medium text-red-600">
                      {errors.patient_phone?.message}
                    </p>
                  )}
                </div>

                {/* Email Address */}
                <div>
                  <label
                    htmlFor="patient_email"
                    className="block text-[13px] font-semibold uppercase tracking-wider text-[#0E1A2B] mb-2"
                  >
                    Email Address <span className="text-[12px] font-normal lowercase text-[#64748B]">(optional)</span>
                  </label>
                  <input
                    id="patient_email"
                    type="email"
                    placeholder="name@example.com"
                    className={`w-full rounded-xl border px-4 py-3.5 text-[14.5px] text-[#0E1A2B] placeholder-[#94A3B8] transition-all bg-[#FAFBFD] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2D4F6F]/15 focus:border-[#2D4F6F] ${
                      errors.patient_email
                        ? "border-red-400 bg-red-50/20"
                        : "border-[#D8E2EC]"
                    }`}
                    {...register("patient_email")}
                  />
                  {errors.patient_email && (
                    <p className="mt-1.5 text-[12.5px] font-medium text-red-600">
                      {errors.patient_email?.message}
                    </p>
                  )}
                </div>
              </div>

              {/* 4. Appointment Date & Time Slot (2-Column Grid) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Date Input */}
                <div>
                  <label
                    htmlFor="appointment_date"
                    className="block text-[13px] font-semibold uppercase tracking-wider text-[#0E1A2B] mb-2"
                  >
                    Preferred Date <span className="text-red-500">*</span>
                  </label>
                  <div
                    className={`relative w-full rounded-xl border transition-all cursor-pointer bg-[#FAFBFD] focus-within:bg-white focus-within:ring-2 focus-within:ring-[#2D4F6F]/15 focus-within:border-[#2D4F6F] ${
                      errors.appointment_date
                        ? "border-red-400 bg-red-50/20"
                        : "border-[#D8E2EC] hover:border-[#CBD5E1]"
                    }`}
                    onClick={() => {
                      try {
                        dateInputRef.current?.showPicker?.();
                      } catch {
                        dateInputRef.current?.focus();
                      }
                    }}
                  >
                    <input
                      id="appointment_date"
                      type="date"
                      min={todayDate}
                      ref={(e) => {
                        register("appointment_date").ref(e);
                        dateInputRef.current = e;
                      }}
                      className="w-full bg-transparent px-4 py-3.5 text-[14.5px] font-medium text-[#0E1A2B] cursor-pointer focus:outline-none"
                      {...register("appointment_date")}
                    />
                  </div>
                  {errors.appointment_date && (
                    <p className="mt-1.5 text-[12.5px] font-medium text-red-600">
                      {errors.appointment_date?.message}
                    </p>
                  )}
                </div>

                {/* Time Slot Dropdown */}
                <div className="relative" ref={timeDropdownRef}>
                  <label
                    htmlFor="appointment_time"
                    className="block text-[13px] font-semibold uppercase tracking-wider text-[#0E1A2B] mb-2"
                  >
                    Time Slot <span className="text-red-500">*</span>
                  </label>

                  <input
                    type="hidden"
                    id="appointment_time"
                    {...register("appointment_time")}
                    value={selectedTime}
                  />

                  <button
                    type="button"
                    onClick={() => setIsTimeOpen((prev) => !prev)}
                    aria-haspopup="listbox"
                    aria-expanded={isTimeOpen}
                    className={`w-full flex items-center justify-between rounded-xl border px-4 py-3.5 text-[14.5px] text-left transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#2D4F6F]/15 ${
                      isTimeOpen
                        ? "border-[#2D4F6F] bg-white ring-2 ring-[#2D4F6F]/15"
                        : errors.appointment_time
                        ? "border-red-400 bg-red-50/20"
                        : "border-[#D8E2EC] bg-[#FAFBFD] hover:border-[#CBD5E1]"
                    }`}
                  >
                    <span
                      className={
                        selectedTime
                          ? "text-[#0E1A2B] font-medium"
                          : "text-[#94A3B8]"
                      }
                    >
                      {selectedTime || "Select Preferred Slot"}
                    </span>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={`text-[#64748B] transition-transform duration-200 ${
                        isTimeOpen ? "rotate-180" : ""
                      }`}
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </button>

                  {/* Dropdown Menu */}
                  {isTimeOpen && (
                    <div
                      role="listbox"
                      className="absolute left-0 right-0 top-full mt-1.5 z-50 rounded-xl border border-[#D8E2EC] bg-white p-1.5 shadow-[0_12px_28px_rgba(14,26,43,0.1)]"
                    >
                      <div className="space-y-0.5">
                        {timeSlotOptions.map((item) => {
                          const isSelected = selectedTime === item.value;
                          return (
                            <button
                              key={item.value}
                              type="button"
                              role="option"
                              aria-selected={isSelected}
                              onClick={() => handleSelectTimeSlot(item.value)}
                              className={`w-full flex items-center justify-between rounded-lg px-3.5 py-2.5 text-left text-[14px] transition-colors cursor-pointer ${
                                isSelected
                                  ? "bg-[#EEF5FC] text-[#2D4F6F] font-semibold"
                                  : "hover:bg-[#F8FAFC] text-[#0E1A2B]"
                              }`}
                            >
                              <span>{item.label}</span>
                              {isSelected && (
                                <svg
                                  width="16"
                                  height="16"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="#2D4F6F"
                                  strokeWidth="2.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <polyline points="20 6 9 17 4 12" />
                                </svg>
                              )}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {errors.appointment_time && (
                    <p className="mt-1.5 text-[12.5px] font-medium text-red-600">
                      {errors.appointment_time?.message}
                    </p>
                  )}
                </div>
              </div>

              {/* 5. Clinical Symptoms / Notes */}
              <div>
                <label
                  htmlFor="notes"
                  className="block text-[13px] font-semibold uppercase tracking-wider text-[#0E1A2B] mb-2"
                >
                  Reason for Consultation{" "}
                  <span className="text-[12px] font-normal lowercase text-[#64748B]">
                    (optional)
                  </span>
                </label>
                <textarea
                  id="notes"
                  rows={3}
                  placeholder="Briefly describe your symptoms, condition, or question..."
                  className="w-full rounded-xl border border-[#D8E2EC] px-4 py-3.5 text-[14.5px] text-[#0E1A2B] placeholder-[#94A3B8] transition-all bg-[#FAFBFD] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2D4F6F]/15 focus:border-[#2D4F6F] resize-y"
                  {...register("notes")}
                />
              </div>

              {/* Clinical Assurance Note */}
              <div className="pt-1 text-center">
                <p className="text-[12.5px] text-[#64748B]">
                  Confidential medical consultation • New Road, Pokhara • Verified appointment confirmation
                </p>
              </div>

              {/* Inline Status Message */}
              {status && (
                <div
                  className={`rounded-xl px-4 py-3 text-[13.5px] font-medium flex items-center gap-2 ${
                    status.type === "success"
                      ? "bg-emerald-50 text-emerald-800 border border-emerald-200"
                      : "bg-red-50 text-red-800 border border-red-200"
                  }`}
                >
                  <span>{status.type === "success" ? "✓" : "!"}</span>
                  <span>{status.text}</span>
                </div>
              )}

              {/* Submit CTA */}
              <div className="pt-2 text-center">
                <button
                  type="submit"
                  disabled={isProcessing || isSuccess}
                  className={`w-full sm:w-auto inline-flex items-center justify-center px-9 py-4 rounded-full text-white text-[14.5px] font-medium tracking-normal transition-all duration-200 hover:brightness-105 active:scale-[0.98] cursor-pointer disabled:cursor-not-allowed shadow-xs gap-2.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2D4F6F] ${
                    isSuccess
                      ? "bg-[linear-gradient(135deg,#1E7E51_0%,#34B27B_100%)]"
                      : "bg-[linear-gradient(135deg,#2D4F6F_0%,#527E9F_100%)]"
                  }`}
                >
                  {isProcessing ? (
                    <>
                      <Loader />
                      <span>Sending Request...</span>
                    </>
                  ) : isSuccess ? (
                    <>
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>Consultation Request Sent</span>
                    </>
                  ) : (
                    <span>Confirm Consultation Request</span>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BookAppointment;
