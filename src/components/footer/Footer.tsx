export const Footer = () => {
  return (
    <>
      <footer>
        <section className="blue_bar">
          <div>
            <p>VISIT OUR STORES</p>
          </div>
          <div>
            <p>GLOBAL DELIVERY</p>
          </div>
          <div>
            <p>GIFT CARDS</p>
          </div>
          <div>
            <p>CIRCULARITY</p>
          </div>
        </section>
        <article>
          <h4>ABOUT US</h4>
          <ul>
            <li>Blog</li>
            <li>Store Finder</li>
            <li>Careers</li>
            <li>About Us</li>
            <li>Our Vintage</li>
          </ul>
        </article>
        <article>
          <h4>HELP</h4>
          <ul>
            <li>Delivery</li>
            <li>Returns Policy</li>
            <li>Contact Us</li>
            <li>FAQs</li>
            <li>Terms of Service</li>
          </ul>
        </article>
        <article>
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
