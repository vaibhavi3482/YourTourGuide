import React ,{ useState , useEffect , createRef}  from 'react'
import './List.css'

import PlaceDetail from '../Placedetail/Placedetail'

import loadicon from 'bootstrap-icons/icons/arrow-clockwise.svg'


const List = ({ places , childclicked , isLoading , type , setType , rating , setRating}) => {
  // const [type,setType] = useState("restaurants");
  // const [rating,setRating] = useState();
  const [elrefs, setElrefs] = useState([])
  // const places = [
  //   { name: 'Cool Place' },
  //   { name: 'Best Beer' },
  //   { name: 'Best Steak' }
  // ] 
  useEffect(() => {
    const refs = Array(places?.length).fill().map((_, i)=> elrefs[i] || createRef())
  
    setElrefs(refs)
  }, [places])
  

  return (
    <>
        <div className="list">
            <h5>Restaurants, Hotels & Attractions around you</h5>
            {isLoading ?(
              <div className="load">
                <img src={loadicon} alt="loadicon" className="loadicon" />
              </div>
            ):(
            <>
              <form className="forms">
                <h6>Type:</h6>
                <select class="form-select" value={type} onChange={(e)=> setType(e.target.value)} aria-label="Default select example">
                  <option value="restaurants">Restaurants</option>
                  <option value="hotels">Hotels</option>
                  <option value="attractions">Attractions</option>
                </select>
              </form>
              <form className="forms">
                <h6>Rating:</h6>
                <select class="form-select" value={rating} onChange={(e)=> setRating(e.target.value)} aria-label="Default select example">
                  <option value={0}>All</option>
                  <option value={3}>Above 3.0</option>
                  <option value={4}>Above 4.0</option>
                  <option value={4.5}>Above 4.5</option>
                </select>
              </form>
              <div className="placelist">
                {places?.map((place,i) => (
                  <div ref={elrefs[i]} key={i}>
                    <PlaceDetail
                    place={place}
                    selected={Number(childclicked) === i}
                    refprop={elrefs[i]}
                    />
                  </div>
                ))}
              </div>
            </>
            )}
        </div>
    </>
  )
}

export default List