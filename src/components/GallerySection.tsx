import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import galleryFrames from "@/assets/gallery-frames.png";
import studioInterior from "@/assets/studio-interior.png";
import workspace from "@/assets/workspace.png";
import giftsDisplay from "@/assets/gifts-display.png";
import framesDisplay from "@/assets/frames-display.png";
import storefront from "@/assets/storefront.png";

const images = [
  { src: storefront, alt: "Sri Shankar Digitals Storefront", aspect: "row-span-2" },
  { src: workspace, alt: "Professional Workspace", aspect: "" },
  { src: galleryFrames, alt: "Photo Frames Collection", aspect: "" },
  { src: giftsDisplay, alt: "Personalized Gifts Display", aspect: "" },
  { src: framesDisplay, alt: "Custom Frames & Gifts", aspect: "" },
  { src: studioInterior, alt: "Studio Interior", aspect: "col-span-2" },
];

const GallerySection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="gallery" className="section-padding bg-card" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="section-heading"
        >
          <p>Our Work</p>
          <h2>Gallery</h2>
          <div className="divider" />
        </motion.div>

        {/* Mobile: 1 column, Tablet: 2 columns, Desktop: 3 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3">
          {images.map((img, i) => (
            <motion.div
              key={img.alt}
              initial={{ opacity: 0, scale: 0.9, filter: "blur(5px)" }}
              animate={inView ? { opacity: 1, scale: 1, filter: "blur(0px)" } : {}}
              transition={{ duration: 0.8, delay: 0.1 * i, ease: [0.22, 1, 0.36, 1] }}
              className={`photo-frame group ${
                i === 0 ? "sm:row-span-2 h-52 sm:h-full" : "h-44 sm:h-48 md:h-56"
              } ${i === 5 ? "sm:col-span-2" : ""}`}
            >
              <img src={img.src} alt={img.alt} className="!h-full" />
              <motion.div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-all duration-700 flex items-end justify-start p-4 sm:p-5">
                <span className="text-background text-[10px] sm:text-xs font-medium tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-3 group-hover:translate-y-0">
                  {img.alt}
                </span>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
