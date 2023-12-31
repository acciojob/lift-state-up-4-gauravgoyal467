import React from "react";

const Child = ({cartItems,setCartItems}) => {
 
  const removeItem=(index)=>{
  const updatedItems = [...cartItems];
  updatedItems.splice(index, 1);
  setCartItems(updatedItems);
  }
   
  return (
    <>
    <h2>Child Component</h2> 
    <div className="child">
        <ul>
        {cartItems &&
          cartItems.map((element,index)=>{
            return(
            <li key={index}>
              {element.product} - ${element.cost}
              <button onClick={()=>removeItem(index)}>Remove</button>
            </li>
          )})
        }
        </ul>
    </div>
    </>
        
  )
}

export default Child