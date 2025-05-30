import { SERVICES_DATA } from "../constants/servicesData";
import { memo, useMemo } from "react";
const Services = () => {
  const services = useMemo(() => SERVICES_DATA, []);
  return (
    <>
      <div className="md:hidden sticky top-0 z-30 w-full bg-slate-900/60 backdrop-blur-md">
        <h1 className="text-sm sm:text-base py-3 px-6 font-bold text-teal-300 uppercase tracking-wider mb-6">
          Services
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 px-4">
        {services.map((service) => (
          <div
            key={service.id}
            className="group border border-gray-700 rounded-md p-6 transition-colors duration-300"
          >
            <div className="mb-4 text-teal-400 ">
              <service.icon size={34} />
            </div>
            <h3 className="text-base md:text-lg font-semibold tracking-wide mb-3 text-slate-300 group-hover:text-teal-400 transition-colors duration-300">
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

export default memo(Services);
