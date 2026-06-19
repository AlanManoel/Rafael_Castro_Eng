import ImgOrPlaceholder from "../ImgOrPlaceholder";
import { PROJETOS } from "../../constants";
import "./Portfolio.css"


export default function Portfolio() {
  return (
    <section className="portfolio" id="projetos">
      <div className="section-eyebrow">— Portfólio</div>
      <h2 className="portfolio-h2">Projetos selecionados</h2>
      <div className="portfolio-grid">
        {PROJETOS.map((p, i) => (
          <div key={i} className="portfolio-item">
            <ImgOrPlaceholder src={p.src} alt={p.label} />
          </div>
        ))}
      </div>
    </section>
  );
}
