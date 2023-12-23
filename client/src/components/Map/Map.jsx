import React from 'react'
import GoogleMapReact from 'google-map-react'
import './Map.css'
import addressicon from 'bootstrap-icons/icons/geo-alt-fill.svg'
import resticon from 'bootstrap-icons/icons/x-diamond-fill.svg'
import Rating from '../Rating/Rating'
import { mapStyles } from './mapStyles'

const Map = ({setCoordinates , setBounds , coordinates , places , setChildclicked}) => {

    let isMobile = window.innerWidth <= 600;
    console.log(isMobile)

    // useEffect(() => {
    //   let width = window.innerWidth;
    //   let isMobile = width <= 600;
    // }, [window.innerWidth])
    
    
    // const coordinates = { lat: 0 , lng : 0 };
  return (
    <>
        <div className="map bg-dark">
            <GoogleMapReact
                bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_API_KEY }}
                defaultCenter = {{ lat: 0 , lng : 0 }}
                center={coordinates}
                defaultZoom={14}
                margin={[50,50,50,50]}
                options={{ disableDefaultUI: true, zoomControl: true, styles: mapStyles }}
                onChange={(e) => {
                  // console.log(e);
                  setCoordinates({ lat: e.center.lat, lng: e.center.lng });
                  setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw })
                }}
                onChildClick={(child) => {
                  setChildclicked(child)
                  console.log(child);
                  }}
            >
                {places?.map((place, i) => (
                  <div
                      className='markplace'
                      lat={Number(place.latitude)}
                      lng={Number(place.longitude)}
                      key={i}
                  >
                      {isMobile? (
                        <img src={addressicon} className="icon" alt="" />
                      ) : (
                        <div className="paper">
                          <div className="papername">{place.name}</div>
                          <img className='paperimg' src={place.photo? place.photo.images.medium.url : resticon } alt="" />
                          {place.rating? (<Rating rating={place.rating}/>):(<></>)}
                        </div>
                      )
                      }
                  </div>
                ))}
            </GoogleMapReact>
        </div>
    </>
  )
}

export default Map