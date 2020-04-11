import React, { FC, ReactNode } from 'react';
import { Typography, Container } from '@material-ui/core';
import { Particles } from '@blackbox-vision/react-particles';

import { useStyles } from './styles';

export interface HeroProps {
  /**
   * The title that shows the hero component
   */
  title: string;
  /**
   * The subtitle that shows the hero component
   */
  subtitle: string;
  /**
   * The particles component config object
   */
  particlesConfig?: any;
  /**
   * The children of the hero component
   */
  children?: ReactNode;
  /**
   * The direction of CSS background clipPath
   */
  clip: 'none' | 'left' | 'center' | 'right';
}

export const Hero: FC<HeroProps> = ({
  title,
  subtitle,
  particlesConfig,
  children,
  clip,
}: HeroProps) => {
  const classes = useStyles({ clip });

  return (
    <section id="hero" className={classes.section}>
      <Particles id="hero" height="0" params={particlesConfig} />
      <Container maxWidth="md" className={classes.titlesContainer}>
        <Typography
          align="center"
          component="h1"
          variant="h4"
          className={classes.title}
          gutterBottom
        >
          {title}
        </Typography>
        <Typography
          align="center"
          component="h2"
          variant="h6"
          className={classes.subtitle}
          gutterBottom
        >
          {subtitle}
        </Typography>
        {children}
      </Container>
    </section>
  );
};

Hero.defaultProps = {
  clip: 'left',
  particlesConfig: {
    particles: {
      number: {
        value: 175,
        density: {
          enable: false,
        },
      },
      size: {
        value: 3,
        random: true,
        anim: {
          speed: 4,
          size_min: 0.3,
        },
      },
      line_linked: {
        enable: false,
      },
      move: {
        random: true,
        speed: 1,
        direction: 'top',
        out_mode: 'out',
      },
    },
    interactivity: {
      events: {
        onhover: {
          enable: false,
          mode: 'bubble',
        },
        onclick: {
          enable: true,
          mode: 'repulse',
        },
      },
      modes: {
        bubble: {
          distance: 250,
          duration: 2,
          size: 10,
          opacity: 0,
        },
        repulse: {
          distance: 400,
          duration: 4,
        },
      },
    },
    retina_detect: true,
  },
};

Hero.displayName = 'Hero';

export default Hero;
