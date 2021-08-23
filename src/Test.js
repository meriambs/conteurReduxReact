import React from 'react'
import { useSelector } from 'react-redux'




const Test = () => {
    const account = useSelector((state) => state.account)
    console.log(account)
    return (
        <div>
            
        </div>
    )
}

export default Test
