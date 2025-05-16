const SocialLink = ({ social }) => {
  const Icon = social.icon;
  return (
    <a
      href={social.href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-slate-400 hover:text-teal-300 transition-colors duration-300"
    >
      <Icon className="w-7 h-7" />
    </a>
  );
};

export default SocialLink;
