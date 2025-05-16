const Footer = () => {
  return (
    <footer className="text-slate-400 py-8 text-left text-sm">
      <p>
        Built with{" "}
        <a
          href="https://react.dev/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline text-slate-300"
        >
          React JS
        </a>{" "}
        and{" "}
        <a
          href="https://tailwindcss.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline text-slate-300"
        >
          Tailwind CSS
        </a>
        , deployed with{" "}
        <a
          href="https://vercel.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline text-slate-300"
        >
          Vercel
        </a>
        . All text is set in the{" "}
        <a
          href="https://fonts.google.com/specimen/Fira+Sans"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline text-slate-300"
        >
          Fira Sans
        </a>{" "}
        typeface.
      </p>
    </footer>
  );
};

export default Footer;
