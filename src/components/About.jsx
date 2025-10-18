import { useGSAP } from "@gsap/react";
import abt1 from "../public/images/abt1.png";
import abt2 from "../public/images/abt2.png";
import abt3 from "../public/images/abt3.png";
import abt4 from "../public/images/abt4.png";
import abt5 from "../public/images/abt5.png";
import { SplitText } from "gsap/all";
import gsap from "gsap";

const About = () => {
  useGSAP(() => {
    const titleSplit = SplitText.create("#about h2", {
      type: "words",
    });

     gsap
      .timeline({
        scrollTrigger: {
          trigger: "#about",
          start: "top center",
        },
      })
      .from(titleSplit.words, {
        opacity: 0,
        duration: 1,
        yPercent: 100,
        ease: "expo.out",
        stagger: 0.02,
      })
      .from(".top-grid div, .bottom-grid div", {
        opacity: 0,
        duration: 1,
        ease: "power1.inOut",
        stagger: 0.04,
      }, ('-=.5')) // make the animation start half the second the previous one ends
  }, []);
  return (
    <section id="about">
      <div className="mb-16 md:px-0 px-5">
        <div className="content">
          <div className="md:col-span-8">
            <p className="badge">Best Cocktails</p>
            <h2>
              Where every detail matters <span className="text-white">-</span>{" "}
              from muddle to garnish
            </h2>
          </div>
          <div className="sub-content">
            <p>
              Every cocktail we serve is a reflection of our obsession with
              detail - from the first muddle to the final garnish. That care is
              what turns a simple dring into something memorable.
            </p>
            <div>
              <p className="md:text-3xl text-xl font-bold">
                <span>4.5</span>/5
              </p>
              <p className="text-sm text-white-100">
                More than +15000 customers
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="top-grid">
        <div className="md:col-span-3">
          <div className="noisy" />
          <img className="select-none" src={abt1} alt="About Image" />
        </div>
        <div className="md:col-span-6">
          <div className="noisy" />
          <img className="select-none" src={abt2} alt="About Image" />
        </div>
        <div className="md:col-span-3">
          <div className="noisy" />
          <img className="select-none" src={abt5} alt="About Image" />
        </div>
      </div>
      <div className="bottom-grid">
        <div className="md:col-span-8">
          <div className="noisy" />
          <img className="select-none" src={abt3} alt="About Image" />
        </div>
        <div className="md:col-span-4">
          <div className="noisy" />
          <img className="select-none" src={abt4} alt="About Image" />
        </div>
      </div>
    </section>
  );
};

export default About;
