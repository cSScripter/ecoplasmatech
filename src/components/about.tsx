import ExpandingHr from "./expandinghr";
export default function About() {
  return (
    <section id="about" className="flex flex-col items-center justify-center bg-linear-to-r from-black to-gray-300 md:h-[90vh]">
        <div className="about max-w-[85vw] mt-5 md:mt-15">
      <h2 className="mb-5 md:mb-10">About Our Firm</h2>
      <p>
        EcoPlasma is a nonprofit organization with the goal of recycling a
        variety of batteries using various types of technologies.
      </p>
      <p>We are located in Phoenix Arizona.</p>
      <p>
        The company will collect and recycle batteries from both private and
        government entities in which a percentage of the revenue will be donated
        to our Veterans and local Schools located in Arizona.
      </p>
      <p className="mt-5 mb-5 md:mb-20">
        With the growing usage of electric vehicles and solar industries in the
        US, the market is projected to be flooded with used and depleted
        batteries on top of an already high inventory currently.
      </p>
      <ExpandingHr />
      </div>
    </section>
  );
}
