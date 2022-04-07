import ScrollReveal from 'scrollreveal';

export default function () {
  const scrollRevealConfig = {
    default: {
        origin: 'bottom',
        distance: '60px',
        duration: 800,
        easing: 'cubic-bezier(.35,0,.17,1)',
        viewFactor: 0.5,
    },
    slow: {
        interval: 200,
        duration: 800,
        delay: 400,
        easing: 'cubic-bezier(.4,0,.2,1)',
        viewFactor: 0.75,
    },
    sequence: {
        interval: 100,
        origin: 'bottom',
        distance: '60px',
        duration: 800,
        easing: 'cubic-bezier(.35,0,.17,1)',
        viewFactor: 0.5,
    }
  };
  ScrollReveal().reveal('.reveal-seq', scrollRevealConfig.sequence);
}