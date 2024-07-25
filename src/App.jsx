import React from 'react'
import NavigationBar from './components/navigation_bar/navigation_bar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import OrderService from './pages/OrderService/OrderService'
import Footer from './components/Footer/Footer'
import Login from './components/Login/Login'
import Verify from './pages/Verify/Verify'
import MyOrders from './pages/MyOrders/MyOrders'

const App = () => {

  const [showLogin, setShowLogin] = React.useState(false)

  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {showLogin ? <Login setShowLogin={setShowLogin} /> : <></>}

      <div className='app'>
      {/* <div><p>This is my app</p></div> */}
        <NavigationBar setShowLogin={setShowLogin} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<OrderService />} />
          <Route path="/verify" element={<Verify />} />
          <Route path="/myorders" element={<MyOrders />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App