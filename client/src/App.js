import React, { useState, useEffect } from "react";
import { getPlacesData } from "./api";

import './App.css'
import Footer from "./components/Footer/Footer";
import Header from './components/Header/Header'
import List from "./components/List/List";
import Map from "./components/Map/Map";





const App = () => {

  const [places,setPlaces] = useState([]);
  const [filteredPlaces, setFilteredPlaces] = useState([])
  const [coordinates,setCoordinates] = useState({});
  const [bounds,setBounds] = useState({});
  const [childclicked, setChildclicked] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [type,setType] = useState("restaurants");
  const [rating,setRating] = useState();

  let isDesktop = window.innerWidth > 600;
  let applist = (isDesktop?("applist col-4"):("listy"));
  let appmap = (isDesktop?("appmap col-8"):("mappy"));
  let view = (isDesktop?("grid flex"):("flex"));
  
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords: {latitude, longitude}}) => {
      setCoordinates({ lat: latitude, lng: longitude});
    })
  }, []);

  useEffect(() => {
    const filtered = places.filter((place)=> place.rating > rating)
    setFilteredPlaces(filtered)
  }, [rating])
  

  useEffect(() => {
    if (bounds.ne && bounds.sw) {
      setIsLoading(true);

      getPlacesData(type, bounds.sw, bounds.ne)
        .then((data) => {
          setPlaces(data.filter((place) => place.name && place.num_reviews > 0));
          setFilteredPlaces([]);
          setRating('');
          setIsLoading(false);
        });
    }
  }, [bounds, type]);
  

  return (
    <>
      <Header setCoordinates={setCoordinates}/>
      <div className={view} >
        <div className={applist}>
          <List
            places={filteredPlaces.length ? filteredPlaces : places}
            childclicked={childclicked}
            isLoading={isLoading}
            type={type}
            setType={setType}
            rating={rating}
            setRating={setRating}
          />
        </div>
        
        <div className={appmap}>
          <Map 
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            coordinates={coordinates}
            places={filteredPlaces.length ? filteredPlaces : places}
            setChildclicked={setChildclicked}
          />
          </div>
      </div>
      <div className="footer bg-dark text-white">
        <Footer/>
      </div>
      
    </>
  );
}

export default App;
