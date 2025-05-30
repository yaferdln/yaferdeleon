import { memo } from "react";
const SocialLink = ({ social }) => {
  const Icon = social.icon;
  return (
    <a
      href={social.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={social.name}
      className="text-slate-400 hover:text-teal-300 hover:scale-110 transition-transform duration-300"
    >
      {/*
        Baguhin ang Icon class para maging responsive.
        Sa default (mobile first), gawin itong mas maliit, halimbawa w-6 h-6.
        Sa 'lg' (large screens) pataas, gawin itong w-8 h-8.
      */}
      <Icon className="w-6 h-6 lg:w-8 lg:h-8" />
    </a>
  );
};

export default memo(SocialLink);
