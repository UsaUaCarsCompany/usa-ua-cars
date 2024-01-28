export const scaleAnimations = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  visible: (custom: number) => ({
    opacity: 1,
    transition: { delay: custom * 0.3 },
    scale: 1,
  }),
}

export const opacityAnimations = {
  hidden: {
    opacity: 0,
  },
  visible: (custom: number) => ({
    opacity: 1,
    transition: { delay: custom * 0.3 },
  }),
}

export const rightAnimations = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: (custom: number) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.3 },
  }),
}

export const leftAnimations = {
  hidden: {
    x: 100,
    opacity: 0,
  },
  visible: (custom: number) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.3 },
  }),
}

export const topAnimations = {
  hidden: {
    y: -50,
    opacity: 0,
  },
  visible: (custom: number) => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.3 },
  }),
}
export const bottomAnimations = {
  hidden: {
    y: 50,
    opacity: 0,
  },
  visible: (custom: number) => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.3 },
  }),
}

export const bottomCardAnimations = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: (custom: number) => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.3, duration: 0.3 },
  }),
}
