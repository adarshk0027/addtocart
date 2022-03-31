import React,{useContext} from "react";
import Card from "../card";

function ProductList({ data, name }) {
    
  return (
    <div>
      <div>
        <h4>{name}</h4>
        <div className="Images d-flex">
        {
            data[name] ? 
            data[name].map((item,pos)=>{
                return <Card key={pos} name={item.Title} Disc={item.Disc} img={item.img} ID={item.id}></Card>
            })

            :""
                        
        }
        </div> 
        
      </div>
    </div>
  );
}

export default ProductList;
