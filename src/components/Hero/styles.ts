import { makeStyles } from '@material-ui/core';

const clipPath = {
  none: 'none',
  left: 'polygon(0 0, 100% 0, 100% 100%, 0 86%)',
  center: 'polygon(100% 0, 0 0, 0 86%, 50% 100%, 100% 86%)',
  right: 'polygon(0 0, 100% 0, 100% 86%, 0 100%)',
};

export const useStyles = makeStyles((theme) => ({
  section: {
    background: `linear-gradient(45deg, ${theme.palette.primary.light} 0%, ${theme.palette.primary.dark} 100%)`,
    clipPath: (props: any) => clipPath[props.clip],
    display: 'flex',
    justifyContent: 'center',
    height: 'calc(100vh - 16px)',
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
