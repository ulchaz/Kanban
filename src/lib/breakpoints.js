// src/lib/breakpoints.js
export const breakpoints = {
    sm: 375,
    md: 495,
    lg: 660,
    xl: 1200,
  };
  
  export const media = {
    sm: `@media screen and (max-width: ${breakpoints.sm}px)`,
    md: `@media screen and (max-width: ${breakpoints.md}px)`,
    lg: `@media screen and (max-width: ${breakpoints.lg}px)`,
    xl: `@media screen and (max-width: ${breakpoints.xl}px)`,
  };