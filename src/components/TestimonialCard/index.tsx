import React, { FC } from 'react';
import clsx from 'clsx';
import {
  Avatar,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Typography,
} from '@material-ui/core';

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

export interface TestimonialCardProps {
  /**
   * URL for an Image to load in Avatar
   */
  personImg: string;
  /**
   * Full Name of testimonial person
   */
  personName: string;
  /**
   * Charge of testimonial person
   */
  personCharge: string;
  /**
   * Company logo
   */
  companyLogo: string;
  /**
   *The testimonial text
   */
  testimonial: string;
  /**
   * Box Shadow for the TestimonialCard
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
   * ClassName applied to Avatar component
   */
  avatarClassName?: string;
}

export const TestimonialCard: FC<TestimonialCardProps> = ({
  personImg,
  personName,
  personCharge,
  companyLogo,
  testimonial,
  elevation,
  aosProps,
  background,
  style,
  cardClassName,
  avatarClassName,
}: TestimonialCardProps) => {
  const classes = useStyles({ background });

  return (
    <Card
      {...aosProps}
      elevation={elevation}
      className={clsx(classes.card, cardClassName)}
      style={style}
    >
      <CardHeader
        avatar={
          <Avatar
            alt={personName}
            aria-label="author"
            src={personImg}
            className={clsx(classes.avatar, avatarClassName)}
          />
        }
        subheader={
          <>
            <Typography align="left" className={classes.personName}>
              {personName}
            </Typography>
            <Typography align="left" className={classes.personCharge}>
              {personCharge}
            </Typography>
          </>
        }
      />
      <CardContent className={classes.cardContent}>
        <Typography
          variant="body2"
          component="p"
          className={classes.testimonial}
        >
          {`"${testimonial}"`}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <img
          alt="company logo"
          src={companyLogo}
          className={classes.companyLogo}
        />
      </CardActions>
    </Card>
  );
};

TestimonialCard.defaultProps = {
  elevation: 6,
  aosProps: {
    'data-aos': 'fade-up',
    'data-aos-once': 'true',
  },
};

TestimonialCard.displayName = 'TestimonialCard';

export default TestimonialCard;
