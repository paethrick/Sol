import { useLocation, useParams } from 'react-router-dom'
import Sol_Picture from '/Sol_Picture.png'


export function FlatPage({ flats }){
    
    const location = useLocation()
    console.log(location)
    return(
        <div>
            {/* Logo */}
            <div className='flex w-auto justify-center' >
                <img src={Sol_Picture} alt="Sol"
                className='w-48'/>
            </div>
            {/* Picture Slide */}
            <div className='flex pl-20 bg-sky-400 text-3xl'>
                <h1>{location.state.title}</h1>
                <h2></h2>
            </div>
            <h1>{location.state.title}</h1>
        </div>
    )
}