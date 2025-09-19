//import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
//import { MENU_API_URL } from "../utils/constants";
//import { CDN_URL } from "../utils/constants";
import useRestaruntMenu from "../utils/useRestaruntMenu";
import RestaruantCategory from "./RestaruantCategory";
import { useState } from "react";

const RestaruntMenu = () => {

    // const [resInfo,setresInfo] = useState(null);
    // const [resMenuList,setresMenuList] = useState(null);
    
    const {resId} = useParams();

    const [resInfo,categories] = useRestaruntMenu(resId);

    const [itemIndex,setitemIndex] = useState(0);
    //console.log("ghaskfjasfCategory",categories);

//    useEffect(() => {
//       fetchMenu();
//    },[]);
     
//     const fetchMenu = async () => {
        
//         const response = await fetch(MENU_API_URL + resId);
//         const data = await response.json();
//         const resMenu = data?.data?.cards[2]?.card?.card?.info;
//         setresInfo(resMenu);
//         console.log("dataMenu",data);
//         const itemCard = data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
//         setresMenuList(itemCard);
//          console.log("menuList",itemCard);
//     }  

    if(resInfo == null) return <Shimmer/>

    const {
     name,
     cuisines,
     costForTwoMessage,
     avgRating,
     sla
    }
     = resInfo;

     

      //const Itemcategory = categories.filter((c) => c.card?.card?.['@type'] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
     
    return(
        <div className="w-full flex flex-col mt-35">
            
        <div className="w-[900px] flex flex-col  mx-auto shadow-2xl p-3">
           <h1 className="text-2xl font-bold">{name}</h1>
           <h2>⭐{avgRating}  {costForTwoMessage}</h2>
           <h2>{cuisines.join(",")}</h2>
           <h2>Outlet</h2>
           <h2>{sla?.deliveryTime} minutes</h2>
        </div>

         <div className="w-[900px] flex flex-col gap-y-4 mx-auto bg-gray-200 mt-5"> 

            {
               categories.map((category,index) =>  (<RestaruantCategory key={category.card.card.categoryId} 
                categoryData={category.card.card}
                showItems = {index == itemIndex ? true : false}
                setitemIndex = {() => setitemIndex(index)}
                />))
               
            }

           {/* <h2 className="mt-25 text-2xl font-bold">Recommended</h2>
           <div>
            {
                resMenuList.map((menu) => (<div key={menu.card.info.id} className="flex flex-row justify-between shadow-2xl p-3 m-5">
            <div className="flex flex-col gap-y-2"> 
                <h2 className="text-2xl font-bold">{menu.card.info.name}</h2>
                <h3>Rs{menu.card.info.price/100 || menu.card.info.defaulrPrice/100}</h3>
                <h4>{menu.card.info.description}</h4>
            </div>
            <div className="mb-10">
                <img src={CDN_URL + menu.card.info.imageId} alt="Menu Info"/>
            </div>
                
            </div>) )
            }
         </div> */}
         
         </div>        
           
        </div>
        
    )
}

export default RestaruntMenu;