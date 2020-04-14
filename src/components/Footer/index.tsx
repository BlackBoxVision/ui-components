import React, { FC, ReactNode } from 'react';
import { Typography } from '@material-ui/core';
import {
  faFacebookF,
  faGithub,
  faLinkedin,
  faTwitter,
  faInstagram,
  IconDefinition,
} from '@fortawesome/free-brands-svg-icons';

import Social from '../Social';
import { useStyles } from './styles';

interface SocialItemProps {
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

export interface FooterProps {
  /**
   * String that represents the enterprise copyright
   */
  copyright: string;
  /**
   * Array for showing social links
   */
  social?: SocialItemProps[];
  /**
   * React children components
   */
  children?: ReactNode;
  /**
   * React component for showing language chooser
   */
  LanguageButtons?: ReactNode;
}

export const Footer: FC<FooterProps> = ({
  copyright,
  children,
  social,
  LanguageButtons,
}: FooterProps) => {
  const classes = useStyles();

  return (
    <footer className={classes.container}>
      {children}
      <div className={classes.socialContainer}>
        {social &&
          social.map((item, idx) => <Social key={`social_${idx}`} {...item} />)}
      </div>
      <Typography align="center" variant="subtitle2">
        {copyright}
      </Typography>
      {LanguageButtons && LanguageButtons}
    </footer>
  );
};

Footer.defaultProps = {
  social: [
    {
      name: 'facebook',
      to: 'https://www.facebook.com/BlackBoxVision',
      Icon: faFacebookF,
      background: 'rgb(63, 81, 181)',
    },
    {
      name: 'twitter',
      to: 'https://twitter.com/blackbox_vision',
      Icon: faTwitter,
      background: 'rgb(33, 150, 243)',
    },
    {
      name: 'github',
      to: 'https://github.com/BlackBoxVision',
      Icon: faGithub,
      background: '#000',
    },
    {
      name: 'linkedin',
      to: 'https://www.linkedin.com/company/blackbox-vision/',
      Icon: faLinkedin,
      background: 'rgb(0, 119, 181)',
    },
    {
      name: 'instagram',
      to: 'https://www.instagram.com/blackbox_vision/?hl=en',
      Icon: faInstagram,
      background:
        'linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)',
    },
  ],
};

Footer.displayName = 'Footer';

export default Footer;
