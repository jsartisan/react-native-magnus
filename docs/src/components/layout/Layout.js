import React from 'react';

import Footer from './Footer';

const Layout = ({ children, type }) => {
  return (
    <div className={`root antialiased font-nunito ${type}`}>
      <div style={{ paddingTop: 'calc(70px)' }}>
        <>{children}</>
      </div>
      {type === 'docs' ? <></> : <Footer />}
    </div>
  );
};

export default Layout;
