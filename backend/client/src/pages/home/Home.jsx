import React from "react";
import "./Home.scss";
import Featured from "../../components/featured/Featured";
import TrustedBy from "../../components/trustedBy/TrustedBy";
import Slide from "../../components/slide/Slide";
import CatCard from "../../components/catCard/CatCard";
import ProjectCard from "../../components/projectCard/ProjectCard";
import { cards, projects } from "../../data";
//dd
function Home() {
  return (
    <div className="home">
      <Featured />
      <TrustedBy />
      <Slide slidesToShow={5} arrowsScroll={5}>
        {cards.map((card) => (
          <CatCard key={card.id} card={card} />
        ))}
      </Slide>
      <div className="features">
        <div className="container">
          <div className="item">
            <h1>A whole world of sports merchandise at your fingertips</h1>
            <div className="title">
              <img src="./img/check.png" alt="" />
              The best for every budget
            </div>
            <p>
              Find high-quality gears at every price point. No hourly rates,
              just project-based pricing.
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Quality gears, search quickly
            </div>
            <p>
              Discover your favorite gears and perfect seller in minutes.
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Protected payments, every time
            </div>
            <p>
              Always know what you'll pay upfront. Your payment isn't released
              until you approve the gear.
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              24/7 Support, always here
            </div>
            <p>
              Get 24/7 customer support for any inquiries or issues. We're always here to help!
            </p>
          </div>
          <div className="item">
            <video src="./img/video.mp4" controls />
          </div>
        </div>
      </div>
      <div className="explore">
        <div className="container">
          <h1>Explore the marketplace</h1>
          <div className="items">
            <div className="item">
              <img
                src="https://static.www.nfl.com/image/upload/v1554321393/league/nvfr7ogywskqrfaiu38m.svg"
                alt=""
              />
              <div className="line"></div>
              <span>NFL</span>
            </div>
            <div className="item">
              <img
                src="data:image/png;base64,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"
                alt=""
              />
              <div className="line"></div>

              <span>NBA</span>
            </div>
            <div className="item">
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/3/3a/05_NHL_Shield.svg/1200px-05_NHL_Shield.svg.png"
                alt=""
              />
              <div className="line"></div>
              <span>NHL</span>
            </div>
            <div className="item">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/NCAA_logo.svg/300px-NCAA_logo.svg.png"
                alt=""
              />
              <div className="line"></div>
              <span>NCAA</span>
            </div>
            <div className="item">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/MLS_crest_logo_RGB_gradient.svg/440px-MLS_crest_logo_RGB_gradient.svg.png"
                alt=""
              />
              <div className="line"></div>
              <span>MLS</span>
            </div>
            <div className="item">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDpWmTBmxjU-HcJhSAQg9d6dPNwumy5NBEsA&s"
                alt=""
              />
              <div className="line"></div>
              <span>Headwear</span>
            </div>

            <div className="item">
              <img
                src="https://www.fansidea.com/cdn/shop/products/Black1585_900x.jpg?v=1689056185"
                alt=""
              />
              <div className="line"></div>
              <span>Jerseys</span>
            </div>
            <div className="item">
              <img
                src="https://1000logos.net/wp-content/uploads/2017/07/Symbol-Kyrie-Irving.jpg"
                alt=""
              />
              <div className="line"></div>
              <span>Shoes</span>
            </div>
            <div className="item">
              <img
                src="https://target.scene7.com/is/image/Target/GUEST_20affc7e-e0d7-4eb6-a6f3-68d13520f8be?wid=488&hei=488&fmt=pjpeg"
                alt=""
              />
              <div className="line"></div>
              <span>Novelty</span>
            </div>
            
            <div className="item">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLjUcspvHZr0s-1ykVoSLIR-K4nIy4-0QLGQ&s"
                alt=""
              />
              <div className="line"></div>
              <span>Kids</span>
            </div>

            
          </div>
        </div>
      </div>
      <div className="features dark">
        <div className="container">
          <div className="item">
            <h1>
              GearUp <i>business</i>
            </h1>
            <h1>
              A business solution designed for <i>teams</i>
            </h1>
            <p>
              Upgrade to a curated experience packed with tools and benefits,
              dedicated to businesses
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Connect to sellers with proven business experience
            </div>

            <div className="title">
              <img src="./img/check.png" alt="" />
              Get matched with the perfect talent by a customer success manager
            </div>

            <div className="title">
              <img src="./img/check.png" alt="" />
              Manage teamwork and boost productivity with one powerful workspace
            </div>
            <button>Explore GearUp Business</button>
          </div>
          <div className="item">
            <img
              src="https://static01.nyt.com/images/2022/12/21/multimedia/00nfl-tv-hfo-01-1-8156/00nfl-tv-hfo-01-1-8156-superJumbo.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      <Slide slidesToShow={4} arrowsScroll={4}>
        {projects.map((card) => (
          <ProjectCard key={card.id} card={card} />
        ))}
      </Slide>
    </div>
  );
}

export default Home;