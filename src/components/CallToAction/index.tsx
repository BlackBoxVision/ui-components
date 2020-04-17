import React, { FC } from 'react';
import { Button, ButtonProps } from '@material-ui/core';

import { useStyles } from './styles';

export interface CallToActionProps extends ButtonProps {
  /**
   * Color for the CTA animation
   */
  ctaColor?: string;
}

export const CallToAction: FC<CallToActionProps> = ({
  ctaColor,
  children,
  ...props
}: CallToActionProps) => {
  const classes = useStyles({ ctaColor });

  return (
    <Button
      variant="contained"
      color="primary"
      {...props}
      className={classes.cta}
    >
      {children}
    </Button>
  );
};

CallToAction.displayName = 'CallToAction';

export default CallToAction;
