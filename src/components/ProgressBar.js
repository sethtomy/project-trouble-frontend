import { lighten, withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const BorderLinearProgress = withStyles({
    root: {
      height: 25,
      backgroundColor: lighten('#ff6c5c', 0.5),
    },
    bar: {
      borderRadius: 40,
      backgroundColor: '#ff6c5c',
    },
})(LinearProgress);

export default BorderLinearProgress;