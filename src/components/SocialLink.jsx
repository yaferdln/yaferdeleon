const SocialLink = ({ social }) => {
  const Icon = social.icon;
  return (
    <a
      href={social.href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-slate-400 hover:text-teal-300 hover:scale-110  transition-transform duration-300"
    >
      <Icon className="w-5 md:w-7 h-5 md:h-7" />
    </a>
  );
};

export default SocialLink;
