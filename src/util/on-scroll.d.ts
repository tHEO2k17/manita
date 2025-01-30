declare module 'react-animate-on-scroll' {
    import { Component, ReactNode } from 'react';
  
    interface ScrollAnimationProps {
      animateIn?: string;
      animateOut?: string;
      duration?: number;
      delay?: number;
      offset?: number;
      initiallyVisible?: boolean;
      children?: ReactNode; // Add children prop
      // Add other props as needed
    }
  
    export default class ScrollAnimation extends Component<ScrollAnimationProps> {}
  }