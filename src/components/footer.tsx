export default function Footer() {
  return (
    <footer className="bg-[#1f1f1f] text-gray-300 p-6 md:px-10 mt-auto">
      <div className="flex flex-col lg:flex-row justify-center gap-2 lg:gap-10 items-center text-[15px] font-normal font-montserrat text-center">
        <span>Eco Plasma Technology © 2025</span>
        <span>Arizona, USA</span>
        <span>
          Phone: <span className="text-white">(480) 231-6601</span>
        </span>
        <span>
          E-mail:{" "}
          <a href="omer@ecoplasmatech.com" className="text-white">
            omer@ecoplasmatech.com
          </a>
        </span>
      </div>
    </footer>
  );
}
