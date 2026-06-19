import { WHATSAPP } from "../../constants";
import "./Header.css"



const NAV_ITEMS = [
  { href: "#inicio", label: "Inicio" },
  { href: "#sobre", label: "Sobre" },
  { href: "#projetos", label: "Projetos" },
  { href: "#contato", label: "Contato" },
];

export default function Header({ menuOpen, setMenuOpen }) {
  return (
    <>
      <header className="topbar">
        <a href="#" className="logo">
          <img src="./iconLogo.png"></img>
          <div>
            <div className="logo-name blue-highlight">Rafael Castro</div>
            <div className="logo-sub">Engenheiro Civil</div>
          </div>
        </a>

        <nav className="nav-links">
          {NAV_ITEMS.map((item) => (
            <a key={item.href} href={item.href} className="nav-link">
              {item.label}
            </a>
          ))}
        </nav>

        <button className="hamburger" onClick={() => setMenuOpen((o) => !o)} aria-label="Menu">
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>
      </header>

      {menuOpen && (
        <div className="mobile-menu">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="mobile-link"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="mobile-cta"
            onClick={() => setMenuOpen(false)}
          >
            Quero um orçamento
          </a>
        </div>
      )}
    </>
  );
}
