import React from 'react'
import MyAccordion from './Myaccordion'

export const Result = ({data}) => {

  return (

    <div className='ContainerResult'>

    <MyAccordion books={data} />

   {/*
    data?.map((item)=>{

    return (

        <div>
            <div>
                {item.volumeInfo.title}
            </div>
            <div>
            {item.volumeInfo.title}
            </div>
        </div>
    )
})
*/}

    </div>
  )
}
