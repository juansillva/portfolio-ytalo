import { ArrowRight, Play, Linkedin, Instagram, Camera, Edit3, Film, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import styles from './Hero.module.scss';
import ytalo from '../assets/ytalo.svg';

export default function Hero() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Elementos orbitais com ícones relacionados ao videomaking
  const orbitalElements = [
    { icon: Camera, delay: 0, size: 20, distance: 140 },
    { icon: Film, delay: 2, size: 18, distance: 160 },
    { icon: Edit3, delay: 4, size: 16, distance: 120 },
    { icon: Zap, delay: 6, size: 22, distance: 180 },
  ];

  return (
    <section id="inicio" className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Left Content */}
          <motion.div
            className={styles.content}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className={styles.textContent}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className={styles.title}>
                Ytalo Marculino
                <span className={styles.titleHighlight}> VideoMaker</span>
              </h1>
              <p className={styles.description}>
                Transformo ideias em experiências visuais impactantes. Especialista em edição de vídeos, efeitos visuais e storytelling que conecta marcas aos seus públicos de forma autêntica.
              </p>
            </motion.div>

            <motion.div
              className={styles.buttons}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <button 
                onClick={() => scrollToSection('projetos')}
                className={styles.primaryButton}
              >
                Ver Projetos
                <ArrowRight className={styles.buttonIcon} size={16} />
              </button>
              <button 
                onClick={() => scrollToSection('contato')}
                className={styles.outlineButton}
              >
                <Play className={styles.buttonIcon} size={16} />
                Assistir Reel
              </button>
            </motion.div>

            <motion.div
              className={styles.socialLinks}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <a href="#" className={styles.socialLink}><Linkedin size={24} /></a>
              <a href="#" className={styles.socialLink}><Instagram size={24} /></a>
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Image with Orbital Effect */}
          <motion.div 
            className={styles.imageContainer}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className={styles.image}>
              <img src={ytalo} alt="Ytalo Marculino" />
            </div>
            
            {/* Elementos Orbitais */}
            {orbitalElements.map((element, index) => {
              const IconComponent = element.icon;
              return (
                <motion.div
                  key={index}
                  className={styles.orbitalElement}
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                    delay: element.delay,
                  }}
                  style={{
                    '--distance': `${element.distance}px`,
                  }}
                >
                  <motion.div
                    className={styles.orbitalIcon}
                    animate={{
                      rotate: -360,
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                      delay: element.delay,
                    }}
                  >
                    <IconComponent size={element.size} />
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}