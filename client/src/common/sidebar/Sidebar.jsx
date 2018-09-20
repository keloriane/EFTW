import React from 'react';
import PropTypes from 'prop-types';

function Sidebar({ currentPage, bgImage}) {
  const styles = {
    sidebar: {
      height: '100vh',
      background:`linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url(${bgImage})`,
      backgroundSize:'cover',
      backgroundRepeat  : 'no-repeat'
    }
  }
  return (
     <div style={styles.sidebar} className="side_bar__container">
        <div className="page_title__item">
            {currentPage}
        </div>
      </div>
  );
}

Sidebar.propTypes = {
  currentPage: PropTypes.string,
  bgImage: PropTypes.string.isRequired
};

export default Sidebar;