import { makeStyles } from '@material-ui/core';

const clipPath = {
  none: 'none',
  left: 'polygon(0 0, 100% 0, 100% 100%, 0 86%)',
  center: 'polygon(100% 0, 0 0, 0 86%, 50% 100%, 100% 86%)',
  right: 'polygon(0 0, 100% 0, 100% 86%, 0 100%)',
};

const gradient = (
  start: string,
  end: string,
  direction: string = '45deg',
  startPercentage: string = '0%',
  endPercentage: string = '100%'
) =>
  `linear-gradient(${direction}, ${start} ${startPercentage}, ${end} ${endPercentage})`;

export const useStyles = makeStyles((theme) => ({
  section: {
    background: (props: any) =>
      props.gradient && props.gradient.start && props.gradient.end
        ? gradient(
            props.gradient.start,
            props.gradient.end,
            props.gradient.direction,
            props.gradient.startPercentage,
            props.gradient.endPercentage
          )
        : gradient(theme.palette.primary.light, theme.palette.primary.dark),
    clipPath: (props: any) => clipPath[props.clip],
    height: (props: any) =>
      props.height ? props.height : 'calc(100vh - 16px)',
    display: 'flex',
    justifyContent: 'center',
    position: 'relative',
  },
  title: {
    color: theme.palette.common.white,
  },
  subtitle: {
    color: theme.palette.common.white,
  },
  titlesContainer: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    left: '50%',
    position: 'absolute',
    top: '50%',
    transform: 'translate(-50%, -50%)',
  },
}));
