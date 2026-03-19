import { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import avator from "../assets/Astra.png";
import { easeInOut, motion } from "motion/react";
const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();
  const [error, setError] = useState({});
  const [success, setSuccess] = useState(false);
  const onSubmit = async (data) => {
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        { name: data.name, email: data.email, message: data.message },
        PUBLIC_KEY,
      );
      setSuccess(true);
      reset();
    } catch (error) {
      setError(error.name);
      setSuccess(false);
    }
  };
  return (
    <>
      <div className="w-full flex justify-center lg:mb-10">
        <div className="h-px w-2/3 bg-linear-to-r from-transparent via-amethyst-smoke-800 to-transparent" />
      </div>
      <section
        id="contact"
        className="w-full min-h-screen grid grid-cols-1 md:grid-cols-2 justify-center items-center text-white"
      >
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="lg:px-15 hidden md:flex"
        >
          <img src={avator} alt="" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className=" flex justify-center items-center w-full h-full "
        >
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4 w-[90%]  bg-amethyst-smoke-600/50 border border-amethyst-smoke-700 rounded-2xl p-3 lg:p-8"
          >
            <h2 className="lg:text-3xl text-2xl font-bold text-center px-3">
              Let's Work Together
            </h2>

            {/* Name */}
            <input
              type="text"
              placeholder="Your Name"
              {...register("name", { required: "Name is required" })}
              className="px-3 py-2 rounded-xl bg-amethyst-smoke-200 border border-amethyst-smoke-900 text-amethyst-smoke-800 outline-none"
            />
            {errors.name && (
              <p className="-mt-4 text-xs lg:text-sm px-3 py-1 text-red-500">
                {errors.name.message}
              </p>
            )}

            {/* Email */}
            <input
              type="email"
              placeholder="Your Email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email",
                },
              })}
              className="px-3 py-2 rounded-xl bg-amethyst-smoke-200 border border-amethyst-smoke-900 text-amethyst-smoke-800 outline-none"
            />
            {errors.email && (
              <p className="-mt-4 text-xs lg:text-sm px-3 py-1 text-red-500">
                {errors.email.message}
              </p>
            )}

            {/* Message */}
            <textarea
              placeholder="Your Message"
              {...register("message", { required: "Message is required" })}
              className="px-3 py-2 rounded-xl bg-amethyst-smoke-200 border border-amethyst-smoke-900 text-amethyst-smoke-800 outline-none h-32"
            />
            {errors.message && (
              <p className="-mt-4 text-xs lg:text-sm px-3 py-1 text-red-500">
                {errors.message.message}
              </p>
            )}

            {/* Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-amethyst-smoke-700 cursor-pointer hover:bg-amethyst-smoke-800 text-white transition-all p-3 rounded-xl font-semibold"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </motion.div>
      </section>
    </>
  );
};

export default Contact;
