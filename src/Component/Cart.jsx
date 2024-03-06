import { useSelector ,useDispatch} from "react-redux";
const Cart=()=>{
    const cartItem=useSelector(state=>state.productData.cart);
    const dispatch=useDispatch();
   // console.log(cartItem);
    
    return(
        <>
        <div className='w3-card-4 w3-margin w3-container w3-padding w3-pale-green'>
        <h2>Cart Details</h2><br /><br/>
        {cartItem.map((item,index)=>(

        <div key={index} className='w3-card-4 w3-margin w3-container w3-padding w3-aqua'>
            
            <div className='w3-card-4 '>

                <img className="w3-card-4 w3-container w3-padding w3-margin w3-left" src={item.imageUrl} alt='Loading' />
                    <div className='w3-card-4 w3-padding w3-half w3-right w3-pale-blue' >
                <h3>{item.name}</h3>
                    <div className='w3-container'>
                    {item.description}
                    </div>
                <h4>Price: { item.price} </h4>
                <button className='w3-button w3-red' onClick={()=>dispatch()}>Buy</button>
                </div>
            </div>
        </div>
                ))}
                
                </div>
                

        </>
    );
}
export default Cart;