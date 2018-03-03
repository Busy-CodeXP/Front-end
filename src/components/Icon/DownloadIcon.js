import React from 'react';

const DownloadIcon = ({ fill, height,width }) => {
  const styles = {
    svg: {
      fill,
      height,
      width
    }
  };

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={styles.svg}>
      <path d="M382.56 233.376A15.96 15.96 0 0 0 368 224h-64V16c0-8.832-7.168-16-16-16h-64c-8.832 0-16 7.168-16 16v208h-64a16.013 16.013 0 0 0-14.56 9.376c-2.624 5.728-1.6 12.416 2.528 17.152l112 128A15.946 15.946 0 0 0 256 384c4.608 0 8.992-2.016 12.032-5.472l112-128c4.16-4.704 5.12-11.424 2.528-17.152z"/>
      <path d="M432 352v96H80v-96H16v128c0 17.696 14.336 32 32 32h416c17.696 0 32-14.304 32-32V352h-64z"/>
    </svg>
  );
};

DownloadIcon.defaultProps = {
  fill: '#000',
  height: '14px',
  width: '14px'
};

export default DownloadIcon;