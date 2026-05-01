import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle} from 'lucide-react';
import { FaInstagram,FaTiktok } from 'react-icons/fa';


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    eventType: '',
    date: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simpan ke localStorage sebagai contoh booking
    const bookings = JSON.parse(localStorage.getItem('bookings') || '[]');
    bookings.push({
      ...formData,
      id: Date.now(),
      createdAt: new Date().toISOString()
    });
    localStorage.setItem('bookings', JSON.stringify(bookings));
    
    setIsSubmitted(true);
    
    // Reset form setelah 3 detik
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', phone: '', eventType: '', date: '', message: '' });
    }, 5000);
  };

  const handleWhatsApp = () => {
    const message = `Halo KaK Anik MUA! Saya ingin booking :\n\nNama: ${formData.name || '-'}\nNo. HP: ${formData.phone || '-'}\nJenis Acara: ${formData.eventType || '-'}\nTanggal: ${formData.date || '-'}\nPesan: ${formData.message || '-'}`;
    const waUrl = `https://wa.me/625878274772?text=${encodeURIComponent(message)}`;
    window.open(waUrl, '_blank');
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/3"
          >
            <h2 className="text-rose-600 font-medium tracking-widest uppercase mb-4">Hubungi Kami</h2>
            <h3 className="text-4xl font-serif text-gray-900 mb-8">Siap Untuk Tampil Memukau?</h3>
            
            <div className="space-y-6">

              <div className="flex items-start gap-4">
                <div className="bg-rose-50 p-3 rounded-lg text-rose-600">
                  <FaInstagram size={24} />
                </div>
                <div>
                  <p className="font-bold text-gray-900">Instagram</p>
                  <a 
                    href="https://www.instagram.com/anikmakeup12?igsh=OHJ1a2t4ZHRrbGV1" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-rose-600 transition-colors"
                  >
                    @anikmakeup12
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-rose-50 p-3 rounded-lg text-rose-600">
                  <FaTiktok size={24} />
                </div>
                <div>
                  <p className="font-bold text-gray-900">TikTok</p>
                  <a 
                    href="https://www.tiktok.com/@inianik_12?_r=1&_t=ZS-95zbme01CtO" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-rose-600 transition-colors"
                  >
                    @inianik_12
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-rose-50 p-3 rounded-lg text-rose-600">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="font-bold text-gray-900">Telepon / WhatsApp</p>
                  <p className="text-gray-600">+62 813-3487-8454</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-rose-50 p-3 rounded-lg text-rose-600">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="font-bold text-gray-900">Email</p>
                  <p className="text-gray-600">anikmakeup12@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-rose-50 p-3 rounded-lg text-rose-600">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="font-bold text-gray-900">Studio</p>
                  <p className="text-gray-600">Jl. Sokatengah, RT 04/RW 02</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 1, x: -25 }}
            whileInView={{ opacity: 1, y: -53 }}
            viewport={{ once: true }}
            className="lg:w-2/3 bg-gray-50 p-8 md:p-12 rounded-3xl"
          >
            <h2 className="text-rose-600 font-medium tracking-widest uppercase mb-4">Booking Sekarang</h2>
            {isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="text-green-600" size={40} />
                </div>
                <h4 className="text-2xl font-serif text-gray-900 mb-2">Booking Berhasil!</h4>
                <p className="text-gray-600 mb-6">Terima kasih telah booking. Kami akan menghubungi Anda segera.</p>
                <button
                  onClick={handleWhatsApp}
                  className="inline-flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-xl hover:bg-green-600 transition-colors"
                >
                  <Phone size={20} />
                  Hubungi via WhatsApp
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Nama Lengkap</label>
                <input 
                  type="text" 
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-gray-200 focus:ring-rose-500 focus:border-rose-500 outline-1 transition-all"
                  placeholder="Masukkan nama lengkap anda"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Nomor Telepon</label>
                <input 
                  type="tel" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-gray-200 focus:ring-rose-500 focus:border-rose-500 outline-1 transition-all"
                  placeholder="Contoh: 0812..."
                />
              </div>
              <div className="md:col-span-2">
                <label htmlFor="eventType"className="block text-sm font-medium text-gray-700 mb-2">Jenis Layanan</label>
                <select 
                  id="eventType" 
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleChange}
                  required
                  className="w-none px-4 py-3 rounded-xl bg-gray-200 focus:ring-rose-500 focus:border-rose-500 outline-1 transition-all"
                >
                  <option value="">Pilih layanan...</option>
                  <option value="Wedding">Bridal Makeup (Wedding)</option>
                  <option value="Party">Glamour / Party</option>
                  <option value="Photoshoot">Photoshoot</option>
                  <option value="Workshop">Workshop / Class</option>
                  <option value="Lainnya">Lainnya</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Tanggal Acara</label>
                <input 
                  type="date" 
                  id="date"
                  name="date"
                  placeholder="Pilih tanggal acara"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className="w-none px-4 py-3 rounded-xl bg-gray-200 focus:ring-rose-500 focus:border-rose-500 outline-1 transition-all"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Pesan (Opsional)</label>
                <textarea 
                  id="message"
                  rows={2}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-1 rounded-xl bg-gray-200 focus:ring-rose-500 focus:border-rose-500 outline-1 transition-all"
                  placeholder ="Beritahu kami lebih detail tentang acara anda..."
                ></textarea>
              </div>
              <div className="md:col-span-2">
                <button 
                  type="submit"
                  className="w-full bg-rose-600 text-white py-3 rounded-xl font-medium hover:bg-rose-700 transition-colors flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  Kirim Booking
                </button>
              </div>
            </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
