import { WhatsAppIcon } from "../Icons";
import "./CTA.css"
import { WHATSAPP } from "../../constants";

export default function CTA() {
  return (
    <section className="cta" id="contato">
      <div className="cta-inner">
        <div className="section-eyebrow cta-eyebrow">— Vamos começar seu projeto agora</div>
        <h2 className="cta-h2">
          Pronto para transformar
          <br />
          sua ideia em realidade?
        </h2>
        <p className="cta-p">
          Entre em contato comigo agora. Respondo rapidamente e posso mostrar como desenvolver a
          melhor solução técnica para o seu projeto.
        </p>
        <a href={WHATSAPP} target="_blank" rel="noreferrer" className="cta-btn">
          <WhatsAppIcon /> Chamar no WhatsApp agora
        </a>
      </div>
    </section>
  );
}
