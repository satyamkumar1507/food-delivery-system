import { useContext, useEffect, useState } from "react";
import RestrauntCard,{withPromotedLabel} from "./RestrauntCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";



function Body() {

    const [allRestraunt,setallRestraunt] = useState([]);
    const [filteredRes,setfilteredRes] = useState([]);
    const [searchText,setsearchText] = useState("");

    const RestaurantCardPromoted = withPromotedLabel(RestrauntCard);

    useEffect(() => {
        fetchData();
    },[])
 
   async function fetchData() {
    const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.624480699999999&page_type=desktop_web_listing%27%20");
    const json = await response.json();
     const resdata = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
     setallRestraunt(resdata);
     setfilteredRes(resdata);
     console.log("resdata",resdata);
   }      

   //online status
   const onlineStatus = useOnlineStatus();

   if(onlineStatus == false)
    return (
      <h1>
        Looks like You're offline! Please check your Internet connection!.
      </h1>
    );

    //useContext
    const {loggedInUser,setusername} = useContext(UserContext);

          return(

            <div>

            <div className="pl-25 gap-4 mt-8 flex">
              <input type="text" className=" w-50 h-10 border border-black shadow-2xl text-center" placeholder="search Restarunts" value={searchText} onChange={(eve) => {setsearchText(eve.target.value)}}/>

              <button className="p-2 bg-blue-600 text-center text-white cursor-pointer rounded-md" onClick={() => {
                const filteredData = allRestraunt.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                setfilteredRes(filteredData);
              }}>

                Search

              </button>

              <button 
                className="bg-blue-600 p-2 text-white cursor-pointer rounded-md"
                onClick={() => {
                  const filterList = allRestraunt.filter((res) => res.info.avgRating > 4.5);
                  setfilteredRes(filterList);
                }}
                >
                 Top Rated Restarunt
               </button>

               <div> UserName:<input type="text" className="border border-black" value={loggedInUser} onChange={(e) => {setusername(e.target.value)} } /></div>
              
            </div>

            <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 w-full cursor-pointer hover:border-black border-black p-25">
              {
                allRestraunt.length == 0 ? (<Shimmer/>) : 
                
                  
                   ( filteredRes.map((restarunt) => (
                   <Link key ={restarunt.info.id} to={"/restaurants/"+ restarunt.info.id}>
                    {
                      
                      restarunt.info.promoted ? (<RestaurantCardPromoted  allres={restarunt.info}/>) : (<RestrauntCard  allres={restarunt.info} />) 
                    }
                    
                    </Link>

                  )))
                 
                
              }
            </div>

            </div>
            

          );
}

export default Body;