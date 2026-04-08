import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import storefrontImg from "@/assets/storefront.png";
import workspaceImg from "@/assets/workspace.png";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="section-padding bg-card" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="section-heading"
        >
          <p>About Us</p>
          <h2>Sound in its Purest State</h2>
          <div className="divider" />
        </motion.div>

        {/* Two-column text */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 mb-10 md:mb-16 max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-xs sm:text-sm text-muted-foreground leading-[1.8]"
          >
            Shri Shankar Digitals is a premier photography studio and digital services center in the heart of Raichur, Karnataka. We are renowned for delivering unmatched quality through innovative products and services, blending advanced technology with elegant, creative design.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="text-xs sm:text-sm text-muted-foreground leading-[1.8]"
          >
            We specialize in luxurious products and captivating aesthetics — from professional studio photography to custom frames, personalized gifts, and premium flex printing. As a leader in digital services, we continue to combine top-tier quality with beautiful design.
          </motion.p>
        </div>

        {/* Images grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
          {[
            { src: storefrontImg, alt: "Storefront", delay: 0.3 },
            { src: workspaceImg, alt: "Workspace", delay: 0.45 },
            { src: storefrontImg, alt: "Studio", delay: 0.6 },
          ].map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: img.delay, ease: [0.22, 1, 0.36, 1] }}
              className="photo-frame h-44 sm:h-52 md:h-56 lg:h-64"
            >
              <img src={img.src} alt={img.alt} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
