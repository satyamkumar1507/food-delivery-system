import { useState } from "react";
import ItemList from "./ItemList";

const RestaruantCategory = ({categoryData,showItems,setitemIndex}) => {

    

    //const [showItems,setshowItems] = useState(false);
    
    const handlerClick = () => {
        //setshowItems(!showItems);
        setitemIndex();
    }

    return(
        <div className="w-full p-5 shadow-lg bg-white">
         <div className="flex flex-row justify-between cursor-pointer "
           onClick={handlerClick}
         >
           <span className="font-extrabold">{categoryData.title} ({categoryData.itemCards.length})</span>
           <span>⬇️</span>
         </div>
            <div>
           {
            showItems &&  <ItemList items={categoryData.itemCards}/>
           }
            </div>
        </div>
    )
}

export default RestaruantCategory;