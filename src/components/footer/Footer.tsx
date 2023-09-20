import "./Footer.scss";
import { Airplane } from "../../icons/Airplane";
import { Gift } from "../../icons/Gift";
import { Leaf } from "../../icons/Leaf";
import { Visit } from "../../icons/Visit";

export const Footer = () => {
  return (
    <>
      <footer>
        <section className="blue_bar">
          <div>
            <Visit></Visit>
            <p>VISIT OUR STORES</p>
          </div>
          <div>
            <Airplane></Airplane>
            <p>GLOBAL DELIVERY</p>
          </div>
          <div>
            <Gift></Gift>
            <p>GIFT CARDS</p>
          </div>
          <div>
            <Leaf></Leaf>
            <p>CIRCULARITY</p>
          </div>
        </section>
        <article className="grey_bar">
          <h4>ABOUT US</h4>
          <ul>
            <li>Blog</li>
            <li>Store Finder</li>
            <li>Careers</li>
            <li>About Us</li>
            <li>Our Vintage</li>
          </ul>
        </article>
        <article className="grey_bar">
          <h4>HELP</h4>
          <ul>
            <li>Delivery</li>
            <li>Returns Policy</li>
            <li>Contact Us</li>
            <li>FAQs</li>
            <li>Terms of Service</li>
          </ul>
        </article>
        <article className="grey_bar">
          <h4>SIGN UP!</h4>
          <p>
            Sign up to be the first to hear about our newest drops, exclusive
            promos and more!
          </p>
          <input type="text" placeholder="Enter email" />
          <button className="blue_btn">SIGN UP</button>
        </article>
        <span className="socialmedia_container">
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </span>
        <span className="currency_container">
          <p>SEK</p>
        </span>
        <p>© 2023 Beyond Retro. Powered by Shopify</p>
      </footer>
    </>
  );
};
