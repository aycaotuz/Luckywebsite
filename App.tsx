/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { 
  Leaf, 
  BookOpen, 
  Settings, 
  Clock, 
  Calendar, 
  ArrowRight, 
  ChevronRight, 
  Mail, 
  Heart,
  ScrollText,
  Gamepad2,
  Flower2,
  Sun
} from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#', active: false },
  { name: 'Story Blog', href: '#', active: true },
  { name: 'Gallery', href: '#', active: false },
  { name: 'About', href: '#', active: false },
];

export default function App() {
  return (
    <div className="min-h-screen selection:bg-primary/20">
      {/* TopNavBar */}
      <header className="w-full top-0 sticky bg-[#FFFDF9]/80 backdrop-blur-md border-b border-amber-100 dark:border-stone-800 shadow-sm shadow-amber-900/5 z-50">
        <nav className="flex justify-between items-center max-w-7xl mx-auto px-6 md:px-12 py-6">
          <div className="text-2xl font-bold tracking-tight text-amber-900 font-headline">
            The Golden Years
          </div>
          <div className="hidden md:flex items-center gap-8 font-medium">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`transition-all duration-300 relative py-1 ${
                  link.active 
                    ? 'text-amber-700' 
                    : 'text-stone-500 hover:text-amber-600'
                }`}
              >
                {link.name}
                {link.active && (
                  <motion.div 
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-500"
                  />
                )}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <button className="text-stone-500 hover:bg-amber-50/50 p-2 rounded-full transition-all">
              <Flower2 className="w-5 h-5" />
            </button>
            <button className="bg-primary text-on-tertiary px-6 py-2.5 rounded-full font-bold text-xs uppercase tracking-wider active:translate-y-0.5 transition-transform shadow-md shadow-primary/20">
              Say Hello
            </button>
          </div>
        </nav>
      </header>

      <main className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-20">
        {/* Hero Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24 text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-container font-bold text-xs tracking-wider mb-6">
            <BookOpen className="w-4 h-4" />
            SCRIBBLES & SNIFFS
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-on-background mb-6 leading-tight tracking-tight">
            Heartwarming Tales from a Senior's Perspective
          </h1>
          <p className="text-lg md:text-xl text-on-surface-variant font-normal leading-relaxed">
            Gather 'round for stories of slow walks, sun-drenched naps, and the gentle mischief of a Jack Russell in his golden years.
          </p>
        </motion.section>

        {/* Bento Story Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Featured Post: Sunday Simit & Park Prowls */}
          <motion.article 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:col-span-8 bg-surface-container-lowest rounded-[40px] p-6 polaroid-shadow group hover:-translate-y-1 transition-all duration-500"
          >
            <div className="flex flex-col h-full">
              <div className="relative overflow-hidden rounded-[32px] mb-8 aspect-video">
                <img 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  alt="Senior Jack Russell Terrier in a park" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjqCZKEypK1Kzwz11F-b5kXKVGmC_aJ19FHEvrf4nuIpC9GePG33WV_Uki9Yk4oifANffni0v5Ny9MNJ9wKVRv4wqvdwsY2tbQrTpEJNVA0AnYCUkpvB9i6dRHzP7bTcfpVB_nEYfHah-FpQa47yqzEX9J3CpVqFBROPN1p8YY1FpoNySTxfBnrCPWcMsFDNxvvCyOYujmZIXunTEJyBEd-ZYeHqk65esE41kcFqSV9iG7gELAEx_2Qw2r14u6o2CmLcLTGQg2omg"
                />
                <div className="absolute top-6 left-6 flex gap-2">
                  <span className="px-4 py-2 rounded-full bg-surface-container/90 backdrop-blur-md text-primary font-bold text-[10px] tracking-widest uppercase">ISTANBUL DIARIES</span>
                  <span className="px-4 py-2 rounded-full bg-secondary-container/90 backdrop-blur-md text-on-secondary-container font-bold text-[10px] tracking-widest uppercase">NEW STORY</span>
                </div>
              </div>
              <div className="px-4 pb-4">
                <div className="flex items-center gap-4 text-outline mb-4">
                  <span className="font-bold text-xs tracking-wider flex items-center gap-1.5 uppercase">
                    <Calendar className="w-4 h-4" /> Oct 27, 2024
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span>
                  <span className="font-bold text-xs tracking-wider flex items-center gap-1.5 uppercase">
                    <Clock className="w-4 h-4" /> 5 min read
                  </span>
                </div>
                <h2 className="text-3xl font-bold text-on-background mb-4">Sunday Simit & Park Prowls</h2>
                <p className="text-base text-on-surface-variant mb-8 line-clamp-3 leading-relaxed">
                  The air in Maçka Park always smells like fresh grass and the faint, toasted scent of sesame seeds. This Sunday, Dad and I took the long route, my paws finding the familiar rhythm of the cobblestones. We found our usual bench under the old plane tree, where the simit seller knows me by name...
                </p>
                <div className="mt-auto flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container font-bold">D</div>
                    <div>
                      <p className="font-bold text-xs uppercase tracking-wider text-on-background">BY DAD</p>
                      <p className="text-[12px] text-outline">The Chief Treat Officer</p>
                    </div>
                  </div>
                  <button className="group/btn flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all">
                    Read Full Story
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </motion.article>

          {/* Side Story 1: The Great Toy Rebellion */}
          <motion.article 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-4 bg-surface-container-high rounded-[40px] p-8 polaroid-shadow flex flex-col justify-between hover:bg-surface-container-highest transition-colors"
          >
            <div>
              <div className="w-16 h-16 organic-shape bg-primary-container flex items-center justify-center mb-6">
                <Gamepad2 className="w-8 h-8 text-on-primary-container" />
              </div>
              <span className="font-bold text-xs tracking-widest text-secondary mb-2 block uppercase">MISCHIEF LOG</span>
              <h3 className="text-2xl font-bold text-on-background mb-4">The Great Toy Rebellion</h3>
              <p className="text-base text-on-surface-variant line-clamp-4 leading-relaxed">
                Why must the squeaky squirrel be retired? I spent forty minutes defending my right to keep the stuffing inside. A retrospective on my favorite (and now flat) companions.
              </p>
            </div>
            <div className="pt-8 mt-8 border-t border-outline-variant/30">
              <button className="text-primary font-bold flex items-center gap-2 group/link">
                The Full Tale
                <ChevronRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.article>

          {/* Side Story 2: Sunbeam Surveillance */}
          <motion.article 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:col-span-4 bg-surface-container-low rounded-[40px] p-8 polaroid-shadow flex flex-col justify-between group"
          >
            <div className="relative w-full aspect-square rounded-[24px] overflow-hidden mb-6">
              <img 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                alt="Sunbeam" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAr1covkw-ALe5l5ffLquQCSizSquD_zS5wJ-vThM4SY01rChOEyaMj8TJMHMkJaz4HEv9jALitKMcAB14_IgCugakq7BCcfgSX9GVB3oM6MPOgoMY4UYmY6ZJxd0aHITQ8YDyzBciCCe_y2kdHaPuuVGlLqQpI-Eh1W7M8vNHahv1blZ-VAnI2HWWucngUPVQLydkND-MvMW08VYmzILBWXjLoPy9hiuIQxik60Rvm_WCzg2RBxebC_aejaMb0QEgd0hkh-h3jeAs"
              />
              <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md rounded-full p-2">
                <Sun className="w-4 h-4 text-white" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-on-background mb-2">Sunbeam Surveillance</h3>
              <p className="text-sm text-on-surface-variant mb-4 leading-relaxed">Tracking the migration of the living room sun patch throughout the afternoon.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full bg-secondary/10 text-secondary text-[10px] font-bold tracking-widest uppercase">NAP PHILOSOPHY</span>
                <span className="px-3 py-1 rounded-full bg-secondary/10 text-secondary text-[10px] font-bold tracking-widest uppercase">LEISURE</span>
              </div>
            </div>
          </motion.article>

          {/* Main Feed Continues: The Garden Gate Incident */}
          <motion.article 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:col-span-8 bg-surface-container rounded-[40px] p-6 flex flex-col md:flex-row gap-8 polaroid-shadow"
          >
            <div className="md:w-1/2 aspect-square rounded-[32px] overflow-hidden">
              <img 
                className="w-full h-full object-cover" 
                alt="Garden Gate" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbdA4JGsZd4uy6wwNVTVF91AngLte5TuXZjMyPb3Lldln1pRbvHXz7N9aFfBpjNjsQzX0HJHhtdXYHSbZiUYd1GV9M9NtseqHEds7eQW4pUfMnKdxNblASc3uyb2TJNXz7JfFRDxBKWzdw8kYAOIYENbT-CaDPrcpP0YZZ9et1rPeMPS0dRgXUvBrRbrpqqRDzD81x9I_qLGdg_CSszaKrxF4BOyxbQ_ogJxMRUOmmRTKY9Ncfnm2zqlfvd7NkLzfBXv5kw3-_KyA"
              />
            </div>
            <div className="md:w-1/2 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-4">
                <Leaf className="w-5 h-5 text-primary" />
                <span className="font-bold text-xs tracking-widest text-on-primary-fixed-variant uppercase">GARDEN CHRONICLES</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-on-background mb-4 leading-tight">The Garden Gate Incident</h3>
              <p className="text-base text-on-surface-variant mb-6 leading-relaxed">
                I wasn't trying to escape; I was merely investigating the neighbor's cat's audacity to exist. A story about the day I learned that jasmine vines are actually quite grippy.
              </p>
              <div className="flex items-center gap-4">
                <button className="bg-on-background text-surface py-3 px-8 rounded-full font-bold text-xs tracking-widest uppercase hover:opacity-90 transition-opacity">READ MORE</button>
                <span className="text-outline text-sm">Published Oct 15</span>
              </div>
            </div>
          </motion.article>
        </div>

        {/* Newsletter Section */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 md:mt-32 bg-primary-container rounded-[48px] p-8 md:p-16 flex flex-col items-center text-center overflow-hidden relative"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 organic-shape -translate-y-1/2 translate-x-1/2" />
          <div className="w-20 h-20 bg-white/20 organic-shape flex items-center justify-center mb-6 relative z-10">
            <Mail className="w-10 h-10 text-on-primary-container" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-on-primary-fixed-variant mb-4 relative z-10">Want more tails in your inbox?</h2>
          <p className="text-lg text-on-primary-fixed-variant/80 max-w-lg mb-8 relative z-10 font-medium">Join our little pack to get monthly stories, treats recommendations, and snapshots of the golden life.</p>
          <form className="flex flex-col sm:flex-row gap-4 w-full max-w-md relative z-10">
            <input 
              className="flex-1 px-6 py-4 rounded-full border-2 border-primary/20 bg-surface focus:bg-white focus:border-primary outline-none transition-all placeholder:text-outline/50" 
              placeholder="yourname@email.com" 
              type="email"
            />
            <button className="bg-primary text-on-tertiary px-8 py-4 rounded-full font-bold shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all" type="submit">SIGN UP</button>
          </form>
          <p className="mt-6 text-xs text-on-primary-fixed-variant/60 font-bold uppercase tracking-wider">No spam, just wags. Pinky (paw) swear.</p>
        </motion.section>
      </main>

      {/* Footer */}
      <footer className="w-full mt-20 rounded-t-[40px] bg-[#FFFDF9] border-t border-amber-100 py-12">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="text-xl font-bold text-amber-900 font-headline uppercase tracking-tight">The Golden Years</div>
            <p className="text-sm tracking-wide text-amber-700/70 font-medium">© 2024 Tail Wags & Istanbul Sunsets. Built with mischief.</p>
          </div>
          <div className="flex gap-8 text-sm tracking-widest font-bold uppercase">
            <a className="text-stone-400 hover:text-amber-600 hover:underline decoration-amber-300 underline-offset-4 transition-all" href="#">Privacy</a>
            <a className="text-stone-400 hover:text-amber-600 hover:underline decoration-amber-300 underline-offset-4 transition-all" href="#">Terms</a>
            <a className="text-stone-400 hover:text-amber-600 hover:underline decoration-amber-300 underline-offset-4 transition-all" href="#">Contact</a>
          </div>
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-700 shadow-inner">
              <Heart className="w-5 h-5" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
