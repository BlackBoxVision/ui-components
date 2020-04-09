import React, { FunctionComponent } from 'react';
import { Container, Typography } from '@material-ui/core';
import {
  faFacebookF,
  faGithub,
  faLinkedin,
  faTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

import Social, { SocialProps } from './Social';
import { useStyles } from './styles';

export interface FooterProps {
  copyright: string;
  children?: any;
  social?: Array<SocialProps>;
  LanguageButtons?: any;
}

export const Footer: FunctionComponent<FooterProps> = ({
  social,
  copyright,
  LanguageButtons,
}) => {
  const classes = useStyles();
  return (
    <Container component="footer" className={classes.container}>
      <div className={classes.socialContainer}>
        {social &&
          social.map(({ key, slug, Icon, background }) => (
            <Social key={key} slug={slug} Icon={Icon} background={background} />
          ))}
      </div>
      <Typography align="center" variant="subtitle2">
        {copyright}
      </Typography>
      {LanguageButtons && LanguageButtons}
    </Container>
  );
};

Footer.defaultProps = {
  social: [
    {
      key: 'facebook',
      slug: 'https://www.facebook.com/BlackBoxVision',
      Icon: faFacebookF,
      background: 'rgb(63, 81, 181)',
    },
    {
      key: 'twitter',
      slug: 'https://twitter.com/blackbox_vision',
      Icon: faTwitter,
      background: 'rgb(33, 150, 243)',
    },
    {
      key: 'github',
      slug: 'https://github.com/BlackBoxVision',
      Icon: faGithub,
      background: '#000',
    },
    {
      key: 'linkedin',
      slug: 'https://www.linkedin.com/company/blackbox-vision/',
      Icon: faLinkedin,
      background: 'rgb(0, 119, 181)',
    },
    {
      key: 'instagram',
      slug: 'https://www.instagram.com/blackbox_vision/?hl=en',
      Icon: faInstagram,
      background:
        'linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)',
    },
  ],
};

Footer.displayName = 'Footer';

export default Footer;
