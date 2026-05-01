import { motion } from 'framer-motion';
import { Heart, Sparkles, Camera, Users } from 'lucide-react';

const services = [
  {
    icon: <Heart className="w-8 h-8" />,
    title: 'Bridal Makeup',
    description: 'Riasan pengantin yang elegan dan tahan lama untuk hari paling berharga dalam hidup Anda. Termasuk trial dan retouch.',
    image: '/wedding-makeup.jpg'
  },
  {
    icon: <Sparkles className="w-8 h-8" />,
    title: 'Glamour / Party',
    description: 'Tampil memukau di setiap acara pesta. Fokus pada mata yang dramatis dan kulit yang flawless.',
    image: '/glam-makeup.jpg'
  },
  {
    icon: <Camera className="w-8 h-8" />,
    title: 'Photoshoot',
    description: 'Makeup khusus untuk kebutuhan fotografi profesional, editorial, atau konten komersial.',
    image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=800&auto=format&fit=crop'
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: 'Workshop / Class',
    description: 'Belajar teknik makeup dari dasar hingga profesional secara private maupun berkelompok.',
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=800&auto=format&fit=crop'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-rose-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-rose-600 font-medium tracking-widest uppercase mb-4"
          >
            Layanan Kami
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif text-gray-900"
          >
            Pilihan Paket Terbaik
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg group hover:shadow-2xl transition-all duration-500"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <div className="text-rose-500 mb-4 bg-rose-50 w-16 h-16 flex items-center justify-center rounded-xl">
                  {service.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                <a href="#contact" className="text-rose-600 font-semibold text-sm inline-flex items-center group">
                  Booking Sekarang
                  <span className="ml-2 group-hover:translate-x-2 transition-transform">→</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
