import * as React from 'react'
import { Routes, Route, NavLink } from 'react-router-dom'
import NoPage from './NoPage'
const Home = React.lazy(() => import('./Home'))
const Product = React.lazy(() => import('./Product'))
const App = () => {
  return (
    <div className="container mt-5">
      <h2 className="mb-3">React Lazy Loading Routes Example</h2>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/product">Product</NavLink>
      </nav>
      <Routes>
        <Route
          index
          element={
            <React.Suspense fallback={<>Loading...</>}>
              <Home />
            </React.Suspense>
          }
        />
        <Route
          path="product"
          element={
            <React.Suspense fallback={<>Loading...</>}>
              <Product />
            </React.Suspense>
          }
        />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </div>
  )
}
export default App