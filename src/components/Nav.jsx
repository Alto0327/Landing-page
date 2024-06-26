import brandLogo from '../assets/brand_logo.png';
import './component.css'


function Nav(){
    return(
        <nav className='nav container'>
            <div className='logo'>
                <img src={brandLogo} alt="Logo" className='logo_icon'/>
            </div>
            <ul className='nav-link-container'>
                <li href='#'>Home</li>
                <li href='#'>Backpacks</li>
                <li href='#'>About Us</li>
                <li href='#'>Contact</li>
            </ul> 
             {/* Add a cart icon that has number on top that indicates how many items are in the cart
             or maybe make it so you have to create an account to add an item to your cart*/}

            <button>Login</button>
        </nav>
    )
}

export default Nav