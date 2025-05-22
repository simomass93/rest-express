import { motion } from 'framer-motion';
import { DollarSign, Users, Star } from 'lucide-react';

export default function FreeServiceSlide() {
  return (
    <div className="flex items-center justify-center h-full w-full relative">
      <div className="absolute inset-0 bg-gradient-to-bl from-rose-antique/10 to-elegant-gold/10"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.div
          className="space-y-12"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="font-playfair text-5xl md:text-6xl font-bold text-charcoal mb-8">
            Totem <span className="text-elegant-gold">Gratuito</span> per le Ville Partner
          </h2>

          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-elegant-gold/20">
            <p className="text-xl md:text-2xl text-charcoal/80 leading-relaxed mb-12 max-w-4xl mx-auto">
              Proponiamo il nostro Totem in modalità completamente{' '}
              <strong className="text-elegant-gold">gratuita</strong> alle ville e location con cui collaboriamo.
              Nessun costo, nessun impegno organizzativo: ci occupiamo noi di tutto.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: DollarSign,
                  title: 'Nessun Investimento',
                  description: 'Zero costi di acquisto',
                  color: 'elegant-gold',
                },
                {
                  icon: Users,
                  title: 'Nessuna Gestione',
                  description: 'Ci occupiamo di installazione, manutenzione e supporto',
                  color: 'rose-antique',
                },
                {
                  icon: Star,
                  title: 'Servizio in Più',
                  description: 'Un valore aggiunto da offrire ai futuri sposi',
                  color: 'elegant-gold',
                },
              ].map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  className={`bg-gradient-to-br from-${benefit.color}/10 to-${benefit.color}/5 rounded-xl p-6 border border-${benefit.color}/20`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                >
                  <benefit.icon className={`text-${benefit.color} text-4xl mb-4 mx-auto`} />
                  <h3 className="font-playfair text-xl font-semibold text-charcoal mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-charcoal/70">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            className="mt-12"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <img
              src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=400"
              alt="Luxurious wedding venue with modern photobooth elegantly positioned"
              className="rounded-2xl shadow-xl w-full h-64 object-cover"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
