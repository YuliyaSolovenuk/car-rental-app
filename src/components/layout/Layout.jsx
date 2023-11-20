import { Outlet } from 'react-router-dom';
import Header from '../header/Header';
import { Suspense } from 'react';

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;