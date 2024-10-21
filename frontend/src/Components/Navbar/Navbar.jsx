import { useContext, useRef, useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cartIcon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
import nav_dropdown from '../Assets/dropdown_icon.png'

export const Navbar = () => {

    const [menu, setMenu] = useState("shop");
    const {getTotalCartItem} = useContext(ShopContext);

    const menuRef = useRef();

    const dropdown_toggle = (e) => {
           menuRef.current.classList.toggle('nav-menu-visible');
           e.target.classList.toggle('open')
    }
  return (
    <>
    <div className="navbar">
        <div className='nav-logo'>
            <img src={logo} alt="image" />
            <p>SHOPPER</p>
        </div>
        <img onClick={dropdown_toggle} src={nav_dropdown} className='navbar-dropdown' alt="" />
        <ul ref={menuRef} className="nav-menu">
            <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:'none', color:'black'}} to='/'>Shop</Link>{menu === "shop" ? <hr/> : <></>}</li>
            <li onClick={()=>{setMenu("mens")}}><Link style={{textDecoration:'none', color:'black'}} to='/mens'>Men</Link>{menu === "mens" ? <hr/> : <></>}</li>
            <li onClick={()=>{setMenu("womens")}}><Link style={{textDecoration:'none', color:'black'}} to='/womens'>Women</Link>{menu === "womens" ? <hr/> : <></>}</li>
            <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration:'none',color:'black'}} to='/kids'>Kids </Link>{menu === "kids" ? <hr/> : <></>}</li>
        </ul>
        <div className="nav-login-cart">
            {localStorage.getItem('auth-token') ? <button onClick={() => {localStorage.removeItem('auth-token'); window.location.replace('/')}}>Log out</button>
             : <Link to='/login'><button>Login</button></Link>}
            <Link to='/cart'><img src={cartIcon} alt="image" /></Link>
            <div className="nav-cart-count">{getTotalCartItem()}</div>
        </div>
    </div>
    <hr style={{width:'82%', margin:'auto'}} />
    </>
  )
}
