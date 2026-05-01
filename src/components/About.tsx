import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/about-mua.jpg" 
                alt="Anik - Makeup Artist" 
                className="w-full h-[600px] object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-rose-100 -z-0 rounded-2xl" />
            <div className="absolute -top-8 -left-8 w-32 h-32 border-4 border-rose-200 -z-0 rounded-2xl" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <h2 className="text-rose-600 font-medium tracking-widest uppercase mb-4">Tentang Anik</h2>
            <h3 className="text-4xl font-serif text-gray-900 mb-6 leading-tight">Mewujudkan Kecantikan Impian Anda Sejak 2015</h3>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Halo! Saya Anik, seorang makeup artist profesional yang berdedikasi untuk meningkatkan kepercayaan diri wanita melalui seni tata rias. Dengan pengalaman lebih dari 4 tahun di industri kecantikan, saya percaya bahwa makeup bukan tentang menutupi, tetapi menonjolkan fitur terbaik Anda.
            </p>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Saya telah bekerja dengan ratusan pengantin dan klien fashion untuk menciptakan tampilan yang abadi, elegan, dan personal. Setiap sapuan kuas dilakukan dengan cinta dan perhatian pada detail terkecil.
            </p>
            
            <div className="grid grid-cols-2 gap-8 mb-10">
              <div>
                <p className="text-3xl font-serif text-rose-600 font-bold">300+</p>
                <p className="text-gray-500 uppercase text-xs tracking-widest">Klien Bahagia</p>
              </div>
              <div>
                <p className="text-3xl font-serif text-rose-600 font-bold">4+</p>
                <p className="text-gray-500 uppercase text-xs tracking-widest">Tahun Pengalaman</p>
              </div>
            </div>

            <button className="text-rose-600 font-bold border-b-2 border-rose-600 pb-1 hover:text-rose-700 hover:border-rose-700 transition-colors">
              Pelajari Lebih Lanjut
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
