import React, { FC } from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';

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
}

export const SectionCard: FC<SectionCardProps> = ({
  image,
  title,
  description,
  elevation,
  aosProps,
}: SectionCardProps) => {
  const classes = useStyles();

  return (
    <Card {...aosProps} elevation={elevation} className={classes.card}>
      <CardContent className={classes.cardContent}>
        <img
          className={classes.cardImg}
          alt={image}
          src={image}
          title={title}
        />
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
