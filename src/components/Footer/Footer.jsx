import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        {/* TOP */}
        <div className="footer__top">
          <div className="footer__column footer__column--newsletter">
            <p className="footer__title">BE THE FIRST TO KNOW</p>
            <p className="footer__text">Sign up for updates from metta muse.</p>
            <div className="footer__subscribe">
              <input
                type="email"
                name=""
                id=""
                placeholder="Enter your e-mail..."
              />
              <button>SUBSCRIBE</button>
            </div>
          </div>

          <div className="footer__column footer__column--info">
            <div className="footer__contact">
              <p className="footer__title">CONTACT US</p>
              <p className="footer__text">+44 221 133 5360</p>
              <p className="footer__text-email">customercare@mettamuse.com</p>
            </div>
            <div className="footer__currency">
              <p className="footer__title">CURRENCY</p>
              <div className="footer__currency-select">
                <img
                  className="currency-logo"
                  src="./images/United States of America (US).svg"
                  alt="currency-logo"
                />
                <img
                  className="star-logo"
                  src="./images/Star 1.svg"
                  alt="star"
                />
                <p className="currency-name">USD</p>
              </div>
              <p className="footer__text">
                Transactions will be completed in Euros and a currency reference
                is available on hover.
              </p>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="footer__bottom">
          <div className="footer__column">
            <p className="footer__title">metta muse</p>
            <ul className="footer__list">
              <li>About Us</li>
              <li>Stories</li>
              <li>Artisans</li>
              <li>Boutiques</li>
              <li>Contact Us</li>
              <li>EU Compliances Docs</li>
            </ul>
          </div>

          <div className="footer__column">
            <p className="footer__title">QUICK LINKS</p>
            <ul className="footer__list">
              <li>Orders & Shipping</li>
              <li>Join/Login as a Seller</li>
              <li>Payment & Pricing</li>
              <li>Return & Refunds</li>
              <li>FAQs</li>
              <li>Privacy & Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>

          <div className="footer__column">
            <div className="footer__social">
              <p className="footer__title">FOLLOW US</p>
              <div className="footer__icons">
                <img src="./images/Insta.svg" alt="insta-logo" />
                <img src="./images/a.svg" alt="linkedin-logo" />
              </div>
            </div>

            <div className="footer__payments">
              <p className="footer__title">metta muse ACCEPTS</p>
              <div className="footer__payment-icons">
                <img src="./images/Frame 136278.svg" alt="payment-logos" />
              </div>
            </div>
          </div>
        </div>
        <p className="copyrights--text">
          Copyright © 2026 mettamuse. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
