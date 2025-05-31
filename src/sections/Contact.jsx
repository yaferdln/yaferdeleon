import { memo, useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    try {
      const res = await fetch("https://submit-form.com/F7csZk6X2", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSucceeded(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        const data = await res.json();
        setError(data.message || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("Failed to send. Please check your connection.");
    }

    setSubmitting(false);
  };

  return (
    <>
      <div className="md:hidden sticky top-0 z-30 w-full bg-slate-900/60 backdrop-blur-md">
        <h1 className="text-sm sm:text-base py-3 px-6 font-bold text-teal-300 uppercase tracking-wider mb-6">
          Contact
        </h1>
      </div>
      <div className="px-4">
        <form
          onSubmit={handleSubmit}
          className="w-full md:max-w-lg mx-auto space-y-6 rounded-md group border-1 border-gray-400/10 hover:border-gray-400/20 bg-slate-900/10 hover:bg-slate-900/20 p-6 transition-colors duration-300"
        >
          <div>
            <label
              htmlFor="name"
              className="block text-sm md:text-base mb-2 text-slate-300"
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full rounded-md px-4 py-2 text-sm md:text-base bg-slate-800/40 text-slate-300 focus:outline-none focus:ring-1 focus:ring-teal-400"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm md:text-base mb-2 text-slate-300"
            >
              Email Address
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full rounded-md px-4 py-2 text-sm md:text-base bg-slate-800/40 text-slate-300 focus:outline-none focus:ring-1 focus:ring-teal-400"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm md:text-base mb-2 text-slate-300"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full rounded-md px-4 py-2 text-sm md:text-base bg-slate-800/40 text-slate-300 focus:outline-none focus:ring-1 focus:ring-teal-400"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={submitting}
            className={`w-full py-3 px-6 text-sm md:text-base font-semibold bg-slate-800/50 hover:text-teal-400 cursor-pointer text-slate-300 transition-colors duration-300 ${
              submitting ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {submitting ? "Sending..." : "Send Message"}
          </button>

          {succeeded && (
            <p className="text-green-500 text-center font-medium mt-4">
              Thanks for reaching out! I'll get back to you soon 👋
            </p>
          )}

          {error && (
            <p className="text-red-500 text-center font-medium mt-4">{error}</p>
          )}
        </form>
      </div>
    </>
  );
};

export default memo(Contact);
