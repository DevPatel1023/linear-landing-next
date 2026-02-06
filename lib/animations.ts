import { cubicBezier } from "framer-motion";

export const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  // Text reveal animation - slides up and fades in with blur
export const textRevealVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      filter: "blur(10px)"
    },
    visible: { 
      opacity: 1, 
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: cubicBezier(0.22, 1, 0.36, 1),
        filter: {
          duration: 0.8,
        }
      },
    },
  };

// Container for staggering child animations
export const staggerContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12, 
      delayChildren: 0.2, 
    },
  },
};

// Image stacking animation with 3D effect
export const imageStackContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // 150ms between each image
      delayChildren: 0.6, // Wait for text to appear first
    },
  },
};

export const imageStackItem = {
  hidden: {
    opacity: 0,
    scale: 0.85,
    y: 60,
    rotateX: 15, // 3D rotation
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};