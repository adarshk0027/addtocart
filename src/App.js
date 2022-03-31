import "./App.css";
import NavBarWrapper from "./Components/NavBar/index";
import ProductList from "./Components/productList";
import ProductItems from "./Datas/Datas";
import My_Cart from "./Components/Cart";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import { AddToCartContext, CartProductContext } from "./Components/context";
function App() {
  //Set State For Cart Modal Open
  const [CartOpen, SetCartOpen] = useState(false);
  //Set State For Cart
  const [Cart, Set_Cart_State] = useState([]);
  
  //Function For CartOpen State Change To True
  function OpenCart() {
    SetCartOpen(true);
  }
  //Function for CartOpen State Change To False
  function CloseCart() {
    SetCartOpen(false);
  }
  //Function For AddToCart Function
  console.log(Cart);
  const Add_To_Cart = (item) => {
   const Exist= Cart.find((itemExist)=> itemExist.id==item.id )
   console.log(Exist)
    {!Exist ? 
      Set_Cart_State((oldProducts)=>(
      [...oldProducts,item]
    ))
  
    :console.log("itemExist");
  }
    
  };
  const OnAdd=(ProductID)=>{
    const ExistForAdd=Cart.find(item=>item.id===ProductID)
    if(ExistForAdd){
      Set_Cart_State(Cart.map((items)=>
      items.id==ProductID  ? {...ExistForAdd,qty:ExistForAdd.qty+1} : items
      ))
    }
  }
  const OnSub=(ProductID)=>{
    const ExistForSub=Cart.find(item=>item.id===ProductID)
    if(ExistForSub){
      Set_Cart_State(Cart.map((items)=>
      items.id==ProductID && items.qty !== 1 ? {...ExistForSub,qty:ExistForSub.qty-1} : items
      ))
    }
  }
  const OnDel=(ProductId)=>{
    Set_Cart_State(Cart.filter((item)=>item.id!== ProductId))
  }

  return (
    <div className="App">
      {/* NavBar SetUp */}
      <NavBarWrapper Open={OpenCart} cartS={Cart}></NavBarWrapper>

      {/* Use AddToCart Context For Get Function */}
      {/* Provide CartFunction Here */}
      <AddToCartContext.Provider value={{ Add_To_Cart,Cart }}>
        <ProductList data={ProductItems} name={"Fruit"}></ProductList>
        <ProductList data={ProductItems} name={"VEGITABLES"}></ProductList>
      </AddToCartContext.Provider>
      {/* Ends AddToCart Context */}
      {/* set Modal For Cart  */}
      <CartProductContext.Provider value={{Cart,OnAdd,OnSub,OnDel }}>
      <Modal show={CartOpen} onHide={CloseCart}>
        <Modal.Header closeButton>
          <Modal.Title>My Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <My_Cart cartProducts={Cart}></My_Cart>
        </Modal.Body>
      </Modal>
      </CartProductContext.Provider>
      {/* Modal Cart Ends */}
    </div>
  );
}

export default App;
