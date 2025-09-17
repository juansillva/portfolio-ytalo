import { Mail, Phone, MapPin, Linkedin, Instagram, Send, } from 'lucide-react';
import { motion } from 'framer-motion';
import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <motion.footer 
      id="contato" 
      className={styles.footer}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className={styles.container}>
        {/* Contact Section */}
        <div className={styles.contactSection}>
          {/* Contact Info */}
          <motion.div 
            className={styles.contactInfo}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div>
              <h2 className={styles.title}>
                Vamos Trabalhar Juntos
              </h2>
              <p className={styles.description}>
                Tem um projeto em mente? Entre em contato e vamos transformar suas ideias 
                em realidade com soluções audiovisuais de alta qualidade.
              </p>
            </div>

            <motion.div 
              className={styles.contactList}
              initial="hidden"
              whileInView="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.2
                  }
                }
              }}
              viewport={{ once: true }}
            >
              {[
                { icon: <Mail className={styles.icon} />, title: "Email", detail: "ytalomaker@gmail.com" },
                { icon: <Phone className={styles.icon} />, title: "Telefone", detail: "+55 (81) 98243-7545" },
                { icon: <MapPin className={styles.icon} />, title: "Localização", detail: "Recife-PE, Brasil" },
              ].map((item, index) => (
                <motion.div 
                  key={index} 
                  className={styles.contactItem}
                  variants={{
                    hidden: { opacity: 0, x: -30 },
                    visible: { opacity: 1, x: 0 }
                  }}
                  transition={{ duration: 0.6 }}
                >
                  <div className={styles.contactIcon}>{item.icon}</div>
                  <div className={styles.contactDetails}>
                    <h4>{item.title}</h4>
                    <p>{item.detail}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Social Links */}
            <motion.div 
              className={styles.socialLinks}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 120, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <a href="#" className={styles.socialLink}><Linkedin size={20} /></a>
              <a href="#" className={styles.socialLink}><Instagram size={20} /></a>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            className={styles.formCard}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className={styles.formHeader}>
              <h3 className={styles.formTitle}>Envie uma Mensagem</h3>
            </div>
            <div className={styles.formContent}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Nome</label>
                  <input placeholder="Seu nome" className={styles.input} />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Email</label>
                  <input type="email" placeholder="seu@email.com" className={styles.input} />
                </div>
              </div>
              
              <div className={styles.formGroup}>
                <label className={styles.label}>Assunto</label>
                <input placeholder="Assunto da mensagem" className={styles.input} />
              </div>
              
              <div className={styles.formGroup}>
                <label className={styles.label}>Mensagem</label>
                <textarea placeholder="Descreva seu projeto..." rows={5} className={styles.textarea} />
              </div>
              
              <motion.button 
                className={styles.submitButton}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Send size={16} style={{ marginRight: '0.5rem' }} />
                Enviar Mensagem
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Footer Bottom */}
        <motion.div 
          className={styles.footerBottom}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className={styles.footerBottomContent}>
            <div className={styles.logo}>Marculino</div>
            <p className={styles.copyright}>
              © 2024 Ytalo Marculino. Todos os direitos reservados.
            </p>
            <div className={styles.footerLinks}>
              <a href="#" className={styles.footerLink}>Política de Privacidade</a>
              <a href="#" className={styles.footerLink}>Termos de Uso</a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}
