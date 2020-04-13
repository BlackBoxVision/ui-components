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

export interface PostCardProps {
  /**
   * Title to show in PostCard
   */
  title: string;
  /**
   * URL for an Image to load in PostCard
   */
  image: string;
  /**
   * Date of the post
   */
  date: string;
  /**
   * The excerpt (description) of post
   */
  excerpt: string;
  /**
   * Box Shadow for the PostCard
   */
  elevation?: number;
  /**
   * AOS properties for animation configuration
   */
  aosProps?: AosProps;
}

export const PostCard: FC<PostCardProps> = ({
  title,
  image,
  date,
  excerpt,
  elevation,
  aosProps,
}: PostCardProps) => {
  const classes = useStyles({ image });

  return (
    <Card {...aosProps} elevation={elevation} className={classes.card}>
      <CardContent>
        <Typography
          align="left"
          variant="subtitle2"
          className={classes.cardText}
        >
          {date}
        </Typography>
        <Typography
          align="left"
          variant="h6"
          className={classes.cardText}
          gutterBottom
        >
          {title}
        </Typography>
        <Typography
          align="left"
          component="p"
          className={classes.cardText}
          gutterBottom
        >
          {excerpt}
        </Typography>
      </CardContent>
    </Card>
  );
};

PostCard.defaultProps = {
  elevation: 0,
  aosProps: {
    'data-aos': 'fade-up',
    'data-aos-once': 'true',
  },
};

PostCard.displayName = 'PostCard';

export default PostCard;
