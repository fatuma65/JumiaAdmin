
import {Route, Routes} from 'react-router-dom'
import Product from './routes/product'
import Home from './routes/Home'
import Cart from './routes/Cart'
import Categories from './routes/categories'
import DetailsProducts from './routes/productDetails'
import Login from './routes/login'
import {AuthProvider} from './components/AuthContext'
import ProductListPage from './routes/productListPage'
function App() {
  return (
    <>
     <AuthProvider>
      <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/category' element={<Categories />}></Route>
          <Route path='/product/details/:id' element={<DetailsProducts/>}></Route>
        
          <Route path='/product' element={<Product />}></Route>
          <Route path='/products' element={<ProductListPage/>}></Route>
          <Route path='/cart/:UserId' element={<Cart />}></Route>
      
          <Route path='/login' element={<Login />}></Route>
      </Routes>
      </AuthProvider>

    </>
  )
}

export default App
