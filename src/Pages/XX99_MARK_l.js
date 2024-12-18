import ImgGroup from "../Components/ImgGroup";
import Product from "../Components/Product";
import XX99MARK1 from "../Img/xx99_mark_1_product.png";
import { useState, useEffect, useContext } from "react";
import hangingheadphone from "../Img/hangingheadphone.png";
import itemsonfloor from "../Img/itemsonthefloor.png";
import glowingheadphones from "../Img/glowingheadphones.png";
import Suggestion from "../Components/Suggestion";
import suggestionxx99 from "../Img/suggestionxx99mark2.png";
import suggestionxx59 from "../Img/suggestionxx59.png";
import suggestionzx9 from "../Img/ZX9.png";
import LinkItem from "../Components/LinkItem";
import headphones from "../Img/headphones.png";
import speaker from "../Img/speakers.png";
import earphones from "../Img/earphones.png";
import BestInfo from "../Components/BestInfo";
import { Context } from "../App";

const XX99_MARK_l = () => {
  const [state, dispatch] = useContext(Context);
  const [newP, setNewP] = useState(false);

  useEffect(() => {
    dispatch({ type: "update_product_img", payload: XX99MARK1 });
    dispatch({ type: "update_product_product", payload: "XX99_MARK_I" });
    dispatch({ type: "update_product_cost", payload: 1750 });
  }, []);
  return (
    <main
      className={
        state.togglecart === false
          ? "blur-sm brightness-50 bg-bordergrey h-screen overflow-hidden"
          : state.togglemenu === false
          ? "blur-sm bg-bordergrey h-screen overflow-hidden"
          : "lg:flex lg:flex-col lg:items-center lg:px-10"
      }
    >
      <Product
        img={XX99MARK1}
        h11="XX99 Mark I"
        h12="Headphones"
        p="As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for KS Elects, mixing engineers, and music aficionados alike in studios and on the go."
        price="$ 1,750"
        p2="As the headphones all others are measured against, the XX99 Mark I demonstrates over five decades of audio expertise, redefining the critical listening experience. This pair of closed-back headphones are made of industrial, aerospace-grade materials to emphasize durability at a relatively light weight of 11 oz."
        p3="From the handcrafted microfiber ear cushions to the robust metal headband with inner damping element, the components work together to deliver comfort and uncompromising sound. Its closed-back design delivers up to 27 dB of passive noise cancellation, reducing resonance by reflecting sound to a dedicated absorber. For connectivity, a specially tuned cable is included with a balanced gold connector."
        b1="Headphone Unit"
        b2="Replacement Earcups"
        b3="User Manual"
        b4="3.5mm 5m Audio Cable"
        b5=""
        newp={newP}
        nr1="1x"
        nr2="2x"
        nr3="1x"
        nr4="1x"
        nr5=""
      />
      <div className="flex flex-col items-center lg:mx-0 lg:w-3/4 lg:justify-center">
        <ImgGroup
          img1={hangingheadphone}
          img2={itemsonfloor}
          img3={glowingheadphones}
          alt1="hangingheadphones"
          alt2="thingsonfloor"
          alt3="glowingheadphones"
        />
      </div>
      <div className="flex flex-col items-center md:mb-32 lg:w-3/4 lg:justify-center">
        <Suggestion
          link1="/XX99_MARK_ll"
          link2="/xx59"
          link3="/zx9"
          img1={suggestionxx99}
          alt1="xx99mark2"
          h21="XX99 MARK II"
          img2={suggestionxx59}
          alt2="XX59"
          h22="XX59"
          img3={suggestionzx9}
          alt3="ZX9 SPEAKER"
          h23="ZX9 SPEAKER"
        />
      </div>
      <section className="flex flex-col items-center mb-32 md:flex-row md:gap-2 md:mx-4 md:mb-32 lg:mb-40 lg:w-3/4 lg:gap-8">
        <LinkItem img={headphones} h2="HEADPHONES" link="/headphones" />
        <LinkItem img={speaker} h2="SPEAKERS" link={"/speakers"} />
        <LinkItem img={earphones} h2="EARPHONES" link={"/earphones"} />
      </section>
      <div className="flex flex-col items-center lg:w-3/4">
        <BestInfo />
      </div>
    </main>
  );
};

export default XX99_MARK_l;
