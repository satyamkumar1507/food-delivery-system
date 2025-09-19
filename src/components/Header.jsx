
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

function Header() {

  const [isLoggedin,setisLoggedin] = useState(true);

  const onlineStatus = useOnlineStatus();

  const {loggedInUser} = useContext(UserContext);

//Subscribing to the store using selector
  const cartItems = useSelector((store) => store.cart.items);

   return(
    <div className="w-[1900px] flex flex-row justify-between pl-25 pr-25 shadow-2xl  ">
        <div className="w-[100px]">
            <a href="/">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3K8f8hdrZw-SfHxZSG0GogsRClYEHyAqGEg&s"></img>
            </a>
        </div>
        <div  className="flex items-center">
            <ul className="flex flex-row gap-4 text-center "> 
                <li>
                    Online status:{onlineStatus ? "✅" : "" }
                </li>
                <li>
                   <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link> 
                </li>
                <li>
                     <Link to="/contact">ContactUs</Link>
                </li>
                <li>
                    <Link to="/grocery">Grocery</Link>
                </li>
                <li>
                  <Link to="/cart"> Cart ({cartItems.length}) </Link>
                </li>
                <li className="">
                    {
                        isLoggedin ? (
                            <button
                            className="cursor-pointer"
                            onClick={() => setisLoggedin(false)}
                            >
                             LogIn
                            </button>
                        ) : (
                            <button
                            className="cursor-pointer"
                            onClick={() => setisLoggedin(true)}
                            >
                           Logout
                            </button>
                        )
                    }
                </li>
                <li>{loggedInUser}</li>
            </ul>
        </div>
    </div>
   )
}

export default Header;