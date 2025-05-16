import {
  FaCode,
  FaPaintBrush,
  FaUpload,
  FaBolt,
  FaDesktop,
  FaTools,
} from "react-icons/fa";

const Services = () => {
  const services = [
    {
      icon: FaCode,
      title: "Web Development",
      description: "Building responsive and modern websites with clean code.",
    },
    {
      icon: FaPaintBrush,
      title: "UI/UX Design",
      description: "Designing user-friendly and visually appealing interfaces.",
    },
    {
      icon: FaUpload,
      title: "Website Deployment",
      description:
        "Helping launch your website online using tools like GitHub Pages or Vercel.",
    },
    {
      icon: FaBolt,
      title: "SEO Optimization",
      description: "Improving website ranking with SEO best practices.",
    },
    {
      icon: FaDesktop,
      title: "Custom Web Apps",
      description:
        "Developing web applications designed specifically for business requirements.",
    },
    {
      icon: FaTools,
      title: "Website Maintenance",
      description: "Keeping websites secure, updated, and running smoothly.",
    },
  ];

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-slate-800/20 rounded-md hover:bg-slate-800/40 hover:text-teal-400 p-6 flex flex-col items-center text-center transition-colors duration-300 hover:shadow-md"
          >
            <div className="mb-4 text-5xl text-slate-400">
              <service.icon />
            </div>
            <h3 className="text-xl font-semibold tracking-wide mb-3 text-slate-300">
              {service.title}
            </h3>
            <p className="text-md leading-relaxed w-full text-center text-slate-400">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Services;
