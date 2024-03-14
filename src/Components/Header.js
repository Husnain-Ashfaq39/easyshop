import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom'
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
function Header() {
    const [{ Cart, user }, dispatch] = useStateValue()
    const handleAuthentication = () => {
        if (user) {
            auth.signOut()
        }
    }


    return (
        <div className='header'>
            {/* Logo */}
            <Link to='/'>

                <img className='header_logo' alt='Logo' src='logo.png' />
            </Link>
            {/* Search Bar */}
            {/*  */}

            <div className="header_search">
                <input type="text" className='header_search_input' />
                <SearchIcon className='header_searchIcon' />
            </div>
            {/* Header Navigation */}

            <div className="header_nav">
                <Link to={!user && '/login'}>
                    <div onClick={handleAuthentication} className="header_option">
                        <span className='header_optionLineOne'>Hello {!user ? 'Guest' : user.email}</span>
                        <span className='header_optionLineTwo'>{user ? 'Sign Out' : 'Sign In'}</span>

                    </div>
                </Link>
                <div className="header_option">
                    <span className='header_optionLineOne'>Returns</span>
                    <span className='header_optionLineTwo'>& Orders</span>

                </div>
                <div className="header_option">
                    <span className='header_optionLineOne'>Your</span>
                    <span className='header_optionLineTwo'>Shop</span>
                </div>
                <Link to='/checkout'>

                    <div className="header_optionBasket">
                        <ShoppingBasketIcon />
                        <span className='header_optionLineTwo header_optionBasketCount'>{Cart.length}</span>
                    </div>
                </Link>
            </div>

        </div>

    )

}
export default Header