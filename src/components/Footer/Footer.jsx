import { FaInstagram, FaTwitter, FaFacebook, FaTiktok } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  console.log("Footer renderizado");

  return (
    <footer className="footer">
      <div className="footer-content">
        <section>
          <h4>Conócenos</h4>
          <ul>
            <li>Acerca de nosotros</li>
            <li>Trabaja con nosotros</li>
            <li>Nuestros clientes</li>
            <li>Ayuda</li>
          </ul>
        </section>
        <section>
          <h4>Contacto</h4>
          <ul>
            <li>+569 82252557</li>
            <li>chityluchy@gmail.com</li>
          </ul>
        </section>
        <section>
          <h4>Redes Sociales</h4>
          <ul className="social-list">
            <li>
              <FaInstagram className="social-icon" />
              Instagram
            </li>
            <li>
              <FaTwitter className="social-icon" />
              Twitter
            </li>
            <li>
              <FaFacebook className="social-icon" />
              Facebook
            </li>
            <li>
              <FaTiktok className="social-icon" />
              TikTok
            </li>
          </ul>
        </section>
      </div>
      <div className="footer-copyright">
        <p>© 2025 Chity Serigrafía. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;