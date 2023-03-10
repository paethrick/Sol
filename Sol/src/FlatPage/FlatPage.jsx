import Sol_Picture from '/Sol_Picture.png'

export function FlatPage({ flat }){
    return(
        <div>
            {/* Logo */}
            <div className='flex w-auto justify-center' >
                <img src={Sol_Picture} alt="Sol"
                className='w-48'/>
            </div>
            {/* Picture Slide */}
            <div className='flex w-auto bg-sky-400 justify-center h-max'>
                <span>s</span>
            </div>
        </div>
    )
}