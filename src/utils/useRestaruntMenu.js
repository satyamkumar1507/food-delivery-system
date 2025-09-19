import { useEffect,useState } from "react";
import { MENU_API_URL } from "./constants";



const useRestaruntMenu = (resId) => {

    const [resInfo,setresInfo] = useState(null);
    const [resMenuList,setresMenuList] = useState(null);
    const [categories,setcategories] = useState(null);

useEffect(() => {
      fetchMenu();
   },[]);
     
    const fetchMenu = async () => {
        
        const response = await fetch(MENU_API_URL + resId);
        const data = await response.json();
        const resMenu = data?.data?.cards[2]?.card?.card?.info;
        setresInfo(resMenu);
        console.log("dataMenu",data);
        const itemCard = data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
        setresMenuList(itemCard);
         console.log("menuList",itemCard);
        const category =  data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => c.card?.card?.['@type'] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
        setcategories(category);
        console.log("category",category);
    
    }  

    return [resInfo,categories];
}

export default useRestaruntMenu;