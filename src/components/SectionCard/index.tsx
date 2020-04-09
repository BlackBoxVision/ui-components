import React, { FunctionComponent } from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';

import { useStyles } from './styles';

export interface SectionCardProps {
  image: string;
  title: string;
  description: string;
  elevation?: number;
  aosProps?: any;
}

export const SectionCard: FunctionComponent<SectionCardProps> = ({
  image,
  title,
  description,
  elevation,
  aosProps,
}) => {
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
