import React, { Component } from 'react';
import PropTypes from 'prop-types';
import modules from './AspectRatioBox.module.scss';

class AspectRatioBox extends Component {
  render() {
    const { ar, aspectRatio, children, className, resize, resizeable, style, width, ...props } = this.props;

    let classes = (typeof className === 'string') ? className.split(' ') : [];
    classes.push(`${modules.aspectRatioBox}`);
    let styles = { ...style }

    styles.width = width ? width : '100%';

    let ratio = aspectRatio || ar;
    styles['--aspect-ratio'] = (ratio.length > 0) ? ratio : '1';

    return (
      <div {...props} className={classes.join(' ')} style={styles}>
        {(resize || resizeable) ? (children) : (
          <div className={`${modules.aspectRatioBoxAbsolute}`}>
            <div className={`${modules.aspectRatioBoxRelative}`}>
              {children}
            </div>
          </div>
        )}
      </div>
    );
  }
}

AspectRatioBox.propTypes = {
  ar: PropTypes.string,
  aspectRatio: PropTypes.string,
  resize: PropTypes.bool,
  resizeable: PropTypes.bool,
  width: PropTypes.string,
}

AspectRatioBox.defaultProps = {
  ar: '',
  aspectRatio: '',
  resize: false,
  resizeable: false,
  width: '100%',
}

export default AspectRatioBox;