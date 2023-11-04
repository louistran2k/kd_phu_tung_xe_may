import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import { customerRoutes } from 'routes/customer';
import { Loading } from 'common/components';
const Customer = lazy(() => import('pages'));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Customer />}>
            {customerRoutes.map(({ path, Component }, index) => (
              <Route
                key={index}
                path={path}
                element={
                  <Suspense fallback={<Loading />}>
                    <Component />
                  </Suspense>
                }
              />
            ))}
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
