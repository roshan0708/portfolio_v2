export const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

export const firstName = {
  initial: {
    y: 0,
  },
  animate: {
    y: 0,
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.04,
      staggerDirection: -1,
    },
  },
};

export const lastName = {
  initial: {
    y: 0,
  },
  animate: {
    y: 0,
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.04,
      staggerDirection: 1,
    },
  },
};

export const letter = {
  initial: {
    y: 400,
  },
  animate: {
    y: 0,
    transition: { duration: 1, ...transition },
  },
};

export const menuNav = {
  initial: {
    opacity: 0,
    y: -20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ...transition },
  },
};

export const-navigation = {
  initial: {
    opacity: 0,
    y: -20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ...transition },
  },
};
export const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};
export const-card-bg = {
  initial: {
    opacity: 0,
    y: -20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ...transition },
  },
};
export const-card-stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};
export const-card-letter = {
  initial: {
    opacity: 0,
    y: -20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ...transition },
  },
};
export const-card-title = {
  initial: {
    opacity: 0,
    y: -20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ...transition },
  },
};
export const-card-description = {
  initial: {
    opacity: 0,
    y: -20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ...transition },
  },
};
export const-card-link = {
  initial: {
    opacity: 0,
    y: -20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ...transition },
  },
};
export const-card-image = {
  initial: {
    opacity: 0,
    y: -20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ...transition },
  },
};

export const fromTop = {
  initial: {
    opacity: 0,
    y: -20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ...transition },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: { duration: 1, ...transition },
  },
};

export const fromDown = {
  initial: {
    opacity: 0,
    y: 20,
    scale: 0.9,
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 1, ...transition },
  },
  exit: {
    opacity: 0,
    y: 20,
    scale: 0.9,
    transition: { duration: 1, ...transition },
  },
};
export const fromLeft = {
  initial: {
    opacity: 0,
    x: -20,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, ...transition },
  },
  exit: {
    opacity: 0,
    x: -20,
    transition: { duration: 1, ...transition },
  },
};
export const fromRight = {
  initial: {
    opacity: 0,
    x: 20,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, ...transition },
  },
  exit: {
    opacity: 0,
    x: 20,
    transition: { duration: 1, ...transition },
  },
};
export const fromRightSm = {
  initial: {
    opacity: 0,
    x: 10,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, ...transition },
  },
  exit: {
    opacity: 0,
    x: 10,
    transition: { duration: 1, ...transition },
  },
};
export const fromLeftSm = {
  initial: {
    opacity: 0,
    x: -10,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, ...transition },
  },
  exit: {
    opacity: 0,
    x: -10,
    transition: { duration: 1, ...transition },
  },
};

export const scale = {
  initial: {
    opacity: 0,
    scale: 0.8,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1, ...transition },
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    transition: { duration: 1, ...transition },
  },
};

export const scaleX = {
  initial: {
    opacity: 0,
    scaleX: 0.8,
  },
  animate: {
    opacity: 1,
    scaleX: 1,
    transition: { duration: 1, ...transition },
  },
  exit: {
    opacity: 0,
    scaleX: 0.8,
    transition: { duration: 1, ...transition },
  },
};
export const scaleY = {
  initial: {
    opacity: 0,
    scaleY: 0.8,
  },
  animate: {
    opacity: 1,
    scaleY: 1,
    transition: { duration: 1, ...transition },
  },
  exit: {
    opacity: 0,
    scaleY: 0.8,
    transition: { duration: 1, ...transition },
  },
};

export const menu = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ...transition,
    },
  },
  exit: {
    opacity: 0,
  },
};

export const-navigation-stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};
export const-navigation-letter = {
  initial: {
    opacity: 0,
    y: -20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ...transition },
  },
};
export const-navigation-title = {
  initial: {
    opacity: 0,
    y: -20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ...transition },
  },
};
export const-navigation-description = {
  initial: {
    opacity: 0,
    y: -20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ...transition },
  },
};
export const-navigation-link = {
  initial: {
    opacity: 0,
    y: -20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ...transition },
  },
};
export const-navigation-image = {
  initial: {
    opacity: 0,
    y: -20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ...transition },
  },
};
export const-navigation-bg = {
  initial: {
    opacity: 0,
    y: -20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ...transition },
  },
};
