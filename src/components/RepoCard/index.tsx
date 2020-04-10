import React, { FunctionComponent } from 'react';
import { Card, Link, Typography } from '@material-ui/core';
import {
  faCircle,
  // faCodeBranch,
  // faStar,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useStyles } from './styles';

export interface RepoCardProps {
  repository?: any;
  aosProps?: any;
}

export const RepoCard: FunctionComponent<RepoCardProps> = ({
  repository,
  aosProps,
}) => {
  const classes = useStyles();
  return (
    <Link
      {...aosProps}
      href={repository.url}
      rel="noopener noreferrer"
      target="_blank"
      underline="none"
    >
      <Card className={classes.card}>
        <div>
          <Typography variant="h6" gutterBottom>
            {repository.nameWithOwner}
          </Typography>
          <Typography>{repository.description}</Typography>
        </div>
        <div className={classes.infoContainer}>
          <FontAwesomeIcon
            size="1x"
            icon={faCircle}
            color={repository.primaryLanguage.color}
          />
          <Typography className={classes.info}>
            {repository.primaryLanguage.name}
          </Typography>
        </div>
      </Card>
    </Link>
  );
};

RepoCard.defaultProps = {
  repository: {},
  aosProps: {
    'data-aos': 'fade-up',
    'data-aos-once': 'true',
  },
};

RepoCard.displayName = 'RepoCard';

export default RepoCard;
