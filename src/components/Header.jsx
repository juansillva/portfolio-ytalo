import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import styles from './Header.module.scss';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.nav}>
          <div className={styles.logo}>
            Marculino
          </div>

          <nav className={styles.desktopNav}>
            <button 
              onClick={() => scrollToSection('inicio')}
              className={styles.navLink}
            >
              Início
            </button>
            <button 
              onClick={() => scrollToSection('sobre')}
              className={styles.navLink}
            >
              Sobre
            </button>
            <button 
              onClick={() => scrollToSection('servicos')}
              className={styles.navLink}
            >
              Serviços
            </button>
            <button 
              onClick={() => scrollToSection('projetos')}
              className={styles.navLink}
            >
              Projetos
            </button>
            <button 
              onClick={() => scrollToSection('contato')}
              className={styles.navLink}
            >
              Contato
            </button>
          </nav>
              <button 
              onClick={() => scrollToSection('contato')}
              className="btn btn-primary"
            >
              Download CV
            </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={styles.menuButton}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className={styles.mobileNav}>
            <div className={styles.mobileNavContent}>
              <button 
                onClick={() => scrollToSection('inicio')}
                className={styles.mobileNavLink}
              >
                Início
              </button>
              <button 
                onClick={() => scrollToSection('sobre')}
                className={styles.mobileNavLink}
              >
                Sobre
              </button>
              <button 
                onClick={() => scrollToSection('servicos')}
                className={styles.mobileNavLink}
              >
                Serviços
              </button>
              <button 
                onClick={() => scrollToSection('projetos')}
                className={styles.mobileNavLink}
              >
                Projetos
              </button>
              <button 
                onClick={() => scrollToSection('contato')}
                className={styles.mobileNavLink}
              >
                Contato
              </button>
              <button 
                onClick={() => scrollToSection('contato')}
                className="btn btn-primary"
                style={{ width: 'fit-content' }}
              >
                Download CV
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}