import Image from "next/image";
import ExpandingHr from "./expandinghr";

export default function Manufacturing() {
  return (
    <section className="flex flex-col items-center justify-center">
      <div className="w-[90vw] mt-5 md:mt-15">
        <h2 className="mb-5 md:mb-15 text-center">Our Manufacturing</h2>
        <ExpandingHr />
        {/* Black Mass Section */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-5 md:gap-24 w-full">
          <Image
            src="/homepage/blackmass.avif"
            alt="recycling lithium"
            width={510}
            height={290}
          />
          <div className="flex flex-col gap-5 lg:max-w-[31vw]">
            <h3>Black Mass Recycling</h3>
            <p>
              Lines will have the capacity to process 100 tons per day and can
              reach up to 300 tons per day depending on battery inventory.
              These production lines are highly efficient and will satisfy our
              manufacturing capacity plans
            </p>
          </div>
        </div>
 <ExpandingHr />
        {/* Lithium Section  */}
        

        <div className="flex flex-col md:flex-row items-start justify-between gap-5 md:gap-24 w-full">
          <Image
            src="/homepage/lithium.avif"
            alt="recycling lithium"
            width={510}
            height={290}
          />
          <div className="flex flex-col gap-5 md:max-w-[31vw]">
            <h3>Lithium Recycling</h3>
            <p>
              Lines will have the capacity to process 96-312 tons per day. Our
              projections for the production of lithium carbonate equivalent
              (LCE) for year 1-2 will be 120 ton/per/year.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-10 items-center justify-center mt-5 md:mt-20">
             <Image
            src="/homepage/metal.avif"
            alt="recycling lithium"
            width={390}
            height={260}
          />
           <Image
            src="/homepage/batterymetal.avif"
            alt="recycling lithium"
            width={265}
            height={260}
          />
        </div>
        <ExpandingHr />
      </div>
    </section>
  );
}
