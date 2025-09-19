import { CDN_URL } from "../utils/constants";


function RestrauntCard(props) {
    const result = props.allres
    
    const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    sla
  } = result


    return(
        <div className=""> 
          <img 
          className="rounded-2xl shadow-2xl"
          src={CDN_URL+cloudinaryImageId}
          alt="Biryani"
          />
          
          <div className="res-card">
            <h3 className="text-[20px]">{name}</h3>
            <em>{cuisines.join(',')}</em>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla?.deliveryTime} minutes</h4>
            <h4>{sla?.lastMileTravel} km</h4>
          </div>
        </div>
    )
}

// Higher order component

// input - RestrauntCard  => RestaruntCard Promoted

export const withPromotedLabel = (RestrauntCard) => {
  return(props) => {
    return (
      <div>
        <label>Promoted</label>
        <RestrauntCard {...props} />
      </div>
    )
  }
}

export default RestrauntCard;