import Orange from '../Components/images/orange.jpg'
import waterMelon from '../Components/images/waterMelon.jpg'
import Grapes from '../Components/images/grapes.jpg'
import Tomato from '../Components/images/Tomato.jpg'
import Onion   from  '../Components/images/Onion.jpg' 
import Cucumber from '../Components/images/Cucumber.jpg'
const ProductItems={
    Fruit:
     [
       {id:1,
         Title: "Water Melon" ,
         Disc: "Its Red And Contains Full Of Water" ,
         img:waterMelon,
         Price:49 ,
       } , 
       {id:2,
        Title: "Orange" ,
        Disc: "Its Orange Color And Sweet " ,
        img:Orange,
        Price:30 ,
      } , 
      {id:3,
        Title: "Grapes" ,
        Disc: "Its Black  Color And more sweets " ,
        img:Grapes,
        Price:40 ,
      } 
      
       ],
       VEGITABLES:
       [
         {id:4,
          Title: "Tomato" ,
          Disc: "Its Red And Contains Full Of Water" ,
          img:Tomato,
          Price:49 ,
         },
         {id:5,
          Title: "Onion" ,
          Disc: "Its Red And Contains Full Of Water" ,
          img:Onion,
          Price:49 ,
         },
         {id:6,
          Title: "Kukumber" ,
          Disc: "Its Red And Contains Full Of Water" ,
          img:Cucumber,
          Price:49 ,
         }
       ]
         
     
    
}
export default ProductItems;