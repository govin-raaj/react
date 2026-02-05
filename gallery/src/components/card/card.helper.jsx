import React from 'react'

const Cardhelper = (
     {
        image = { url: '' ,tag:''},
        country = { text: '', class: '' },
        subheading = { text: '', class: '' },
        date=''
    }
) => {
    return (
        <div className='relative h-100 w-50 md:h-150 md:w-100 m-10 shrink-0 overflow-hidden' >
            <div className='h-full w-full absolute z-10'>   
                <img src={image.url} alt={image.tag}
                    className='h-full w-full object-fit '
                />
            </div>

            <div className='h-full w-full absolute z-20 flex items-end p-4'>
                <div>
                    <p className='text-xl text-white'>{date}</p>
                    <p className={`text-2xl ${subheading.class}`}>{subheading.text}</p>
                    <h1 className={`text-5xl ${country.class}`}>{country.text}</h1>
                </div>
            </div>

        </div>
    )
}

export default Cardhelper