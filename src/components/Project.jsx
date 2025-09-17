import { ExternalLink, Play } from 'lucide-react';
import { motion } from 'framer-motion';
import styles from './Project.module.scss';
import igreja from '../assets/igreja.jpeg';
import oruam from '../assets/oruam.jpeg';
import hamburguer from '../assets/hamburguer.jpeg';

export default function Projects() {
  const projects = [
  {
  title: 'Flow Recife 2025',
  category: 'Evento Hip-Hop',
  description: 'Cobertura completa do evento com fotografia profissional e registros dos artistas da cena Trap Brasil.',
  image: oruam,
  tags: ['Cobertura', 'Fotografia', 'Edição'],
  status: 'Concluído'
    },

    {
      title: 'Nossa Senhora da Conceição',
      category: 'Cobertura de Evento',
      description: 'Registro audiovisual da tradicional festa religiosa, com captação de momentos marcantes.',
      image: igreja,
      tags: ['Documentário', 'Drone', 'Storytelling'],
      status: 'Concluído'
    },
    {
      title: 'Hamburgueria Jota Jr',
      category: 'Comercial',
      description: 'Vídeo publicitário criativo para redes sociais, destacando produtos e ambiente da hamburgueria.',
      image: hamburguer,
      tags: ['Comercial', 'Marketing Digital', 'Redes Sociais'],
      status: 'Concluído'
    },
    {
      title: 'Aniversário Infantil – João Pedro',
      category: 'Festa Infantil',
      description: 'Cobertura completa de festa infantil com foco em emoção e espontaneidade.',
      image: 'https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=500&h=300&fit=crop',
      tags: ['Filmagem', 'Edição Criativa', 'Memórias'],
      status: 'Concluído'
    },
    {
      title: 'Casamento Ana & Bruno',
      category: 'Wedding Film',
      description: 'Filme de casamento com narrativa cinematográfica e captação de momentos únicos.',
      image: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=500&h=300&fit=crop',
      tags: ['Drone', 'Cinema Vídeo', 'Storytelling'],
      status: 'Concluído'
    },
    {
      title: 'Show ao Vivo – Banda Som Livre',
      category: 'Cobertura Musical',
      description: 'Registro de show com multicâmeras, edição dinâmica e cortes para divulgação online.',
      image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=500&h=300&fit=crop',
      tags: ['Show', 'Captação Ao Vivo', 'Edição Multicam'],
      status: 'Concluído'
    }
  ];

  return (
    <section id="projetos" className={styles.projects}>
      <div className={styles.container}>
        
        {/* Header animado */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.title}>Meus Projetos</h2>
          <p className={styles.description}>
            Uma seleção dos meus trabalhos mais recentes, demonstrando versatilidade 
            e qualidade em diferentes tipos de projetos audiovisuais.
          </p>
        </motion.div>

        {/* Grid de projetos */}
        <div className={styles.grid}>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className={styles.card}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
              viewport={{ once: true }}
            >
              <div className={styles.imageWrapper}>
                <motion.img 
                  src={project.image} 
                  alt={project.title}
                  className={styles.image}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                />
                <motion.div 
                  className={styles.overlay}
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  <button className={styles.overlayButton}>
                    <Play size={16} style={{ marginRight: '0.5rem' }} />
                    Ver Projeto
                  </button>
                </motion.div>
                <div className={styles.badge}>
                  {project.status}
                </div>
              </div>
              
              <div className={styles.cardContent}>
                <div>
                  <h3 className={styles.cardTitle}>{project.title}</h3>
                  <p className={styles.cardCategory}>{project.category}</p>
                  <p className={styles.cardDescription}>
                    {project.description}
                  </p>
                </div>
                
                <div className={styles.tags}>
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>

                <button className={styles.cardButton}>
                  <ExternalLink size={16} style={{ marginRight: '0.5rem' }} />
                  Ver Detalhes
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Botão final animado */}
        <motion.div 
          style={{ textAlign: 'center', marginTop: '3rem' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <button className={styles.viewAllButton}>
            Ver Todos os Projetos
          </button>
        </motion.div>
      </div>
    </section>
  );
}
