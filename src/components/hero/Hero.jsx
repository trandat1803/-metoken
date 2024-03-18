import "./Hero.scss"
import Gif from "../../assets/-me-banner-unscreen.gif";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Hero = () => {
    useEffect(() =>{
        Aos.init({duration: 1000});
    })

  return (
    <section id="hero" className="hero">
        <div className="hero__container wrapper">
            <div className="hero__left" data-aos = "fade-right"> 
                <img src={Gif} alt="GIF"/>
            </div>

            <div className="hero__right" data-aos = "zoom-in-up">
                <p>
                    Other Memecoins was doing well. 
                    But now It's time to rich with $me.
                </p>
                <p>
                    $me appears to be one of the top Memecoins on Avalanche.
                </p>
                <p>
                    Chicken has been great, now it is revolution of $me.
                </p>
                <p>
                    Only for community, no taxes, LP will be burnt immediately when launch. 
                    $me belongs to the human kind.
                </p>
            </div>
        </div>
    </section>
  )
}

export default Hero
