import { openingHours, socials } from "../constants";
import footerRightLeaf from "../public/images/footer-right-leaf.png";
import footerLeftLeaf from "../public/images/footer-left-leaf.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

const Contact = () => {
  useGSAP(() => {
    const titleSplit = SplitText.create("#contact h2", { type: "words" });
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#contact",
        start: "top center",
      },
      ease: "power1.inOut",
    });

    tl.from(titleSplit.words, {
      opacity: 0,
      yPercent: 100,
      stagger: 0.02,
    }).from("#contact h3, #contact p", { 
      opacity: 0, 
      yPercent: 100, 
      stagger: 0.02 
    });

    // Parallax animation for footer leaves (same as hero)
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#contact",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      })
      .to("#f-right-leaf", { y: 200 }, 0)
      .to("#f-left-leaf", { x: -100 }, 0);
  }, []);

  return (
    <footer id="contact">
      <img src={footerRightLeaf} alt=" " id="f-right-leaf" />
      <img src={footerLeftLeaf} alt=" " id="f-left-leaf" />

      <div className="content">
        <h2>Where to Find Us</h2>

        <div>
          <h3>Visit Our Bar</h3>
          <p>456, Raq Blvd. #404, Los Angeles, CA 90210</p>
        </div>

        <div>
          <h3>Contact Us</h3>
          <p>(555) 987-6543</p>
          <p>hello@cocktail.com</p>
        </div>

        <div>
          <h3>Open Every Day</h3>
          {openingHours.map((t) => (
            <p key={t.day}>
              {t.day} : {t.time}
            </p>
          ))}
        </div>

        <div>
          <h3>Socials</h3>
          <div className="flex-center gap-5">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={s.icon} alt={s.name} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;