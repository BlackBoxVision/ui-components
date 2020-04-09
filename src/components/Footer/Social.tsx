import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { Fab } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

export interface SocialProps {
  key: string;
  slug: string;
  Icon: IconDefinition;
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

const Social = ({ background, slug, Icon }: SocialProps) => {
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
