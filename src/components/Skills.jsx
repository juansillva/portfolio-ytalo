"use client";
import { motion } from "framer-motion";
import styles from "./Skills.module.scss";

function SkillItem({ name, level }) {
  return (
    <motion.div 
      className={styles.skillItem}
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className={styles.skillHeader}>
        <span className={styles.skillName}>{name}</span>
        <span className={styles.skillLevel}>{level}%</span>
      </div>
      <div className={styles.progressBar}>
        <motion.div
          className={styles.progressFill}
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        />
      </div>
    </motion.div>
  );
}

function SkillCategory({ title, skills }) {
  return (
    <motion.div 
      className={styles.skillCategory}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h3 className={styles.categoryTitle}>{title}</h3>
      <div className={styles.skillsList}>
        {skills.map((skill, index) => (
          <SkillItem key={index} {...skill} />
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const skillCategories = [
    {
      title: "Edição de Vídeo",
      skills: [
        { name: "Adobe Premiere Pro", level: 95 },
        { name: "Adobe After Effects", level: 92 },
        { name: "Capcut", level: 82 },
      ],
    },
    {
      title: "Design & Motion",
      skills: [
        { name: "Adobe Photoshop", level: 88 },
        { name: "Adobe Illustrator", level: 85 },
        { name: "Canva", level: 85 },
      ],
    },
  ];

  const technologies = [
    "Adobe Premiere Pro",
    "Lightroom",
    "Photoshop",
    "After Effects",
    "Capcut",
    "Canva",
    "OBS Studio",
  ];

  return (
    <section id="habilidades" className={styles.skills}>
      <div className={styles.container}>
        {/* Header */}
        <motion.header
          className={styles.header}
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.title}>Habilidades</h2>
          <p className={styles.description}>
            Domínio completo das principais ferramentas e tecnologias do mercado audiovisual, 
            sempre atualizado com as últimas tendências e inovações.
          </p>
        </motion.header>

        {/* Skills Progress */}
        <div className={styles.skillsGrid}>
          {skillCategories.map((category, index) => (
            <SkillCategory key={index} {...category} />
          ))}
        </div>

        {/* Technologies */}
        <motion.div 
          className={styles.technologiesSection}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className={styles.technologiesTitle}>Tecnologias & Ferramentas</h3>
          <div className={styles.technologiesGrid}>
            {technologies.map((tech, index) => (
              <motion.span 
                key={index} 
                className={styles.technologyTag}
                whileHover={{ scale: 1.1 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
