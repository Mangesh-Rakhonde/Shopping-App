import {Link,Outlet} from 'react-router-dom';
const Nav=()=>{
    return(
        <div className="w3-bar w3-black">
            <Link to="/" className="w3-bar-item w3-button w3-mobile">Home</Link>
            <Link to="#" className="w3-bar-item w3-button w3-mobile">Link 1</Link>
            
            <Link to="/cart-items" className="w3-bar-item w3-button w3-right w3-mobile">Cart Items</Link>
            <Outlet />
           
        </div>
    );
}
export default Nav;