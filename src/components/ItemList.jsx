import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = (props) => {

   const itemData = props.items;
   //console.log("jgkgnkljlkdsakngog",itemData);

   const dispatch = useDispatch();

   const handleAddItem = (item) => {
    // Dispatch an action
    dispatch(addItem(item));
   }

    return(
        <div>
           {
            itemData.map((item) => (<div key={item.card.info.id} className="flex flex-row justify-between items-center p-5 border-b-gray-400 border-b-2">
                <div className="w-[600px] flex flex-col gap-y-4">
                    <h2 className="font-bold">{item.card.info.name}</h2>
                    <h2>₹{item.card.info.price/100 || item.card.info.defaultPrice/100}</h2>
                    <h2>⭐{item.card.info.ratings.aggregatedRating.rating} ({item.card.info.ratings.aggregatedRating.ratingCountV2})</h2>
                    <h2 className=" text-gray-400">{item.card.info.description}</h2>
                </div>
                <div className="w-[300px] relative">
                   <img src={CDN_URL + item.card.info.imageId} className="w-[250px]"/>
                   <button className="w-[120px] absolute top-[0.5px] rounded-2xl  p-2 text-green-400 bg-white font-bold shadow-2xl cursor-pointer"
                   onClick = {() => {
                    //dispatch an action
                     handleAddItem(item);
                   }}
                   >
                    ADD
                    </button>
                </div>
            </div>))
           }
        </div>
    )
}

export default ItemList;