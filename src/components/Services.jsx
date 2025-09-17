import { Video, Sparkles, Camera, Image } from 'lucide-react';
import { motion } from 'framer-motion';
import styles from './Services.module.scss';

export default function Services() {
  const services = [
    {
      icon: Video,
      title: 'Edição de Vídeos',
      description: 'Transformo seu conteúdo bruto em narrativas envolventes com técnicas avançadas de edição, correção de cor e sincronização de áudio.',
      features: ['Edição profissional', 'Correção de cor', 'Mixagem de áudio', 'Motion graphics']
    },
    {
      icon: Sparkles,
      title: 'Efeitos Visuais',
      description: 'Criação de efeitos visuais impressionantes que elevam a qualidade do seu projeto e criam experiências memoráveis para o público.',
      features: ['VFX avançados', 'Compositing', 'Animações 2D/3D', 'Chroma key']
    },
    {
      icon: Camera,
      title: 'Cobertura de Eventos',
      description: 'Captura completa de eventos com múltiplas câmeras, garantindo que cada momento importante seja registrado com qualidade cinematográfica.',
      features: ['Múltiplas câmeras', 'Áudio profissional', 'Streaming ao vivo', 'Edição expressa']
    },
    {
      icon: Image,
      title: 'Fotografia',
      description: 'Sessões fotográficas profissionais para retratos, produtos e eventos, com tratamento e edição que realçam a essência de cada imagem.',
      features: ['Retratos profissionais', 'Fotografia de produto', 'Edição avançada', 'Entrega rápida']
    }
  ];

  return (
    <section id="servicos" className={styles.services}>
      <div className={styles.container}>
        
        {/* Header animado */}
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.title}>Serviços</h2>
          <p className={styles.description}>
            Ofereço soluções completas em produção audiovisual, desde a concepção até a entrega final, 
            sempre focando na excelência e na satisfação do cliente.
          </p>
        </motion.div>

        {/* Cards animados */}
        <div className={styles.grid}>
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={index}
                className={styles.card}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.03 }}
                viewport={{ once: true }}
              >
                <div className={styles.cardHeader}>
                  <div className={styles.iconWrapper}>
                    <IconComponent className={styles.icon} />
                  </div>
                  <h3 className={styles.cardTitle}>{service.title}</h3>
                </div>
                <div className={styles.cardContent}>
                  <p className={styles.cardDescription}>
                    {service.description}
                  </p>
                  <ul className={styles.featuresList}>
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className={styles.featureItem}>
                        <div className={styles.featureDot}></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
