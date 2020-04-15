import React, { FC } from 'react';
import clsx from 'clsx';
import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';
import LazyLoad from 'react-lazyload';

import { useStyles } from './styles';

interface AosProps {
  /**
   * Name of the animation to use
   */
  'data-aos': string;
  /**
   * Mark if animation is done only once
   */
  'data-aos-once': string | boolean;
}

export interface SectionCardProps {
  /**
   * URL for an Image to load in SectionCard
   */
  image: string;
  /**
   * Title to show in SectionCard
   */
  title: string;
  /**
   * Description to show in SectionCard
   */
  description: string;
  /**
   * Box Shadow for the SectionCard
   */
  elevation?: number;
  /**
   * AOS properties for animation configuration
   */
  aosProps?: AosProps;
  /**
   * Background styles applied to card
   */
  background?: string;
  /**
   * Style object applied to Card component
   */
  style?: any;
  /**
   * ClassName applied to Card component
   */
  cardClassName?: string;
  /**
   * ClassName applied to CardMedia component
   */
  imgClassName?: string;
}

export const SectionCard: FC<SectionCardProps> = ({
  image,
  title,
  description,
  elevation,
  aosProps,
  style,
  cardClassName,
  imgClassName,
}: SectionCardProps) => {
  const classes = useStyles();

  return (
    <Card
      {...aosProps}
      elevation={elevation}
      className={clsx(classes.card, cardClassName)}
      style={style}
    >
      <LazyLoad height={250}>
        <CardMedia
          title={title}
          image={image}
          className={clsx(classes.cardImg, imgClassName)}
        />
      </LazyLoad>
      <CardContent className={classes.cardContent}>
        <Typography {...aosProps} align="center" variant="h6" gutterBottom>
          {title}
        </Typography>
        <Typography {...aosProps} align="center" component="p" gutterBottom>
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

SectionCard.defaultProps = {
  elevation: 0,
  aosProps: {
    'data-aos': 'fade-up',
    'data-aos-once': 'true',
  },
};

SectionCard.displayName = 'SectionCard';

export default SectionCard;
