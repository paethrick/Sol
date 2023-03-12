import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export const NavBar = ({ category }) => {
  console.log(category)
  return(
    <div>
      <ul className="flex bg-white justify-center gap-5 border-solid-2 text-gray-400 text-xl">
        {category ? category.map((e,index) => {
          return(
        <div className='flex-wrap hover:text-black hover:border-b-2 border-slate-200 pb-1 mb-1 hover:cursor-pointer'>
          <p className='flex justify-center text-3xl' key={index}>&#x2750;</p>
          <li>{e.title}</li>
        </div>)
        }) : null}
        
      </ul>
    </div>
  )
}

{/* <div className='flex-wrap hover:text-black hover:border-b-2 border-slate-200 pb-1 mb-1'>
          <p className='flex justify-center text-3xl'>&#x2750;</p>
          <li>Place</li>
        </div> */}