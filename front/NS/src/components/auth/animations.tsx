import { Variants } from 'framer-motion';

// Shared animation variants for consistent animations across auth components
export const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6, 
      ease: [0.22, 1, 0.36, 1] 
    }
  },
  exit: { 
    opacity: 0, 
    y: 10, 
    transition: { 
      duration: 0.4, 
      ease: [0.22, 1, 0.36, 1] 
    }
  }
};

// Slide in from left animation
export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { 
      duration: 0.7, 
      ease: [0.22, 1, 0.36, 1] 
    }
  },
  exit: { 
    opacity: 0, 
    x: -30, 
    transition: { 
      duration: 0.5, 
      ease: [0.22, 1, 0.36, 1] 
    }
  }
};

// Slide in from right animation
export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { 
      duration: 0.7, 
      ease: [0.22, 1, 0.36, 1] 
    }
  },
  exit: { 
    opacity: 0, 
    x: 30, 
    transition: { 
      duration: 0.5, 
      ease: [0.22, 1, 0.36, 1] 
    }
  }
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
      when: "beforeChildren"
    }
  },
  exit: {
    opacity: 0,
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
      when: "afterChildren"
    }
  }
};

export const formItemVariant: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      type: "spring",
      stiffness: 400,
      damping: 25,
      duration: 0.5, 
      ease: [0.22, 1, 0.36, 1] 
    }
  },
  exit: { 
    opacity: 0, 
    y: 5, 
    transition: { 
      duration: 0.3 
    }
  }
};

export const buttonVariant: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.5, 
      ease: [0.22, 1, 0.36, 1] 
    }
  },
  hover: { 
    scale: 1.03, 
    boxShadow: "0px 4px 8px rgba(166, 138, 100, 0.2)",
    backgroundColor: "rgba(166, 138, 100, 0.05)",
    transition: { 
      duration: 0.2,
      ease: "easeInOut"
    }
  },
  tap: { 
    scale: 0.98,
    backgroundColor: "rgba(166, 138, 100, 0.1)",
    transition: { 
      duration: 0.1 
    }
  }
};

export const pageTransition: Variants = {
  initial: { opacity: 0 },
  animate: { 
    opacity: 1,
    transition: { 
      duration: 0.6, 
      ease: [0.22, 1, 0.36, 1] 
    }
  },
  exit: { 
    opacity: 0,
    transition: { 
      duration: 0.4, 
      ease: [0.22, 1, 0.36, 1] 
    }
  }
};

export const logoVariant: Variants = {
  hidden: { opacity: 0, scale: 0.9, rotate: -5 },
  visible: { 
    opacity: 1, 
    scale: 1,
    rotate: 0,
    transition: { 
      duration: 0.7, 
      ease: [0.22, 1, 0.36, 1] 
    }
  },
  hover: {
    scale: 1.05,
    rotate: 2,
    transition: {
      duration: 0.3,
      ease: "easeInOut"
    }
  }
};

// Form success animation
export const successAnimation: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: [0.8, 1.1, 1],
    transition: {
      duration: 0.6,
      times: [0, 0.6, 1],
      ease: "easeOut"
    }
  }
};

// Form error shake animation
export const errorAnimation: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    x: [0, -10, 10, -10, 10, -5, 5, 0],
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export const inputVariant: Variants = {
  initial: { borderColor: "#B2916C", scale: 1 },
  focus: { 
    boxShadow: "0px 0px 0px 2px rgba(166, 138, 100, 0.3)",
    borderColor: "#B2916C",
    scale: 1.01,
    transition: { duration: 0.2, type: "spring", stiffness: 500 }
  },
  valid: {
    boxShadow: "0px 0px 0px 2px rgba(72, 187, 120, 0.2)",
    borderColor: "#48BB78",
    transition: { duration: 0.3 }
  },
  invalid: {
    boxShadow: "0px 0px 0px 2px rgba(245, 101, 101, 0.2)",
    borderColor: "#F56565",
    transition: { duration: 0.3 }
  }
};

export const verificationInputVariant: Variants = {
  idle: { scale: 1 },
  focus: { 
    scale: 1.05, 
    boxShadow: "0px 0px 0px 2px rgba(166, 138, 100, 0.3)",
    transition: { duration: 0.2, type: "spring", stiffness: 500 }
  },
  filled: {
    backgroundColor: "rgba(166, 138, 100, 0.1)",
    borderColor: "#B2916C",
    y: -2,
    transition: { duration: 0.2 }
  },
  success: {
    scale: 1.05,
    backgroundColor: "rgba(72, 187, 120, 0.1)",
    borderColor: "#48BB78",
    boxShadow: "0px 0px 0px 2px rgba(72, 187, 120, 0.2)",
    transition: { duration: 0.3, type: "spring" }
  }
};