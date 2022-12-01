import {Link} from 'react-router-dom'
import './Header.css'
const Header=()=>{
return(
    
         <nav className='nav-container'>
            <div>
                <img src="https://business.amazon.in/assets/global/images/logo/ab-logo-white.svg" alt="business" className='photo-2'/>
            </div>
            <ul className='list-container'>
                <li className='list-items'>
                    <Link to='/' className='nav-items'>Home</Link>
                </li>
                <li className='list-items'>
                    <Link to='/products' className='nav-items'>Products</Link>
                </li>
                <li className='list-items'>
                    <Link to='/' className='nav-items'>Faqs</Link>
                </li>
                
                
            </ul>
            
            
        </nav>
        
)
}
export default Header