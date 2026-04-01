import { motion } from 'motion/react';
import { Heart } from 'lucide-react';
import mehndi from '../../images/mehndi.jpeg';
import couple2 from '../../images/couple2.png';
import hands from '../../images/hands.png';
import gal from '../../images/gal.jpeg';
import gal2 from '../../images/gal2.jpeg';
import gal3 from '../../images/gal3.jpeg';
import gal4 from '../../images/gal4.png';



const images = [
  mehndi,
  hands,
  gal4,
  couple2,
  gal2,
  gal3
];
const lines = [
  "The Mehndi that reminds me always him",
  "The Hands I never wanna let go",
  "Love is in the air, and it's all because of him",
  "The day It got official, the day we said yes to forever",
  "Soo far, we have created so many memories, can't wait for more",
  "Proposal day? we celebrate everyday"
];
  // "https://images.unsplash.com/photo-1660946214570-f3b89e4eaed3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJc2xhbWljJTIwd2VkZGluZyUyMGRlY29yYXRpb24lMjBmbG93ZXJzfGVufDF8fHx8MTc3NDYxNDkwN3ww&ixlib=rb-4.1.0&q=80&w=1080",
  // "https://images.unsplash.com/photo-1710498689566-868b93f934c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjB3ZWRkaW5nJTIwbWFuZGFwJTIwZmxvcmFsfGVufDF8fHx8MTc3NDYxNDkwOHww&ixlib=rb-4.1.0&q=80&w=1080",
  // "https://images.unsplash.com/photo-1762162089047-97e09435984d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWhlbmRpJTIwaGFuZHMlMjBoZW5uYSUyMGRlc2lnbnxlbnwxfHx8fDE3NzQ2MTQ5MDh8MA&ixlib=rb-4.1.0&q=80&w=1080"
// ];

export function Gallery() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-rose-50 to-amber-50 px-4 py-20">
      {/* Decorative elements */}
      <div className="absolute right-10 top-20 h-40 w-40 rounded-full bg-amber-300 opacity-20 blur-3xl" />
      <div className="absolute bottom-20 left-10 h-40 w-40 rounded-full bg-rose-300 opacity-20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <motion.div
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="mb-6 inline-block"
          >
            <Heart className="h-12 w-12 fill-rose-500 text-rose-500" />
          </motion.div>
          <h2 className="mb-4 font-serif text-4xl text-gray-800 md:text-5xl">Our Memories</h2>
          <p className="text-lg text-gray-600">Capturing beautiful moments</p>
        </motion.div>

        {/* Masonry-style gallery */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, zIndex: 10 }}
              className="group relative cursor-pointer overflow-hidden rounded-2xl shadow-xl"
              style={{ height: index % 3 === 0 ? '400px' : '300px' }}
            >
              <img
                src={image}
                alt={`Gallery image ${index + 1}`}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Overlay on hover */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm"
              >
                <p className="text-center text-white text-lg px-4">{lines[index]}</p>
              </motion.div>

              {/* Decorative corner */}
              <div className="absolute left-0 top-0 h-20 w-20 border-l-4 border-t-4 border-white opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="absolute bottom-0 right-0 h-20 w-20 border-b-4 border-r-4 border-white opacity-0 transition-opacity group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>

        {/* Floating hearts animation */}
        <div className="pointer-events-none absolute inset-0">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${20 + i * 15}%`,
                bottom: 0,
              }}
              animate={{
                y: [-50, -800],
                opacity: [0, 1, 1, 0],
                rotate: [0, 360],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                delay: i * 1.5,
                ease: "easeInOut",
              }}
            >
              <Heart className="h-8 w-8 fill-rose-300 text-rose-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
