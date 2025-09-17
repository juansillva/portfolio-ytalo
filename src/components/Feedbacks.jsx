import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import styles from './Feedbacks.module.scss';

export default function Feedbacks() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
  {
    name: 'Camila Andrade',
    content: 'O Ytalo registrou o aniversário da minha filha com uma sensibilidade única. Cada detalhe foi captado e transformado em uma lembrança emocionante.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face'
  },
  {
    name: 'Rafael Moura',
    content: 'Contratamos o Ytalo para o clipe da nossa banda e o resultado ficou acima do esperado. Ele trouxe ideias criativas e entregou tudo no prazo.',
    rating: 5,
   avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face'
  },
  {
    name: 'Juliana Ferreira',
    content: 'O vídeo institucional que ele produziu para nossa empresa ajudou a fortalecer nossa marca. Profissionalismo do início ao fim.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=100&h=100&fit=crop&crop=face'
  },
  {
    name: 'Bruno e Larissa',
    content: 'Nosso casamento foi registrado de forma cinematográfica. O Ytalo conseguiu transformar o nosso dia em um filme emocionante!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop&crop=face'
  }
];


  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className={styles.testimonials}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            Feedbacks
          </h2>
          <p className={styles.description}>
            O que nossos clientes dizem sobre nosso trabalho e dedicação em cada projeto.
          </p>
        </div>

        <div className={styles.testimonialContainer}>
          <div className={styles.card}>
            <div className={styles.cardContent}>
              {/* Quote Icon */}
              <div className={styles.quoteIcon}>
                <Quote size={48} style={{ color: '#34d399' }} />
              </div>

              {/* Testimonial Content */}
              <blockquote className={styles.quote}>
                "{testimonials[currentTestimonial].content}"
              </blockquote>

              {/* Rating */}
              <div className={styles.rating}>
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className={styles.star} />
                ))}
              </div>

              {/* Author Info */}
              <div className={styles.author}>
                <img
                  src={testimonials[currentTestimonial].avatar}
                  alt={testimonials[currentTestimonial].name}
                  className={styles.avatar}
                />
                <div className={styles.authorInfo}>
                  <h4 className={styles.authorName}>
                    {testimonials[currentTestimonial].name}
                  </h4>
                </div>
              </div>

              {/* Navigation */}
              <div className={styles.navigation}>
                <button
                  onClick={prevTestimonial}
                  className={styles.navButton}
                >
                  <ChevronLeft size={16} />
                </button>

                {/* Dots Indicator */}
                <div className={styles.dots}>
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`${styles.dot} ${index === currentTestimonial ? styles.active : ''}`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextTestimonial}
                  className={styles.navButton}
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}