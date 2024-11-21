import facebook from "../Img/facebook.svg";
import twitter from "../Img/twitter.svg";
import instagram from "../Img/instagram.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="relative bg-black1 text-white flex flex-col items-center text-center pt-12 pb-10 md:items-start md:p-10">
        <div className="absolute top-0 bg-darkorange w-24 h-1 lg:mx-20"></div>
        <div className="lg:flex lg:justify-between lg:w-full lg:px-20">
          {/* <Link to="/"><img className="mb-12" src={logo} alt="footerlogo" /></Link> */}
          <p className="text-2xl">KS Elects</p>
          <ul className="flex flex-col gap-4 mb-12 md:flex-row">
            <Link className="hover:text-darkorange" to="/">
              <li>HOME</li>
            </Link>
            <Link className="hover:text-darkorange" to="/Headphones">
              <li>HEADPHONES</li>
            </Link>
            <Link className="hover:text-darkorange" to="/Speakers">
              <li>SPEAKERS</li>
            </Link>
            <Link className="hover:text-darkorange" to="/Earphones">
              <li>EARPHONES</li>
            </Link>
          </ul>
        </div>
        <p className="mb-12 text-bordergrey mx-6 md:text-start md:mx-0 lg:mx-20 lg:mr-96">
          KS Elects is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </p>
        <div className="flex w-full flex-col items-center md:flex-row md:justify-between md:items-baseline lg:px-20">
          <p className="mb-12 text-bordergrey">Copyright 2024</p>
          <div className="flex gap-4">
            <a href="https://www.facebook.com/sudhir.kale.96155669">
              <img src={facebook} alt="facebook" />
            </a>
            <a href="https://x.com/Kale_Sudhir45">
              <img src={twitter} alt="twitter" />
            </a>
            <a href="https://www.instagram.com/its__sudhirrr/?hl=en">
              <img src={instagram} alt="instagram" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
