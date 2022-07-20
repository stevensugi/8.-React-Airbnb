import star from "../images/images.png"
import person from "../images/download.jpg"

export default function Card(props){
    return(
        <div className="card">
            {!props.openSpots && <div className="card-badge"> SOLD OUT </div>}
            <img src={person} className="card-image"/>
            <div className="card-stats">
                <img src={star} className="card-star"/>
                <span>{props.stats.rating}</span>
                <span className="gray">({props.stats.reviewCount}) . </span>
                <span className="gray">{props.location}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From ${props.price}</span>  / person</p>
        </div>
    )
}