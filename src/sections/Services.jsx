import { SERVICES_DATA } from "../constants/servicesData";
const Services = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SERVICES_DATA.map((service, index) => (
          <div
            key={index}
            className="rounded-md bg-slate-800/20 hover:bg-slate-800/40  p-6 flex flex-col justify-start items-start transition-colors duration-300 border-1 border-gray-400/20 hover:border-gray-400/40"
          >
            <div className="mb-4 text-teal-400 ">
              <service.icon size={40} />
            </div>
            <h3 className="text-base md:text-lg font-semibold tracking-wide mb-3 text-slate-300">
              {service.title}
            </h3>
            <p className="text-sm md:text-base leading-relaxed w-full text-slate-400">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Services;
