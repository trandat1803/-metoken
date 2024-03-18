import "./About.scss"
import Gif from "../../assets/banner2.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const About = () => {
    useEffect(() =>{
        Aos.init({duration: 1000});
    })
  return (
    <section id="about" className="about">
        <div>
            <h2>About</h2>
        </div>
        <div className="about__container wrapper">
            <div className="about__left" data-aos = "fade-right"> 
                <img src={Gif} alt="GIF"/>
            </div>

            <div className="about__right" data-aos = "zoom-in-up">
                <p>
                    Hello, it's $me. Just $me and trust $me.
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

export default About
