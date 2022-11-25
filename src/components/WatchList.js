import React from 'react'

export const WatchList = ({watchList}) => {

    console.log('watchlist',watchList)

  return (

    <div className='WatchList'>

        <h1> WatchList </h1>

        {watchList?.map((item)=><div>{item}</div>)}
        
    </div>

  )
}
