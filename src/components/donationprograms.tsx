import Image from "next/image";
import ExpandingHr from "./expandinghr";
export default function DonationPrograms() {
  return (
    <section className="flex flex-col justify-center items-center text-center">
      <h2>Donation Programs</h2>

      <div className="flex flex-col md:flex-row justify-between w-[90vw]">
        <div className="flex flex-col gap-5 md:gap-10 text-left md:max-w-[31vw] my-10">
          <h3>Education Program</h3>
          <p>
            We intend to establish an education program; this program will
            enable the local high schools to hire more teachers. The program
            will locate professionals from different types of industries that
            would like to change their career. The program will subsequently
            train and certify these individuals to become teachers. The plan is
            to reach individuals from the software engineers and IT engineers
            from local tech companies. The education program will supplement and
            match their existing salaries and will provide incentives to change
            their careers.
          </p>
        </div>
        <Image
          src="/homepage/saveourschools.avif"
          alt="Save Arizona Schools Donation Program"
          width={426}
          height={255}
          className="object-contain mt-10"
        />
      </div>
      <div className="w-[90vw]">
        <ExpandingHr />
      </div>

      <div className="flex flex-col md:flex-row justify-between w-[90vw]">
        <div className="flex flex-col gap-5 md:gap-10 text-left md:max-w-[31vw] my-10">
          <h3>Veterans Programs</h3>
          <p>
            Veterans Programs - We intend to hire veterans to work at our plant
            to become part of our integral team. We will offer them technical
            training as well as options for further education programs.
          </p>
          <p>
            Veterans Programs - We intend to hire veterans to work at our plant
            to become part of our integral team. We will offer them technical
            training as well as options for further education programs. We will
            provide financial assistance to active military families. Active
            military families are in constant need of assistance over a long
            duration where one parent is deployed to an overseas assignment.
            These families become single parent households until their spouses
            return from duty. On the surface, things like household maintenance
            and childcare seem like small tasks but become extremely challenging
            when one parent has been deployed.
          </p>
        </div>
        <Image
          src="/homepage/arizonaveteranfund.avif"
          alt="Save Arizona Schools Donation Program"
          width={483}
          height={255}
          className="object-contain mt-10"
        />
      </div>
      <div className="w-[90vw]">
        <ExpandingHr />
      </div>
    </section>
  );
}
