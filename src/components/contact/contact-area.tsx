import { NavLink } from "react-router-dom";
import ContactForm from "../forms/contact-form";

const ContactArea = () => {
  return (
    <section  id="contact" className="contact-area">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-10">
            <div className="contact__content">
              <h2 className="overlay-title">
                <span>join us</span>
              </h2>
              <h2 className="title">CONTACT US AND FIND YOUR mykd</h2>
              <p>
                Axcepteur sint occaecat atat non proident, sunt culpa officia
                deserunt mollit anim id est labor umLor emdolor
              </p>
              <div className="footer-el-widget">
                <h4 className="title">information</h4>
                <ul className="list-wrap">
                  {/* <li>
                    <NavLink to="tel:123">+971 333 222 557</NavLink>
                  </li> */}
                  <li>
                    <NavLink to="mailto:support@suratbet.com">
                      support@suratbet.com
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="mailto:finance@suratbet.com">
                      finance@suratbet.com
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="mailto:bonus@suratbet.com">
                      bonus@suratbet.com
                    </NavLink>
                  </li>
                  {/* <li>New Central Park W7 Street, New York</li> */}
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-10">
            <div className="contact__form-wrap">
              {/* form start */}
              <ContactForm />
              {/* form end */}
              <p className="ajax-response"></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactArea;
