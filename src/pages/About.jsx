import { useRef } from "react";
import { IoArrowRedoSharp } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const About = () => {
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    const container = containerRef.current;
    const rect = container.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const moveX = (x - centerX) / 20; // control strength
    const moveY = (y - centerY) / 20;

    container.style.setProperty("--move-x", `${-moveX}px`);
    container.style.setProperty("--move-y", `${-moveY}px`);
  };

  const handleMouseLeave = () => {
    const container = containerRef.current;
    container.style.setProperty("--move-x", `0px`);
    container.style.setProperty("--move-y", `0px`);
  };

  const steps = [
    {
      id: "01",
      text: "Tell us your project scope + target delivery date",
    },
    {
      id: "02",
      text: "We source equipment directly from manufacturers (often with volume pricing)",
    },
    {
      id: "03",
      text: "We ship any volume anywhere in the U.S. (jobsite or warehouse delivery)",
    },
    {
      id: "04",
      text: "We connect installer partners to financing and key service partners (PPA providers, AI-driven site surveys, and more)",
    },
    {
      id: "05",
      text: "We stay engaged as a problem-solving partner throughout every stage of growth",
    },
  ];

  return (
    <main className="w-full">
      {/* ================= PAGE HEADER ================= */}

      <section className="border-b bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-[120px]">
          {/* TOP CONTENT */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            {/* LEFT TEXT */}
            <div>
              <h1 className="text-[48px] md:text-[56px] leading-tight font-semibold text-gray-900 max-w-xl">
                About
                <span className="relative inline-block ml-3">
                  Us
                  {/* Red underline */}
                  <span className="absolute left-0 -bottom-2 w-full h-[3px] bg-red-600"></span>
                </span>
              </h1>

              <div className="mt-10">
                <button className="group inline-flex items-center bg-red-700 px-8 py-4 overflow-hidden">
                  <span className="text-white text-sm font-medium transition-transform duration-300 group-hover:-translate-x-2">
                    View open positions
                  </span>
                  <span className="ml-3 text-white opacity-0 translate-x-[-6px] transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                    →
                  </span>
                </button>
              </div>
            </div>

            {/* RIGHT DOT PATTERN */}
            <div className="hidden lg:block relative">
              <div className=" absolute right-0 top-0 w-[360px] h-[360px] bg-[radial-gradient(#d1d5db_1px,transparent_1px)] bg-[size:16px_16px]"></div>
            </div>
          </div>

          {/* IMAGE GRID */}
          <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative mt-24"
            style={{
              "--move-x": "0px",
              "--move-y": "0px",
            }}
          >
            {/* IMAGE GRID */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-end ">
              <img
                src="https://images.unsplash.com/photo-1581090700227-1e37b190418e"
                alt=""
                className="w-full object-cover transition-transform duration-500 ease-out"
                style={{
                  transform: "translate(var(--move-x), var(--move-y))",
                }}
              />

              <img
                src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc"
                alt=""
                className="w-full object-cover transition-transform duration-500 ease-out translate-y-10"
                style={{
                  transform:
                    "translate(calc(var(--move-x) * 0.8), calc(var(--move-y) * 0.8))",
                }}
              />

              <img
                src="https://images.unsplash.com/photo-1581091215367-59ab6c7c16d4"
                alt=" aa nhi rgha"
                className="  w-full object-cover transition-transform duration-500 ease-out"
                style={{
                  transform:
                    "translate(calc(var(--move-x) * 0.6), calc(var(--move-y) * 0.6))",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= ABOUT CONTENT ================= */}
      <section>
  <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 grid grid-cols-1 lg:grid-cols-2 gap-8">

    {/* LEFT CONTENT */}
    <div className="text-gray-700 leading-relaxed space-y-6 text-justify">
      <p>
        Built by industry veterans with decades of experience, GreenRaven
        is based in Sacramento, CA and has been developing relationships
        with product manufacturers and installers since 2012. With several
        decades building solar installation companies, software solutions
        for the solar industry and providing interim C-level consulting
        services, we speak your language.
      </p>

      <p>
        We understand the need for product sourcing without multiple
        layers of middle-men as well as the need for timely delivery with
        a dedication to details, communication and customer support you
        expect.
      </p>
    </div>

    {/* RIGHT TESTIMONIAL */}
    <div className="bg-gray-50 border border-gray-200 rounded-md p-10 shadow-md shadow-red-700 hover:shadow-md">
      <p className="text-gray-700 leading-relaxed text-justify">
        After testing Green Raven for a small commercial solar project, we
        found that we could cut our material costs almost in half.
        Fantastic communication and industry advice on so many other
        levels! Definitely a resource I can’t recommend enough.
      </p>

      <p className="mt-4 font-medium text-gray-900">
        – John K.
      </p>
    </div>

  </div>
</section>


      {/* ================= HOW WE WORK ================= */}

      <section className="bg-white ">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-[140px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-24 gap-y-20">
            {/* LEFT CONTENT */}
            <div className="lg:col-span-4">
              <h2 className="text-[44px] font-semibold mb-8">How We Work</h2>

              <p className="text-[18px] leading-[1.8] text-gray-700 mb-10">
                Green Raven supports energy projects by combining
                manufacturer-direct supply with end-to-end execution support.
              </p>

              <p className="text-[16px] font-medium text-gray-900">
                In short: we remove friction and help energy projects move
                faster.
              </p>
            </div>

            {/* RIGHT CARDS */}
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              {steps.map((step) => (
                <div
                  key={step.id}
                  className="border border-gray-200 bg-gray-50 shadow-md hover:-translate-y-2 p-8 hover:shadow-md hover:shadow-gray-300 transition-all duration-300 hover:shadow-xl"
                >
                  <div className="text-sm font-semibold text-gray-400 mb-4">
                    {step.id}
                  </div>

                  <p className="text-[17px] leading-[1.7] text-gray-900">
                    {step.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className=" bg-[#0B132B]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 text-center">
          <h3 className="text-2xl font-semibold mb-6 text-white">
            Let’s talk about your next energy project.
          </h3>

          <NavLink
            to={"/contact"}
            className="group inline-flex items-center bg-red-700 px-8 py-3 overflow-hidden"
          >
            {/* Text */}
            <span className=" relative text-white text-m font-medium transition-transform duration-300 ease-out group-hover:-translate-x-2">
              Contact Us
            </span>

            {/* Arrow */}
            <span className=" text-white text-xl opacity-0 translate-x-[-6px] transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-x-0">
              <IoArrowRedoSharp />
            </span>
          </NavLink>
        </div>
      </section>

      {/* How we Work */}
    </main>
  );
};

export default About;