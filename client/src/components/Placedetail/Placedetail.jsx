import React from 'react'
import './Placedetail.css'
import "bootstrap-icons/font/bootstrap-icons.css";
import awardicon from 'bootstrap-icons/icons/award.svg'
import phoneicon from 'bootstrap-icons/icons/telephone-fill.svg'
import addressicon from 'bootstrap-icons/icons/geo-alt-fill.svg'
import resticon from 'bootstrap-icons/icons/x-diamond-fill.svg'
import Rating from '../Rating/Rating';

const Placedetail = ({ place , selected , refprop}) => {
    // console.log(place)
    if (selected) refprop?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });

  return (
    <>
        <div className="card">
            <img 
                className="cardimg" 
                src={place.photo? place.photo.images.medium.url : resticon } 
                alt="" 
                title={place.name}
                />
            <h5><strong>{place.name}</strong></h5>
            {place.rating? (<div className="ratingcont"><Rating rating={place.rating}/><div className="ratingtext">out of {place.num_reviews} reviews</div></div>):(<></>)}
            <div className="box">
                <div className="left">Price</div>
                <div className="right">{place.price_level}</div>
            </div>
            <div className="box">
                <div className="left">Ranking</div>
                <div className="right">{place.ranking}</div>
            </div>
            
            {place?.awards?.map((award)=> (
                <div className="box">
                    <img className='icon' src={awardicon} alt="" srcset="" />
                    <div>{award.display_name}</div>
                </div>
            ))
            }
            <div className="cuisinecontent">
                {place?.cuisine?.map(( { name } ) => (
                    <button class="btn btn-secondary cuisine">{name}
                    </button>
                ))
                }
            </div>
            {place.address && (
                <div className="box">
                    <img className='icon' src={addressicon} alt="" srcset="" />
                    <div>{place.address}</div>
                </div>
                )}
            {place.phone && (
                <div className="box">
                    <img className='icon' src={phoneicon} alt="" srcset="" />
                    <div>{place.phone}</div>
                </div>
            )}
            <div className="box2">
            <button type="button" class="btn btn-outline-primary" onClick={() => window.open(place.web_url, '_blank')} >Trip Advisor</button>
            <button type="button" class="btn btn-outline-success" onClick={() => window.open(place.website, '_blank')}>Website</button>
            </div>
                
        </div>
    </>
  )
}

export default Placedetail