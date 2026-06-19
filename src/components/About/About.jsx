import ImgOrPlaceholder from "../ImgOrPlaceholder";
import "./About.css"
import { WhatsAppIcon, EmailIcon, PhoneIcon, PinIcon } from "../Icons";
import { WHATSAPP, EMAIL, FOTO_SOBRE, CONTACTS } from "../../constants";

const ICONS = {
  phone: PhoneIcon,
  email: EmailIcon,
  pin: PinIcon,
};

export default function About() {
  return (
    <section className="about" id="sobre">
      <div className="about-inner">
        <div className="about-photo-desktop">
          <ImgOrPlaceholder src={FOTO_SOBRE} alt="Rafael Castro" />
        </div>

        <div>
          <div className="section-eyebrow">— Quem sou eu?</div>
          <h2 className="about-h2">Rafael Castro</h2>
          <p className="about-p">
            Engenheiro civil com mais de 8 anos de experiência, sou especialista em projetos
            estruturais, fundações, sempre oferecendo soluções com qualidade, eficiência e
            economia, meu compromisso é garantir a segurança, precisão e tranquilidade para sua obra
          </p>

          <div className="contact-info">
            {CONTACTS.map((row, i) => {
              const Icon = ICONS[row.type];
              return (
                <div key={i} className="contact-row">
                  <span className="contact-icon">
                    <Icon />
                  </span>
                  <span className="contact-text">{row.text}</span>
                </div>
              );
            })}
          </div>

          <div className="about-actions">
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="btn-wa">
              <WhatsAppIcon /> WhatsApp
            </a>
            <a href={EMAIL} className="btn-email">
              <EmailIcon /> Enviar e-mail
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
