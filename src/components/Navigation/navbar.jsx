import './navbar.css'

import DownArrow from '../../all-svgs/downArrow.svg'
import Cart from '../../all-svgs/cart.svg'
import Profile from '../../all-svgs/profile.svg'

export default function Navigation() {
    return (
        <div className="navbar-container">
            <div className="navbar-container-logo">
                <h2>Shop-Online</h2>
            </div>

            <div className="navbar-container-menu">
                <ul className="navbar-container-menu-list">
                    <ol>
                        <li>Categories <img src={DownArrow} width={15} height={14} /></li>

                    </ol>
                    <li>All Products</li>
                    <li>Filter</li>
                </ul>
            </div>
            <div className='navbar-container-profile'>
                <li>
                    <img src={Cart} />
                    <span>0</span>
                </li>
                <li>
                    <img src={Profile} width={19} />
                </li>

            </div>
        </div>
    )
}
