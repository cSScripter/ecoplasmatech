import Image from "next/image";

export default function Partners() {
    return (
        <section className="flex flex-col justify-center items-center gap-5 mt-5 md:mt-10 mb-5 md:mb-10">
            <h2 className="text-center">Our Partners</h2>
            <div className="flex flex-col md:flex-row gap-5 items-center md:gap-0 justify-around w-[70vw]">
                <Image
                src="/homepage/aquametals.avif"
                alt="Aqua Metals Partner Logo"
                width={204}
                height={192}
                className="object-contain"
                />
                <Image
                src="/homepage/exxonmobil.avif"
                alt="Aqua Metals Partner Logo"
                width={204}
                height={192}
                className="object-contain"
                />
                <Image
                src="/homepage/palamaticprocess.png"
                alt="Aqua Metals Partner Logo"
                width={204}
                height={192}
                className="object-contain"
                />
                
            </div>
        </section>
    )
}