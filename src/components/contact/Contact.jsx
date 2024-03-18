import "./Contact.scss";
import ContactImg from "../../assets/gifme.gif";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { FaSquareXTwitter } from "react-icons/fa6";

const Contact = () => {
    useEffect(() => {
        Aos.init({duration: 1000});
    });
  return (
    <section className="status">
        <div>
            <h2>Contact</h2>
        </div>
        <div className="status__container wrapper">
            <div className="status__left" data-aos="zoom-in-up">
                <p>
                $me has no team or roadmap. 
                It was born with no financial purpose or any expectation. 
                Vibe with $me
                </p>
                <a href="https://twitter.com/leonardo_leo21">
                    <FaSquareXTwitter/>
                </a>
            </div>

            <div className="status__right" data-aos="fade-left">
                <img src={ContactImg} alt=""/>
            </div>
        </div>
    </section>
  )
}

export default Contact
