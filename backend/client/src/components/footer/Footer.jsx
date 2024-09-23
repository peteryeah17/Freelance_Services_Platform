import React from "react";
import "./Footer.scss";
//dd
function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="top">
          <div className="item">
            <h2>Categories</h2>
            <span>New Arrival</span>
            <span>Jerseys</span>
            <span>Headwear</span>
            <span>Novelty</span>
            <span>Men</span>
            <span>Women</span>
            <span>Kids</span>
            <span>Business</span>
            <span>Lifestyle</span>
            <span>Sitemap</span>
          </div>
          <div className="item">
            <h2>About</h2>
            <span>News</span>
            <span>Partnerships</span>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Investor Relations</span>
            <span>Contact Sales</span>
          </div>
          <div className="item">
            <h2>Support</h2>
            <span>Help & Support</span>
            <span>Trust & Safety</span>
            <span>Selling on GearUp</span>
            <span>Buying on GearUp</span>
          </div>
          <div className="item">
            <h2>Community</h2>
            <span>Customer Success Stories</span>
            <span>Community Hub</span>
            <span>Forum</span>
            <span>Events</span>
            <span>Blog</span>
            <span>Influencers</span>
            <span>Affiliates</span>
            <span>Podcast</span>
            <span>Invite a Friend</span>
            <span>Become a Seller</span>
            <span>Community Standards</span>
          </div>
          <div className="item">
            <h2>More From GearUp</h2>
            <span>GearUp Business</span>
            <span>GearUp Pro</span>
            <span>GearUp Logo Maker</span>
            <span>GearUp Guides</span>
            <span>Get Inspired</span>
            <span>NBA</span>
            <span>NFL</span>
            <span>MLB</span>
            <span>NCAA</span>
            <span>NHL</span>
          </div>
        </div>
        <hr />
        <div className="bottom">
          <div className="left">
            <h2>GearUp</h2>
            <span>© GearUp International Ltd. 2024</span>
          </div>
          <div className="right">
            <div className="social">
              <img src="/img/twitter.png" alt="" />
              <img src="/img/facebook.png" alt="" />
              <img src="/img/linkedin.png" alt="" />
              <img src="/img/pinterest.png" alt="" />
              <img src="/img/instagram.png" alt="" />
            </div>
            <div className="link">
              <img src="/img/language.png" alt="" />
              <span>English</span>
            </div>
            <div className="link">
              <img src="/img/coin.png" alt="" />
              <span>USD</span>
            </div>
            <img src="/img/accessibility.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;