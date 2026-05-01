import { Camera, Globe, Play, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-1">
            <span className="text-2xl font-serif font-bold tracking-widest text-rose-500 mb-6 block">
              ANIK <span className="font-light text-white">MUA</span>
            </span>
            <p className="text-gray-400 leading-relaxed mb-6">
              Menciptakan keindahan yang abadi dan meningkatkan rasa percaya diri Anda di setiap momen berharga.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-rose-500 transition-colors"><Camera size={24} /></a>
              <a href="#" className="hover:text-rose-500 transition-colors"><Globe size={24} /></a>
              <a href="#" className="hover:text-rose-500 transition-colors"><Play size={24} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Navigasi</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Beranda</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">Tentang</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Layanan</a></li>
              <li><a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Layanan</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Bridal Makeup</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Party & Event</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Editorial & Shoot</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Self Makeup Class</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Newsletter</h4>
            <p className="text-gray-400 mb-4">Dapatkan info promo dan tips kecantikan terbaru.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Email anda" 
                className="bg-gray-800 border-none rounded-l-lg px-4 py-2 w-full focus:ring-1 focus:ring-rose-500 outline-none"
              />
              <button className="bg-rose-600 px-4 py-2 rounded-r-lg hover:bg-rose-700 transition-colors">
                Gabung
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Anik Makeup Artistry. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm flex items-center gap-1">
            Made with <Heart size={14} className="text-rose-600 fill-rose-600" /> in Sokatengah, Bumijawa.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
