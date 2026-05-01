import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Lely Cahyani',
    role: 'Fashion Model',
    content: 'Anik benar-benar memahami apa yang saya inginkan. Makeup saya terlihat sangat natural tapi tetap "wow". Bertahan seharian penuh tanpa luntur sedikitpun!',
    image: 'foto_testimonials/testimonials-1.jpg'
    
  },
  {
    name: 'Susi Rhayu',
    role: 'Artist',
    content: 'Tekniknya luar biasa. Dia tahu persis bagaimana menonjolkan fitur wajah saya untuk kebutuhan kamera. Sangat profesional dan on-time!',
    image: 'foto_testimonials/testimonials-2.jpg'
  },
  {
    name: 'Ayra Salwa Irawan',
    role: 'Wisudawati',
    content: 'Tidak pernah merasa secantik ini! Terima kasih kak Anik sudah membuat hari wisudaku jadi lebih spesial dengan riasannya yang super flawless.',
    image: 'foto_testimonials/testimonials-3.jpg'
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-rose-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-rose-600 font-medium tracking-widest uppercase mb-4">Testimoni</h2>
          <h3 className="text-4xl font-serif text-gray-900">Kata Mereka</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow relative"
            >
              <Quote className="absolute top-8 right-8 text-rose-100 w-12 h-12" />
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-rose-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-600 italic leading-relaxed">
                "{testimonial.content}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
