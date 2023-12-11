import React from 'react'
import cartimage from '../images/cartimage.png'
import profileimage from '../images/profileimage.png'


const header = () => {
  return (
    <div>
        <div className='header'>
        <ul className='header-ul'>
           <a href=""> <li>Home</li></a>
            <a href=""><li>About</li></a>
            <a href=""><li>Contact</li></a>
            <a href=""><li>Category</li></a>
            <a href="/products"><li>AllProducts</li></a>
            <div className='images12'>
                <a href=""><img src={cartimage} alt="" /></a>
            <a href=""> <img className='image-profile' src={profileimage} alt="" /></a>
           
            </div>

            </ul>
           
           

            </div>
        




    </div>
  )
}

export default header