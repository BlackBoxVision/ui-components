import React, { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Fab } from '@material-ui/core';

import { useStyles } from './styles';

export interface SocialProps {
  /**
   * String that represents the social network's name
   */
  name: string;
  /**
   * URL for the social network profile you want to refer
   */
  to: string;
  /**
   * Icon related to the social network
   */
  Icon: IconDefinition;
  /**
   * Background color for the social network
   */
  background: string;
  /**
   * Container Fab button size
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Fontawesome icon size
   */
  iconSize?:
    | '2x'
    | 'xs'
    | 'lg'
    | 'sm'
    | '1x'
    | '3x'
    | '4x'
    | '5x'
    | '6x'
    | '7x'
    | '8x'
    | '9x'
    | '10x'
    | undefined;
}

export const Social: FC<SocialProps> = ({
  background,
  to,
  Icon,
  size,
  iconSize,
}: SocialProps) => {
  const classes = useStyles({ background });

  return (
    <a href={to} target="_blank" rel="noopener noreferrer">
      <Fab size={size} className={classes.social}>
        <FontAwesomeIcon size={iconSize} icon={Icon} />
      </Fab>
    </a>
  );
};

Social.defaultProps = {
  name: 'linkedin',
  to: 'https://www.linkedin.com/company/blackbox-vision/',
  Icon: faLinkedin,
  background: 'rgb(0, 119, 181)',
  size: 'medium',
  iconSize: '2x',
};

Social.displayName = 'Social';

export default Social;
