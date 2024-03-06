import {useSelector,useDispatch} from 'react-redux';
import { addToCart } from '../Slices/CartSlice';
const Products=()=>{
    const item=useSelector(state=>state.productData.items);
    const dispatch=useDispatch();
    return(

        <>
      
        {item.map((items,index)=>(
        <div key={index} className='w3-card-4 w3-margin w3-container w3-padding w3-aqua'>

            <div className='w3-card-4 '>
         
                <img className="w3-card-4 w3-container w3-padding w3-margin w3-left" src={items.imageUrl} alt='Loading' />
                <div className='w3-card-4 w3-padding w3-half w3-right w3-pale-blue' >
                    <h3>{items.name}</h3>
                    <div className='w3-container'>
                    {items.description}
                    </div>
                    <h4>Price: { items.price} </h4>
                    <button className='w3-button w3-red' onClick={()=>dispatch(addToCart(items))}>Add To Cart</button>
                </div>
                
          
            </div>
            
        </div>
        
          ))}
        
      
      
    </>
    );
}
export default Products;