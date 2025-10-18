import { useGSAP } from "@gsap/react";
import { navLinks } from "../constants/index.js";
import logo from "../public/images/logo.png";
import gsap from "gsap";
const Navbar = () => {
  useGSAP(() => {
    const navTween = gsap.timeline({
      scrollTrigger: {
        trigger: "nav",
        start: "bottom top",
      },
    });

    navTween.fromTo(
      "nav",
      {
        backgroundColor: "transparent",
      },
      {
        backgroundColor: "#00000050",
        backdropFilter: "blur(10px)",
        duration: 1,
        ease: "power1.inOut",
      }
    );
  }, []);
  return (
    <nav>
      <div>
        <a href="#home" className="flex items-center gap-2 ml-2">
          <img className="select-none" src={logo} alt="logo" />
          <p>Velvet Pour</p>
        </a>
        <ul className="mr-2">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
