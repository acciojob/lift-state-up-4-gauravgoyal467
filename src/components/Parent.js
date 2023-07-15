import React,{useState} from "react";
import Child from "./Child"

const Parent = () => {
  const [cartItems,setCartItems]=useState([]);
  const [item,setItem]=useState("");
  const [price,setPrice]=useState("");

  console.log(cartItems);

  function addCart(){
    let selectedItem={
      product : item,
      cost :price
    }
    setCartItems([...cartItems,selectedItem]);
    setItem("");
    setPrice("");
  }
  
  return (
    <div className="parent">
      <h1>Parent Component</h1>
      <label htmlFor="itemName"> Item Name:</label>
      <input id="itemName" type="text" value={item} onChange={(e)=>setItem(e.target.value.trim())} />
      <label htmlFor="itemPrice"> Item Price:</label>
      <input id="itemPrice" type="number" value={price} onChange={(e)=>setPrice(e.target.value.trim())}/>
      <button onClick={addCart}>Add item</button>
      <Child cartItems={cartItems} setCartItems={setCartItems}/>
    </div>
  )
}

export default Parent
