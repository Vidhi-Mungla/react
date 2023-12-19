import React, { Suspense } from 'react';
import './App.css';
import Loader from './Loader';

// const Loader =React.lazy(()=>import('./Loader'))


const OtherComponent = React.lazy(() => {
  // Using Promise + setTimeout to simulate a longer delay,
  // normally we just return the import
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(import('./OtherComponent'));
    }, 1000);
  });
});


const OtherComponent1 = React.lazy(() => {
  // Using Promise + setTimeout to simulate a longer delay,
  // normally we just return the import
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(import('./OtherComponent1'));
    }, 1000);
  });
});

const App = () => {
  return (
    <div className="App">
      <Suspense fallback={<Loader/>}>
        <OtherComponent />
        <OtherComponent1/>
      </Suspense>
    </div>
  );
};

export default App;