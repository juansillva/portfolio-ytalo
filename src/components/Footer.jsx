import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { Instagram, Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import styles from "./Footer.module.scss";

// Inicialize o EmailJS com sua PUBLIC_KEY (substitua pelo seu valor)
emailjs.init("YOUR_PUBLIC_KEY");

export default function Footer() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    assunto: "",
    mensagem: "",
  });
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage("");

    try {
      await emailjs.send(
        "YOUR_SERVICE_ID", // substitua
        "YOUR_TEMPLATE_ID", // substitua
        {
          from_name: formData.nome,
          from_email: formData.email,
          subject: formData.assunto,
          message: formData.mensagem,
          to_email: "ytalomaker@gmail.com",
        }
      );

      setStatusMessage("✅ Mensagem enviada com sucesso!");
      setFormData({ nome: "", email: "", assunto: "", mensagem: "" });
    } catch (err) {
      console.error(err);
      setStatusMessage("❌ Erro ao enviar a mensagem. Tente novamente.");
    } finally {
      setLoading(false);
      setTimeout(() => setStatusMessage(""), 4000);
    }
  };

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
              <h2 className={styles.title}>Vamos Trabalhar Juntos</h2>
              <p className={styles.description}>
                Tem um projeto em mente? Entre em contato e vamos transformar
                suas ideias em realidade com soluções audiovisuais de alta
                qualidade.
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
                    staggerChildren: 0.2,
                  },
                },
              }}
              viewport={{ once: true }}
            >
              {[
                {
                  icon: <Mail className={styles.icon} />,
                  title: "Email",
                  detail: "ytalomaker@gmail.com",
                },
                {
                  icon: <Phone className={styles.icon} />,
                  title: "Telefone",
                  detail: "+55 (81) 98243-7545",
                },
                {
                  icon: <MapPin className={styles.icon} />,
                  title: "Localização",
                  detail: "Recife-PE, Brasil",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className={styles.contactItem}
                  variants={{
                    hidden: { opacity: 0, x: -30 },
                    visible: { opacity: 1, x: 0 },
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
              <a
                href="https://www.instagram.com/ytalomarculino/"
                className={styles.socialLink}
              >
                <Instagram size={20} />
              </a>
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
            <form className={styles.formContent} onSubmit={handleSubmit}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Nome</label>
                  <input
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    placeholder="Seu nome"
                    className={styles.input}
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Email</label>
                  <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="seu@email.com"
                    className={styles.input}
                    required
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>Assunto</label>
                <input
                  name="assunto"
                  value={formData.assunto}
                  onChange={handleChange}
                  placeholder="Assunto da mensagem"
                  className={styles.input}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>Mensagem</label>
                <textarea
                  name="mensagem"
                  value={formData.mensagem}
                  onChange={handleChange}
                  placeholder="Descreva seu projeto..."
                  rows={5}
                  className={styles.textarea}
                  required
                />
              </div>

              {statusMessage && (
                <p style={{ textAlign: "center", marginBottom: "1rem" }}>
                  {statusMessage}
                </p>
              )}

              <motion.button
                type="submit"
                disabled={loading}
                className={styles.submitButton}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Send size={16} style={{ marginRight: "0.5rem" }} />
                {loading ? "Enviando..." : "Enviar Mensagem"}
              </motion.button>
            </form>
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
              <a href="#" className={styles.footerLink}>
                Política de Privacidade
              </a>
              <a href="#" className={styles.footerLink}>
                Termos de Uso
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}
