const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-slate-900 text-slate-400 py-6 text-center text-sm">
      <div className="container mx-auto px-4">
        <p className="mb-2">
          Built with{" "}
          <a
            href="https://react.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline text-teal-400"
          >
            React JS
          </a>{" "}
          and{" "}
          <a
            href="https://tailwindcss.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline text-teal-400"
          >
            Tailwind CSS
          </a>
          , deployed with{" "}
          <a
            href="https://vercel.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline text-teal-400"
          >
            Vercel
          </a>
          . All text is set in the{" "}
          <a
            href="https://fonts.google.com/specimen/Poppins"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline text-teal-400"
          >
            Poppins
          </a>{" "}
          typeface.
        </p>
        <p className="text-xs text-slate-500">
          &copy; {currentYear} YaferDev. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
