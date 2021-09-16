import React, { FC } from 'react';
import clsx from 'clsx';
import { Card, CardActions, Link, Typography } from '@material-ui/core';
import {
  faCircle,
  faStar,
  faCodeBranch,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
export interface RepoCardProps {
  /**
   * User and name of the repository
   */
  name: string;
  /**
   * Description of repository
   */
  description: string;
  /**
   * URL to repository
   */
  url: string;
  /**
   * Amount of repository stars
   */
  stars: number;
  /**
   * Amount of repository forks
   */
  forks: number;
  /**
   * Name of the main language used on the repository
   */
  languageName: string;
  /**
   * The main color of repository language
   */
  languageColor: string;
  /**
   * Custom ClassNames for the RepoCard
   */
  className: string;
  /**
   * Material UI color
   */
  color?: 'inherit' | 'primary' | 'secondary';
  /**
   * AOS properties for animation configuration
   */
  aosProps?: AosProps;
}

export const RepoCard: FC<RepoCardProps> = ({
  name,
  description,
  url,
  stars,
  forks,
  languageName,
  languageColor,
  aosProps,
  className,
  color = 'secondary'
}: RepoCardProps) => {
  const classes = useStyles();

  return (
    <Link
      {...aosProps}
      href={url}
      rel="noopener noreferrer"
      target="_blank"
      underline="none"
    >
      <Card elevation={0} className={clsx(classes.card, className)}>
        <div>
          <Typography
            className={classes.title}
            variant="subtitle1"
            color={color}
            component="h2"
            gutterBottom
          >
            {name}
          </Typography>
          <Typography
            className={classes.description}
            color={color}
            variant="body1"
          >
            {description}
          </Typography>
        </div>
        <CardActions>
          <div className={classes.infoContainer}>
            <FontAwesomeIcon size="1x" icon={faCircle} color={languageColor} />
            <Typography color={color} className={classes.info}>
              {languageName}
            </Typography>
          </div>
          <Link
            href={`${url}/stargazers`}
            rel="noopener noreferrer"
            target="_blank"
            color={color}
            className={classes.infoContainer}
          >
            <FontAwesomeIcon size="1x" icon={faStar} color={languageColor} />
            <Typography color={color} className={classes.info}>
              {stars}
            </Typography>
          </Link>
          <Link
            href={`${url}/network`}
            rel="noopener noreferrer"
            target="_blank"
            color={color}
            className={classes.infoContainer}
          >
            <FontAwesomeIcon
              size="1x"
              icon={faCodeBranch}
              color={languageColor}
            />
            <Typography color={color} className={classes.info}>
              {forks}
            </Typography>
          </Link>
        </CardActions>
      </Card>
    </Link>
  );
};

RepoCard.defaultProps = {
  aosProps: {
    'data-aos': 'fade-up',
    'data-aos-once': 'true',
  },
};

RepoCard.displayName = 'RepoCard';

export default RepoCard;
