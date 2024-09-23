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
                src="https://logowik.com/content/uploads/images/healthy-lifestyle7736.logowik.com.webp"
                alt=""
              />
              <div className="line"></div>
              <span>Lifestyle</span>
            </div>
            <div className="item">
              <img
                src="data:image/png;base64,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"
                alt=""
              />
              <div className="line"></div>
              <span>Men</span>
            </div>
            <div className="item">
              <img
                src="data:image/png;base64,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"
                alt=""
              />
              <div className="line"></div>
              <span>Women</span>
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