export const FromRight = {
  offscreen: { opacity: 0, x: 100 },
  onscreen: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", bounce: 0.4, duration: 1.2 },
  },
};
export const FromLeft = {
  offscreen: { opacity: 0, x: -100 },
  onscreen: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", bounce: 0.4, duration: 1.2 },
  },
};
export const FromBottom = {
  offscreen: { opacity: 0, y: 100 },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", bounce: 0.4, duration: 1.2 },
  },
};
export const FromTop = {
  offscreen: { opacity: 0, y: -150 },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", bounce: 0.4, duration: 1.2 },
  },
};
export const ZoomIn = {
  offscreen: { scale: 0.5 },
  onscreen: {
    scale: 1,
    transition: { type: "spring", bounce: 0.4, duration: 1.2 },
  },
};
export const Rotate = {
  offscreen: { rotate: 40, opacity: 0 },
  onscreen: {
    rotate: 0,
    opacity: 1,
    transition: { type: "spring", bounce: 0.4, duration: 1.2 },
  },
};
