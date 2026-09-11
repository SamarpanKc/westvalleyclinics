import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import Loader from "../loader/Loader";

const schema = yup
  .object({
    fullName: yup.string().required("FullName is required."),
    contact: yup.string().required("Contact Number is required."),
    subject: yup.string().required("Subject is required"),
    message: yup.string(),
  })
  .required();

const subjectOptions = [
  { label: "Hair Transplant", value: "hairTransplant" },
  { label: "Skin & Aesthetics", value: "skin&Aesthetics" },
  { label: "Dental Clinic", value: "dentalClinic" },
  { label: "Endocrine & Nutrition", value: "endocrine&Nutrition" },
];

function BookAppointment() {
  const [isProcessing, setIsProcessing] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (formData) => {
    setIsProcessing(true);
    try {
      await emailjs.send(
        "service_9psp62l",
        "template_e1pz6hc",
        formData,
        process.env.NEXT_PUBLIC_EMAILJS_KEY,
      );

      setValue("fullName", "");
      setValue("contact", "");
      setValue("subject", "");
      setValue("message", "");

      Swal.fire({
        title: "Success!",
        text: "message sent successfully",
        icon: "success",
        showConfirmButton: false,
        timer: 2500,
      });
    } catch (e) {
      console.log(e);
      Swal.fire({
        title: "Error!",
        text: e || "Error Occurred",
        icon: "error",
        showConfirmButton: false,
        timer: 2500,
      });
    }
    setIsProcessing(false);
  };

  return (
    <div className="app-layout mt-16 pt-4 pb-20" id="contact">
      <h3 className="text-large text-center text-primary">
        Book Your Appointment
      </h3>
      <p className="mt-2 text-center text-neutral-700">
        Book now, Schedule your hair care appointment{" "}
        <span className="text-primary">today!</span>
      </p>

      <form
        className="mt-8 max-w-[80%] md:max-w-[70%] lg:max-w-[50%] mx-auto"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <label htmlFor="fullName" className="label">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Enter your full name"
            className="input"
            {...register("fullName")}
          />
          {errors.fullName && (
            <p className="text-[14px] text-red-700">
              {errors.fullName?.message}
            </p>
          )}
        </div>

        <div className="mt-4">
          <label htmlFor="contactNumber" className="label">
            Contact Number <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Enter your contact number"
            className="input"
            {...register("contact")}
          />
          {errors.contact && (
            <p className="text-[14px] text-red-700">
              {errors.contact?.message}
            </p>
          )}
        </div>

        <div className="mt-4">
          <label htmlFor="subject" className="label">
            Subject <span className="text-red-500">*</span>
          </label>
          <select className="input" {...register("subject")}>
            <option value="" hidden>
              Select a Inquiry
            </option>

            {subjectOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {errors.subject && (
            <p className="text-[14px] text-red-700">
              {errors.subject?.message}
            </p>
          )}
        </div>

        <div className="mt-4">
          <label htmlFor="message" className="label">
            Message
          </label>

          <textarea
            placeholder="Write a Message"
            className="input"
            {...register("message")}
          />
        </div>

        <div className="text-center">
          <button
            className="mt-4 cursor-pointer primary-btn inline-flex"
            disabled={isProcessing}
          >
            Book your seat now {isProcessing && <Loader />}
          </button>
        </div>
      </form>
    </div>
  );
}

export default BookAppointment;
