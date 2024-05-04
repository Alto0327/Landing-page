import brandLogo from '../../public/images/brand_logo.png';
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
            <button>Login</button>
        </nav>
    )
}

export default Nav