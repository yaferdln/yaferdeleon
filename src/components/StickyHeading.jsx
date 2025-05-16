const StickyHeading = ({ children }) => (
  <h1 className="fixed top-0 bg-slate-950/80 backdrop-blur text-teal-300 text-xl font-semibold py-2 px-6 z-50 w-full lg:hidden">
    {children}
  </h1>
);
export default StickyHeading;
