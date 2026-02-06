import React, { Children } from 'react'
import Text from '../text/text'

const Cardhelper = (
    {
        image = { url: '', tag: '' },
        country = { text: '', class: '' },
        subheading = { text: '', class: '' },
        date = '',
    }
) => {
    return (
        (image.url) && (
            <div className='relative h-50 md:w-[32.5%] w-full  shrink-0 overflow-hidden rounded-2xl  '  >

                <div className='h-full w-full absolute z-10'>
                    <img src={image.url} alt={image.tag}
                        className='h-full w-full object-cover '
                    />
                </div>

                <div className='h-full w-full absolute z-20 flex items-end p-4 overflow-hidden'>
                    <div>

                        <Text type={'p'} text={date} className={'md:text-sm text-xs text-white'} />
                        <Text type={'p'} text={subheading.text} className={`md:text-lg text-sm text-white ${subheading.class}`} />
                        <Text type={'h1'} text={country.text} className={`md:text-2xl text-xl ${country.class}`} />
                    </div>
                </div>

            </div>
        )
    )
}

export default Cardhelper