import "./Tokenomic.scss"
import Gif from "../../assets/Housing or rent.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Tokenomic = () => {
    useEffect(() =>{
      Aos.init({duration: 1000});
  })

return (
  <section className="token">
    <div className="heading">
    <h2>Tokenomics</h2>
    </div>
      <div className="token__container wrapper">
          <div className="token__left" data-aos = "fade-right"> 
              <img src={Gif} alt="token"/>
          </div>

          <div className="token__right" data-aos = "zoom-in-up">
              <h2>
                Token Supply: 1.000.000.000.000.000
              </h2>
              <p> - Presale: 49.5%</p>
              <p> - LP: 49.5%</p>
              <p> - Airdrop: 1%</p>
          </div>
      </div>
  </section>
)
}

export default Tokenomic
