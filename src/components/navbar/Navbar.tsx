import "./Navbar.scss";

export const Navbar = () => {
  return (
    <>
      <header className="navbar">
        <span className="blue_span"></span>
        <span className="green_span">
          {" "}
          PIECES FROM OUR PAST, TO SAVE OUR FUTURE 🌎
        </span>
        <div className=""></div>
        <nav>
          <ul>
            <li>NEW IN</li>
            <li>WOMEN</li>
            <li>MEN</li>
            <li>EVERYONE</li>
            <li>BRANDS</li>
            <li>SPORTS</li>
            <li>DENIM</li>
            <li>SUMMER</li>
            <li>SALE & DEALS</li>
            <li>ABOCE & BEYOND</li>
            <li>SWIPER</li>
          </ul>
        </nav>
        <div>Logo</div>
        <div className="login"></div>
      </header>
    </>
  );
};
