import { SERVICES_DATA } from "../constants/servicesData";
const Services = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SERVICES_DATA.map((service, index) => (
          <div
            key={index}
            className="rounded-md hover:bg-slate-800/40 p-6 flex flex-col items-center text-center transition-colors duration-300 hover:shadow-md"
          >
            <div className="mb-4 text-teal-400 ">
              <service.icon size={34} />
            </div>
            <h3 className="text-md md:text-lg font-semibold tracking-wide mb-3 text-slate-300">
              {service.title}
            </h3>
            <p className="text-sm md:text-md leading-relaxed w-full text-center text-slate-400">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Services;
