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
      .required("Email address is required.")
      .email("Please enter a valid email address."),
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
  { label: "Skin & Aesthetics", value: "Skin & Aesthetics" },
  { label: "Endocrine & Nutrition", value: "Endocrine & Nutrition" },
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
  const deptDropdownRef = useRef(null);
  const timeDropdownRef = useRef(null);
  const dateInputRef = useRef(null);

  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [status, setStatus] = useState(null);

  const [isDeptOpen, setIsDeptOpen] = useState(false);
  const [selectedDept, setSelectedDept] = useState("");

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
  });

  // Minimum selectable date is today
  const todayDate = new Date().toISOString().split("T")[0];

  // Close dropdowns on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        deptDropdownRef.current &&
        !deptDropdownRef.current.contains(event.target)
      ) {
        setIsDeptOpen(false);
      }
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
    setIsDeptOpen(false);
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
        text: "Consultatiom request sent successfully! Our team will contact you shortly.",
      });

      reset();
      setSelectedDept("");
      setSelectedTime("");

      Swal.fire({
        title: "Appointment Requested!",
        text: "Your appointment request has been submitted successfully. We'll get back to you soon!",
        icon: "success",
        confirmButtonColor: "#2D4F6F",
        timer: 3500,
      });

      // Reset button success state after 4 seconds
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
        title: "Error!",
        text: "Something went wrong sending your request. Please try again.",
        icon: "error",
        confirmButtonColor: "#2D4F6F",
        timer: 3500,
      });
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <section className="bg-[#f7f9fc] py-16 sm:py-20 lg:py-24" id="contact">
      {/* Remove harsh outline on click completely across all form elements */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        #contact input,
        #contact textarea,
        #contact button,
        #contact select {
          outline: none !important;
          -webkit-tap-highlight-color: transparent !important;
        }
        #contact input:focus,
        #contact textarea:focus,
        #contact button:focus,
        #contact input:focus-visible,
        #contact textarea:focus-visible,
        #contact button:focus-visible {
          outline: none !important;
          box-shadow: none !important;
        }
        input[type="date"]::-webkit-calendar-picker-indicator {
          cursor: pointer;
          opacity: 0.7;
          filter: invert(36%) sepia(35%) saturate(850%) hue-rotate(168deg) brightness(92%) contrast(92%);
          padding: 4px;
          border-radius: 6px;
          transition: all 0.2s ease;
        }
        input[type="date"]::-webkit-calendar-picker-indicator:hover {
          opacity: 1;
          transform: scale(1.15);
        }
      `,
        }}
      />

      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16 xl:px-20">
        {/* Section Heading */}
        <div className="mx-auto max-w-[760px] text-center">
          <h2
            className="font-semibold leading-[1.08] tracking-[-0.04em] text-[#0E1A2B]"
            style={{ fontSize: "clamp(28px, 4vw, 48px)" }}
          >
            Book Your <span className="text-[#527E9F]">Appointment.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-[540px] text-[15px] leading-7 text-[#536273] sm:text-[16px]">
            Schedule your consultation with West Valley experts{" "}
            <span className="font-medium text-[#2D6A94]">today!</span>
          </p>
        </div>

        {/* Form Container Card */}
        <div className="mx-auto mt-10 sm:mt-12 max-w-[740px]">
          <div
            className="bg-white/10 backdrop-blur-xl p-6 sm:p-10 lg:p-12 rounded-2xl"
            style={{ position: "relative" }}
          >
            <form
              ref={formRef}
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              className="space-y-5"
            >
              {/* Full Name */}
              <div>
                <label
                  htmlFor="patient_name"
                  className="block text-[14px] font-semibold text-[#0E2236] mb-1.5"
                >
                  Full Name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-[#527E9F]">
                    <svg
                      width="17"
                      height="17"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  </div>
                  <input
                    id="patient_name"
                    type="text"
                    placeholder="Enter patient full name"
                    className={`w-full bg-[#f7f9fc] rounded-xl border pl-10 pr-4 py-3 text-[15px] text-[#0E2236] placeholder-[#8A9BA8] transition-colors ${
                      errors.patient_name
                        ? "border-red-400 bg-red-50/20"
                        : "border-[#D8E7F1] focus:border-[#2D6A94]"
                    }`}
                    {...register("patient_name")}
                  />
                </div>
                {errors.patient_name && (
                  <p className="mt-1.5 text-[12.5px] font-medium text-red-600 flex items-center gap-1">
                    <span>•</span> {errors.patient_name?.message}
                  </p>
                )}
              </div>

              {/* Email Address & Phone Number */}
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                {/* Email Address */}
                <div>
                  <label
                    htmlFor="patient_email"
                    className="block text-[14px] font-semibold text-[#0E2236] mb-1.5"
                  >
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className=" pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-[#527E9F]">
                      <svg
                        width="17"
                        height="17"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                      </svg>
                    </div>
                    <input
                      id="patient_email"
                      type="email"
                      placeholder="name@example.com"
                      className={`w-full bg-[#f7f9fc] rounded-xl border pl-10 pr-4 py-3 text-[15px] text-[#0E2236] placeholder-[#8A9BA8] transition-colors ${
                        errors.patient_email
                          ? "border-red-400 bg-red-50/20"
                          : "border-[#D8E7F1] focus:border-[#2D6A94] focus:bg-white"
                      }`}
                      {...register("patient_email")}
                    />
                  </div>
                  {errors.patient_email && (
                    <p className="mt-1.5 text-[12.5px] font-medium text-red-600 flex items-center gap-1">
                      <span>•</span> {errors.patient_email?.message}
                    </p>
                  )}
                </div>

                {/* Phone Number (2-4-4: 98 0000 0000) */}
                <div>
                  <label
                    htmlFor="patient_phone"
                    className="block text-[14px] font-semibold text-[#0E2236] mb-1.5"
                  >
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-[#527E9F]">
                      <svg
                        width="17"
                        height="17"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.36 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6.06 6.06l.96-.96a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                    </div>
                    <input
                      id="patient_phone"
                      type="tel"
                      inputMode="numeric"
                      maxLength={12}
                      placeholder="98 0000 0000"
                      onKeyDown={handlePhoneKeyDown}
                      className={`w-full bg-[#f7f9fc] rounded-xl border pl-10 pr-4 py-3 text-[15px] text-[#0E2236] placeholder-[#8A9BA8] tracking-wide transition-colors ${
                        errors.patient_phone
                          ? "border-red-400 bg-red-50/20"
                          : "border-[#D8E7F1] focus:border-[#2D6A94] focus:bg-white"
                      }`}
                      {...register("patient_phone", {
                        onChange: handlePhoneInputChange,
                      })}
                    />
                  </div>
                  {errors.patient_phone && (
                    <p className="mt-1.5 text-[12.5px] font-medium text-red-600 flex items-center gap-1">
                      <span>•</span> {errors.patient_phone?.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Department Custom Dropdown (No Sub-description) */}
              <div className="relative" ref={deptDropdownRef}>
                <label
                  htmlFor="department"
                  className="block text-[14px] font-semibold text-[#0E2236] mb-1.5"
                >
                  Department <span className="text-red-500">*</span>
                </label>

                <input
                  type="hidden"
                  id="department"
                  {...register("department")}
                  value={selectedDept}
                />

                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-[#527E9F] z-10">
                    <svg
                      width="17"
                      height="17"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                    </svg>
                  </div>

                  <button
                    type="button"
                    onClick={() => setIsDeptOpen((prev) => !prev)}
                    aria-haspopup="listbox"
                    aria-expanded={isDeptOpen}
                    className={`w-full flex items-center justify-between rounded-xl border pl-10 pr-4 py-3 text-[15px] text-left transition-colors cursor-pointer ${
                      isDeptOpen
                        ? "border-[#2D6A94] bg-white"
                        : errors.department
                        ? "border-red-400 bg-red-50/20"
                        : "border-[#D8E7F1] hover:border-[#527E9F]"
                    }`}
                  >
                    <span
                      className={
                        selectedDept
                          ? "text-[#0E2236] font-medium"
                          : "text-[#8A9BA8]"
                      }
                    >
                      {selectedDept || "Select Department"}
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
                      className={`text-[#527E9F] transition-transform duration-200 ${
                        isDeptOpen ? "rotate-180" : ""
                      }`}
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </button>

                  {/* Dropdown Menu Panel (Clean Labels Only) */}
                  {isDeptOpen && (
                    <div
                      role="listbox"
                      className="absolute left-0 right-0 top-full mt-1.5 z-50 rounded-xl border border-[#D8E7F1] bg-white p-1.5 shadow-[0_12px_32px_rgba(82,126,159,0.16)]"
                    >
                      <div className="space-y-0.5">
                        {departmentOptions.map((item) => {
                          const isSelected = selectedDept === item.value;
                          return (
                            <button
                              key={item.value}
                              type="button"
                              role="option"
                              aria-selected={isSelected}
                              onClick={() => handleSelectDepartment(item.value)}
                              className={`w-full flex items-center justify-between rounded-lg px-3.5 py-2.5 text-left text-[14.5px] transition-colors cursor-pointer ${
                                isSelected
                                  ? "bg-[#EEF5FC] text-[#2D6A94] font-semibold"
                                  : "hover:bg-[#F4F8FC] text-[#0E2236] font-medium"
                              }`}
                            >
                              <span>{item.label}</span>
                              {isSelected && (
                                <svg
                                  width="16"
                                  height="16"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="#2D6A94"
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
                </div>

                {errors.department && (
                  <p className="mt-1.5 text-[12.5px] font-medium text-red-600 flex items-center gap-1">
                    <span>•</span> {errors.department?.message}
                  </p>
                )}
              </div>

              {/* Schedule: Stylish Calendar Date & Custom Dropdown Time Slot */}
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                {/* Stylish Appointment Date Input */}
                <div>
                  <label
                    htmlFor="appointment_date"
                    className="block text-[14px] font-semibold text-[#0E2236] mb-1.5"
                  >
                    Appointment Date <span className="text-red-500">*</span>
                  </label>
                  <div
                    className={`relative w-full rounded-xl border transition-colors cursor-pointer flex items-center ${
                      errors.appointment_date
                        ? "border-red-400 bg-red-50/20"
                        : "border-[#D8E7F1] hover:border-[#527E9F] focus-within:border-[#2D6A94] focus-within:bg-white"
                    }`}
                    onClick={() => {
                      try {
                        dateInputRef.current?.showPicker?.();
                      } catch {
                        dateInputRef.current?.focus();
                      }
                    }}
                  >
                    <div className="pointer-events-none pl-3.5 text-[#527E9F] flex items-center">
                      <svg
                        width="17"
                        height="17"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect
                          x="3"
                          y="4"
                          width="18"
                          height="18"
                          rx="2"
                          ry="2"
                        />
                        <line x1="16" y1="2" x2="16" y2="6" />
                        <line x1="8" y1="2" x2="8" y2="6" />
                        <line x1="3" y1="10" x2="21" y2="10" />
                      </svg>
                    </div>
                    <input
                      id="appointment_date"
                      type="date"
                      min={todayDate}
                      ref={(e) => {
                        register("appointment_date").ref(e);
                        dateInputRef.current = e;
                      }}
                      className="w-full bg-transparent pl-2.5 pr-3.5 py-3 text-[15px] font-medium text-[#0E2236] cursor-pointer"
                      {...register("appointment_date")}
                    />
                  </div>
                  {errors.appointment_date && (
                    <p className="mt-1.5 text-[12.5px] font-medium text-red-600 flex items-center gap-1">
                      <span>•</span> {errors.appointment_date?.message}
                    </p>
                  )}
                </div>

                {/* Time Slot Custom Dropdown Menu */}
                <div className="relative" ref={timeDropdownRef}>
                  <label
                    htmlFor="appointment_time"
                    className="block text-[14px] font-semibold text-[#0E2236] mb-1.5"
                  >
                    Time Slot <span className="text-red-500">*</span>
                  </label>

                  <input
                    type="hidden"
                    id="appointment_time"
                    {...register("appointment_time")}
                    value={selectedTime}
                  />

                  <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-[#527E9F] z-10">
                      <svg
                        width="17"
                        height="17"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                    </div>

                    <button
                      type="button"
                      onClick={() => setIsTimeOpen((prev) => !prev)}
                      aria-haspopup="listbox"
                      aria-expanded={isTimeOpen}
                      className={`w-full flex items-center justify-between rounded-xl border pl-10 pr-4 py-3 text-[15px] text-left transition-colors cursor-pointer ${
                        isTimeOpen
                          ? "border-[#2D6A94] bg-white"
                          : errors.appointment_time
                          ? "border-red-400 bg-red-50/20"
                          : "border-[#D8E7F1] hover:border-[#527E9F]"
                      }`}
                    >
                      <span
                        className={
                          selectedTime
                            ? "text-[#0E2236] font-medium"
                            : "text-[#8A9BA8]"
                        }
                      >
                        {selectedTime || "Select Time Slot"}
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
                        className={`text-[#527E9F] transition-transform duration-200 ${
                          isTimeOpen ? "rotate-180" : ""
                        }`}
                      >
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </button>

                    {/* Time Slot Options Panel */}
                    {isTimeOpen && (
                      <div
                        role="listbox"
                        className="absolute left-0 right-0 top-full mt-1.5 z-50 rounded-xl border border-[#D8E7F1] bg-white p-1.5 shadow-[0_12px_32px_rgba(82,126,159,0.16)]"
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
                                className={`w-full flex items-center justify-between rounded-lg px-3.5 py-2.5 text-left text-[14.5px] transition-colors cursor-pointer ${
                                  isSelected
                                    ? "bg-[#EEF5FC] text-[#2D6A94] font-semibold"
                                    : "hover:bg-[#F4F8FC] text-[#0E2236] font-medium"
                                }`}
                              >
                                <span>{item.label}</span>
                                {isSelected && (
                                  <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="#2D6A94"
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
                  </div>

                  {errors.appointment_time && (
                    <p className="mt-1.5 text-[12.5px] font-medium text-red-600 flex items-center gap-1">
                      <span>•</span> {errors.appointment_time?.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Symptoms / Notes */}
              <div>
                <label
                  htmlFor="notes"
                  className="block text-[14px] font-semibold text-[#0E2236] mb-1.5"
                >
                  Symptoms / Reason for visit{" "}
                  <span className="text-[12px] font-normal text-[#8A9BA8]">
                    (Optional)
                  </span>
                </label>
                <div className="relative">
                  <div className="pointer-events-none absolute top-3.5 left-0 flex items-start pl-3.5 text-[#527E9F]">
                    <svg
                      width="17"
                      height="17"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    </svg>
                  </div>
                  <textarea
                    id="notes"
                    rows={3}
                    placeholder="Briefly describe your symptoms or reason for visit..."
                    className="w-full bg-[#f7f9fc] rounded-xl border border-[#D8E7F1] pl-10 pr-4 py-3 text-[15px] text-[#0E2236] placeholder-[#8A9BA8] transition-colors focus:border-[#2D6A94] focus:bg-white resize-y"
                    {...register("notes")}
                  />
                </div>
              </div>

              {/* Inline Status Message */}
              {status && (
                <div
                  className={`rounded-xl px-4 py-3 text-[14px] font-medium flex items-center gap-2 ${
                    status.type === "success"
                      ? "bg-emerald-50 text-emerald-800 border border-emerald-200"
                      : "bg-red-50 text-red-800 border border-red-200"
                  }`}
                >
                  <span>{status.type === "success" ? "✓" : "⚠"}</span>
                  <span>{status.text}</span>
                </div>
              )}

              {/* Submit CTA with Processing & Success Toggle Animation */}
              <div className="pt-3 text-center">
                <button
                  type="submit"
                  disabled={isProcessing || isSuccess}
                  className={`relative inline-flex items-center justify-center px-8 py-3.5 rounded-full text-white text-[15px] font-medium tracking-normal transition-all duration-300 shadow-md hover:brightness-105 active:scale-[0.98] cursor-pointer disabled:cursor-not-allowed gap-2.5 ${
                    isSuccess
                      ? "bg-[linear-gradient(135deg,#1E7E51_0%,#34B27B_100%)] shadow-[0_4px_18px_rgba(30,126,81,0.35)] scale-105"
                      : "bg-[linear-gradient(135deg,#2D4F6F_0%,#6A97BC_100%)] hover:shadow-lg"
                  }`}
                >
                  {isProcessing ? (
                    <>
                      <Loader />
                      <span>Processing Request...</span>
                    </>
                  ) : isSuccess ? (
                    <>
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="animate-pulse"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>Request Sent Successfully!</span>
                    </>
                  ) : (
                    <span>Book Free Consultation</span>
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
