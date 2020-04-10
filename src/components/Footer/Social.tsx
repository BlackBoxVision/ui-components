import React, { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { Fab } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

export interface SocialProps {
  /**
   * String that represents the social network's name
   */
  key: string;
  /**
   * URL for the social network profile you want to refer
   */
  slug: string;
  /**
   * Icon related to the social network
   */
  Icon: IconDefinition;
  /**
   * Background color for the social network
   */
  background: string;
}

const useStyles = makeStyles((theme) => ({
  social: {
    color: theme.palette.common.white,
    background: (props: any) => props.background,
    cursor: 'pointer',
    '&:active, &:hover': {
      background: (props: any) => props.background,
      boxShadow:
        '0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12)',
      transform: 'translate3d(0, -5px, 0)',
    },
    margin: 4,
    height: 50,
    textDecoration: 'none',
    transition: 'all 250ms ease-out',
    width: 50,
  },
}));

const Social: FC<SocialProps> = ({ background, slug, Icon }: SocialProps) => {
  const classes = useStyles({ background });

  return (
    <a href={slug} target="_blank" rel="noopener noreferrer">
      <Fab size="medium" className={classes.social}>
        <FontAwesomeIcon size="2x" icon={Icon} />
      </Fab>
    </a>
  );
};

export default Social;
