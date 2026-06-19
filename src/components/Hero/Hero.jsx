import ImgOrPlaceholder from "../ImgOrPlaceholder";
import { WHATSAPP, FOTO_HERO } from "../../constants";
import "./Hero.css"

export default function Hero() {
    return (
        <>
            <section className="hero" id="inicio">
                <div className="hero-inner">
                    <div className="hero-text">
                        <div className="eyebrow">— Disponível para projetos</div>
                        <h1 className="hero-h1">
                            <span className="blue-highlight">Rafael</span> Castro
                            <br />
                            Engenheiro Civil
                        </h1>
                        <p className="hero-p">
                            Especialista em projetos estruturais, desenvolvendo soluções seguras, econômicas e
                            eficientes para obras residenciais, comerciais e industriais. Atuamos com precisão
                            técnica em cada etapa do projeto, garantindo estruturas mais econômicas, eficientes e
                            executáveis, sempre com a garantia de segurança e atenção às normas técnicas
                            <br />
                            <br />
                            Além do projeto estrutural, oferecemos suporte técnico, projetos complementares,
                            laudos e perícias de imóveis, sempre com compromisso, agilidade e excelência na entrega
                        </p>
                        <div className="hero-actions">
                            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="btn-primary">
                                Quero um orçamento
                            </a>
                            <a href="#projetos" className="btn-secondary">
                                Ver projetos
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Foto mobile */}
            <div className="photo-mobile">
                <ImgOrPlaceholder src={FOTO_HERO} alt="Rafael Castro" />
            </div>
        </>
    );
}
