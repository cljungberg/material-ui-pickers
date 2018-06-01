import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';

class WeekNumber extends PureComponent {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    children: PropTypes.node,
  }

  static defaultProps = {
    children: null,
  }

  render() {
    const {
      children, classes, ...other
    } = this.props;

    const className = classnames(classes.week);

    return (
      <Typography
        variant="caption"
        className={className}
        {...other}
      >
        <span> {children} </span>
      </Typography>
    );
  }
}

const styles = theme => ({
  week: {
    width: 36,
    height: 36,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: theme.typography.caption.fontSize,
    margin: '0 2px',
    fontWeight: theme.typography.fontWeightMedium,
  },
});

export default withStyles(styles, { name: 'MuiPickersDay' })(WeekNumber);
