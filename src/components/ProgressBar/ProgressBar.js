import React from 'react';
import './styles/ProgressBar.scss'


const ProgressBar = ({color, completed, height, className, children, ...rest}) => {
  const style = {
    progress:{
      backgroundColor: color,
      width: completed + '%',
      height: height
    },
    container:{
      backgroundColor:'rgba(120,130,140,.13)'
    }
  };

  return (
    <div style={style.container} className={className} {...rest}>
      <div className="progressbar-progress" style={style.progress}>{children}</div>
    </div>
  );
};

ProgressBar.defaultProps = {
  completed: 0,
  color: '#cbb2ae',
  height: 4,
  className:'progressbar-container'
};

export default ProgressBar;