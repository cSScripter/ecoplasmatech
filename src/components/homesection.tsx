// import Link from "next/link";

export default function HomeSection() {
    return (
        <section className="relative w-full h-[90vh] overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="homepage/backgroundloop.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      <div className="relative z-10 flex flex-col h-full items-center justify-center text-center md:items-start md:justify-end gap-10 md:gap-15 px-5 md:px-10 pb-5 md:pb-15">
        <h1>Vehicle Batteries Recycling for NonProfit</h1>
        <a href="#" className="inline-block px-8 py-3 bg-black border border-white rounded-full hover:bg-white hover:text-black">
        Explore
      </a>
      </div>
      </section>
    )
}