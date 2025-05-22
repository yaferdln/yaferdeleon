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
      <Icon className="w-7 md:w-7 h-9 md:h-9" />
    </a>
  );
};

export default memo(SocialLink);
