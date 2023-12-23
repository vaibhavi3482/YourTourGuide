import React , { useState } from 'react'
import { Autocomplete } from '@react-google-maps/api'
import './Header.css'

const Header = ({ setCoordinates }) => {

  const [autocomplete, setAutocomplete] = useState(null);
    const onLoad = (autoC)=> setAutocomplete(autoC);

    const onPlaceChanged = ()=> {
      const lat = autocomplete.getPlace().geometry.location.lat()
      const lng = autocomplete.getPlace().geometry.location.lng()

      setCoordinates({ lat, lng})
    }

  return (
    <>
        <nav className="navbar bg-dark text-white">
            <div className="container-fluid">
                <a className="navbar-brand text-white logoname" href='/'>Travel Companion</a>
                <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
                  <form className="d-flex" role="search">
                      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                      <button className="btn btn-outline-success" type="submit">Search</button>
                  </form>
                </Autocomplete>
            </div>
        </nav>
    </>
  )
}

export default Header