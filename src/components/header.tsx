import Image from "next/image";

export default function Header() {
    return (
          <header className="flex flex-col md:flex-row justify-center items-center">
            <Image
              src="/homepage/ecoplasmatechnologies.avif"
              alt="EcoPlasma Technologies Logo"
              width={470}
              height={390}
            />
            </header>
    )
}