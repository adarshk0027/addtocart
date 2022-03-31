
import React,{useContext} from "react";
import {AddToCartContext} from '../context'


function Card({name,Disc,img,ID}) {
  const {Add_To_Cart,Cart}=useContext(AddToCartContext) 
    console.log(name,Disc,img,Cart);
  let disable=false
  let Exist=Cart.find((item)=> item.id===ID)
  if(Exist){
    disable=true
  }
  return (
    <div>
      <div className="card" style={{width:"18rem" }}>
        <img src={img} className="card-img-top" alt=""  height={"300"}/>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">
            {Disc}
          </p>
          <button disabled={disable} onClick={()=>{
            Add_To_Cart({"Product":name,id:ID, qty:1})
            
          }} 
          
          className="btn btn-primary ">
            AddToCart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
