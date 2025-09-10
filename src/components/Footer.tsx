export default function Footer() {
  return (
    <div className="min-w-full flex justify-between items-center mt-[28.5px] text-accent text-xs lg:flex-row flex-col-reverse">
      <div className="max-sm:text-center max-sm:max-w-[300px]">
        @ 2021, Made with ❤️ by{" "}
        <span className="text-primary">Creative Tim</span> &{" "}
        <span className="text-primary">Simmmple</span> for a better web
      </div>
      <ul className="flex gap-3 sm:gap-11 text-accent text-xs mb-3 lg:mb-0">
        <li>Creative Tim</li>
        <li>Simmmple</li>
        <li>Blog</li>
        <li>License</li>
      </ul>
    </div>
  );
}
