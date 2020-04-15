import React, { FC } from 'react';
import clsx from 'clsx';
import {
  Button,
  Card,
  CardContent,
  CardActions,
  Typography,
} from '@material-ui/core';

import { Hero } from '../Hero';
import { useStyles } from './styles';

export interface NotFoundCardProps {
  /**
   *  String used to indicate where to apply the particles effect
   */
  id?: string;
  /**
   *  URL where the user will be redirected when clicking the button
   */
  to: string;
  /**
   *  The component used by the button
   */
  component: any;
  /**
   * The error image to display inside of the card
   */
  image: string;
  /**
   * Error message to display inside of the card
   */
  message: string;
  /**
   * Button Label
   */
  btnLabel: string;
  /**
   * Button Label
   */
  className?: string;
}

export const NotFoundCard: FC<NotFoundCardProps> = ({
  id,
  component,
  to,
  image,
  message,
  btnLabel,
  className,
}: NotFoundCardProps) => {
  const classes = useStyles();

  return (
    <Hero id={id} clip="none">
      <Card className={clsx(classes.card, className)}>
        <CardContent>
          <img alt="404 not found" src={image} className={classes.cardImg} />
          <Typography align="center" variant="h6" component="h2" gutterBottom>
            {message}
          </Typography>
          <CardActions className={classes.cardActions}>
            <Button
              color="primary"
              align="center"
              variant="outlined"
              component={component}
              to={to}
            >
              {btnLabel}
            </Button>
          </CardActions>
        </CardContent>
      </Card>
    </Hero>
  );
};

NotFoundCard.defaultProps = {
  to: '/',
};

NotFoundCard.displayName = 'NotFoundCard';

export default NotFoundCard;
