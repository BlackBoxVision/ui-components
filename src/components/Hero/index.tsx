import React, { FC, ReactNode } from 'react';
import { Typography, Container } from '@material-ui/core';
import { Particles } from '@blackbox-vision/react-particles';

import { useStyles } from './styles';

export interface GradientProps {
  /**
   * The degrees for the linear gradient
   */
  direction?: string;
  /**
   * The color to start the gradient
   */
  start: string;
  /**
   * The percentage for the start color
   */
  startPercentage?: string;
  /**
   * The color to end the gradient
   */
  end: string;
  /**
   * The percentage for the end color
   */
  endPercentage?: string;
}

export interface HeroProps {
  /**
   * The id where to render the particles effect
   */
  id?: string;
  /**
   * The height of the section
   */
  height?: string | number;
  /**
   * An object config for the background gradient
   */
  gradient?: GradientProps;
  /**
   * The title that shows the hero component
   */
  title?: string;
  /**
   * Additional props for title component
   */
  titleProps?: any;
  /**
   * The subtitle that shows the hero component
   */
  subtitle?: string;
  /**
   * Additional props for subtitle component
   */
  subtitleProps?: any;
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
  id,
  height,
  title,
  titleProps,
  subtitle,
  subtitleProps,
  particlesConfig,
  gradient,
  children,
  clip,
}: HeroProps) => {
  const classes = useStyles({ clip, height, gradient });

  return (
    <section id={id} className={classes.section}>
      <Particles id={id} height="0" params={particlesConfig} />
      <Container maxWidth="md" className={classes.titlesContainer}>
        <Typography
          align="center"
          component="h1"
          variant="h4"
          className={classes.title}
          gutterBottom
          {...titleProps}
        >
          {title}
        </Typography>
        <Typography
          align="center"
          component="h2"
          variant="h6"
          className={classes.subtitle}
          gutterBottom
          {...subtitleProps}
        >
          {subtitle}
        </Typography>
        {children}
      </Container>
    </section>
  );
};

Hero.defaultProps = {
  id: 'hero',
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
