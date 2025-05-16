import { useState, useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  const [state, handleSubmit] = useForm("movdvqny");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {
    if (state.succeeded) {
      setFormData({ name: "", email: "", message: "" });
    }
  }, [state.succeeded]);

  return (
    <div className="flex flex-col gap-10 items-start text-left">
      {/* Contact Info - Left Aligned */}
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold tracking-wide">
          Contact Information
        </h3>
        <p className="text-sm">
          Feel free to reach out to me using the form below or through the
          contact details.
        </p>
        <div className="space-y-4 text-sm">
          <p>
            <span className="font-medium tracking-widest text-slate-300">
              Email:
            </span>{" "}
            <a href="mailto:deleonyafer@gmail.com" className="hover:underline">
              deleonyafer@gmail.com
            </a>
          </p>
          <p>
            <span className="font-medium tracking-widest text-slate-300">
              Mobile:
            </span>{" "}
            <a href="tel:+639128023499" className="hover:underline">
              09128023499
            </a>
          </p>
          <p>
            <span className="font-medium tracking-widest text-slate-300">
              LinkedIn:
            </span>{" "}
            <a
              href="https://www.linkedin.com/in/yaferdln/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              https://www.linkedin.com/in/yaferdln/
            </a>
          </p>
        </div>
      </div>

      {/* Form - Left Aligned */}

      <form
        onSubmit={handleSubmit}
        className="w-full bg-slate-800/30 p-8 space-y-6 rounded-md"
      >
        <div>
          <label htmlFor="name" className="block text-sm mb-1">
            Name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 bg-slate-700 text-slate-300 focus:outline-none focus:ring-1 focus:ring-teal-400 rounded"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm mb-1">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 bg-slate-700 text-slate-300 focus:outline-none focus:ring-1 focus:ring-teal-400 rounded"
          />
          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
            className="text-red-500 text-sm mt-1"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm mb-1">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="4"
            className="w-full px-4 py-2 bg-slate-700 text-slate-300 focus:outline-none focus:ring-1 focus:ring-teal-400 rounded"
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
            className="text-red-500 text-sm mt-1"
          />
        </div>

        <button
          type="submit"
          disabled={state.submitting}
          className={`w-full py-2 px-4 font-semibold bg-teal-400/50 hover:bg-teal-400/70 text-white rounded transition-colors duration-300 ${
            state.submitting ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {state.submitting ? "Sending..." : "Send Message"}
        </button>

        {state.succeeded && (
          <p className="text-green-500 text-center font-medium mt-4">
            Thanks for reaching out! I'll get back to you soon 👋
          </p>
        )}
      </form>
    </div>
  );
};

export default Contact;
