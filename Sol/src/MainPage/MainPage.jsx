import { useState,useEffect } from "react";
import { PropertyCard } from "./PropertyCard";
import { NavBar } from "../components/NavBar";
import Sol_Picture from '/Sol_Picture.png'
import { SearchBar } from "../components/SearchBar";
import { Link } from "react-router-dom";


export const MainPage = () => {
    const [property, setProperty] = useState([])
    const [search, setSearch] = useState([])
    const [category, setCategory] = useState('')


    useEffect(()=>{
      if(property.length<1){
        starterPage()
        setTimeout(()=>{
          getCategory()
        },1000)
      }

    },[])


    // STARTER PAGE
    const starterPage = async () => {

      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'b339facf5amsh2d95b4cac3039a7p19abbejsnc843ac7a1f19',
		      'X-RapidAPI-Host': 'airbnb19.p.rapidapi.com'
        }
      };

      const response = await fetch(`https://airbnb19.p.rapidapi.com/api/v1/searchProperty?category=TAB_8225&totalRecords=10&currency=USD&adults=1`, options)
      const data = await response.json()
      setProperty(data.data)
    }
    
    // SEARCH PROPERTY BY PLACE
    const searchPropertyByPlace = async (input) => {
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'b339facf5amsh2d95b4cac3039a7p19abbejsnc843ac7a1f19',
          'X-RapidAPI-Host': 'airbnb19.p.rapidapi.com'
        }
      };
      const response = await fetch(`https://airbnb19.p.rapidapi.com/api/v1/searchPropertyByPlace?id=${input.destId}&display_name=${input.destName}%2C%20${input.destId}&totalRecords=18&currency=USD&adults=1`, options)
      const data = await response.json()
      setProperty(data.data)
    }


    // SEARCH PROPERTY BY CATEGORY
    const searchPropertyByCategory = async (category) => {
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'b339facf5amsh2d95b4cac3039a7p19abbejsnc843ac7a1f19',
          'X-RapidAPI-Host': 'airbnb19.p.rapidapi.com'
        }
      };
      
      const response = await fetch(`https://airbnb19.p.rapidapi.com/api/v1/searchProperty?category=${category}&totalRecords=18&currency=USD&adults=1&checkin=2023-04-20&checkout=2023-04-25`, options)
      const data = await response.json()
      setProperty(data.data)
    }


    // SEARCH PROPERTY BY CATEGORY
    const searchPropertyByCategory = async (category) => {
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'b339facf5amsh2d95b4cac3039a7p19abbejsnc843ac7a1f19',
          'X-RapidAPI-Host': 'airbnb19.p.rapidapi.com'
        }
      };
      
      const response = await fetch(`https://airbnb19.p.rapidapi.com/api/v1/searchProperty?category=${category}&totalRecords=10&currency=USD&adults=1&checkin=2023-04-20&checkout=2023-04-25`, options)
      const data = await response.json()
      setProperty(data.data)
    }

    
    // SEARCH DESTINATION
    const searchDestination = async (input) => {
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'b339facf5amsh2d95b4cac3039a7p19abbejsnc843ac7a1f19',
          'X-RapidAPI-Host': 'airbnb19.p.rapidapi.com'
        }
      };

      const response = await fetch(`https://airbnb19.p.rapidapi.com/api/v1/searchDestination?query=${input}`,options)
      const data = await response.json()
      const pack = {
        'destId' : data.data[0].id,
        'countryCode' : data.data[0].countryCode,
        'destName' : data.data[0].display_name
      }
      setSearch(pack)
      setTimeout(()=>{
        searchPropertyByPlace(pack)
      },1000)
    }

    // GET CATEGORY
    const getCategory = async () => {
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'b339facf5amsh2d95b4cac3039a7p19abbejsnc843ac7a1f19',
          'X-RapidAPI-Host': 'airbnb19.p.rapidapi.com'
        }
      };

      const response = await fetch('https://airbnb19.p.rapidapi.com/api/v1/getCategory', options)
      const data = await response.json()
      const limit = 10
      const limitedData = data.data.slice(0,limit)
      setCategory(limitedData)
    }

    // LOAD CATEGORY
    const loadCategory = (e) => {
      searchPropertyByCategory(e)
    }

    // GET CATEGORY
    const getCategory = async () => {
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'b339facf5amsh2d95b4cac3039a7p19abbejsnc843ac7a1f19',
          'X-RapidAPI-Host': 'airbnb19.p.rapidapi.com'
        }
      };

      const response = await fetch('https://airbnb19.p.rapidapi.com/api/v1/getCategory', options)
      const data = await response.json()
      const limit = 10
      const limitedData = data.data.slice(0,limit)
      setCategory(limitedData)
    }

    // LOAD CATEGORY
    const loadCategory = (e) => {
      searchPropertyByCategory(e)
    }

    

    return(
      <div>
        <div className="flex justify-between">
          {/* Logo */}
          <div>
                  <img src={Sol_Picture} alt="Sol"
                  className='w-24'/>
          </div>
          <SearchBar searchDestination={searchDestination}/>
          <p></p>
        </div>
        <NavBar category={category} loadCategory={loadCategory}/>
        <div className="flex justify-center">
        <div className="flex flex-wrap w-auto gap-x-7 justify-center mx-7">
            {property ? property.map((e,i)=><PropertyCard property={property[i]} key={i}/>) : null}
        </div>
        </div>
      </div>
    )
}