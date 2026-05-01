import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const categories = ['Semua', 'Bridal', 'Party', 'Editorial'];

const portfolioItems = [
  { id: 1, category: 'Bridal', image: '/portfolio-bridal.jpg', title: 'Romantic Wedding' },
  { id: 2, category: 'Party', image: 'https://plus.unsplash.com/premium_photo-1703343321058-427d85ac0756?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'Glow Party Look' },
  { id: 3, category: 'Editorial', image: 'https://images.unsplash.com/photo-1522338242992-e1a54906a8da?q=80&w=800&auto=format&fit=crop', title: 'Vogue Editorial' },
  { id: 4, category: 'Bridal', image: 'https://images.unsplash.com/photo-1765812927514-8c1ca8b430bc?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'Traditional Javanese' },
  { id: 5, category: 'Party', image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=800&auto=format&fit=crop', title: 'Evening Glam' },
  { id: 6, category: 'Editorial', image: 'https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?q=80&w=800&auto=format&fit=crop', title: 'Minimalist Shoot' },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('Semua');

  const filteredItems = activeCategory === 'Semua' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-rose-600 font-medium tracking-widest uppercase mb-4">Galeri Kami</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-gray-900 mb-8">Koleksi Mahakarya</h3>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category 
                    ? 'bg-rose-600 text-white' 
                    : 'bg-gray-100 text-gray-600 hover:bg-rose-100 hover:text-rose-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode='popLayout'>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="relative group h-[400px] overflow-hidden rounded-2xl cursor-pointer"
              >
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                  <p className="text-rose-400 text-sm font-medium mb-1 uppercase tracking-widest">{item.category}</p>
                  <h4 className="text-white text-2xl font-serif">{item.title}</h4>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
