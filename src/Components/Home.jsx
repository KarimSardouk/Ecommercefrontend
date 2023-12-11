  import React from 'react'
  import "./Home.css"
  import {Helmet} from 'react-helmet'
  import Header from './Header';
  const Home = () => {
    return (
      <div>
        <Header/>
            <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@300;500;700&family=Montserrat:wght@300;400;700&family=Open+Sans:wght@300;400;700&family=Teko:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
        {/* <h1 className='categories'>CATEGORIES</h1>
        <div className="square123">
        <div className="square1"><img src="Rectangle 57.png" alt="" className='image1' /><p className='tags'>Laptops &gt </p></div>
        <div className="square2"><img src="Rectangle 57.png" alt="" className='image2' /><p className='tags'>Laptops &gt </p></div>
        <div className="square3"><img src="Rectangle 57.png" alt="" className='image3' /><p className='tags'>Laptops &gt </p></div>
        </div>
        <div className="square456">
        <div className="square4"><img src="Rectangle 57.png" alt="" className='image4' /><p className='tags'>Laptops &gt</p></div>
        <div className="square5"><img src="Rectangle 57.png" alt="" className='image5' /><p className='tags'>Laptops &gt</p></div>
        <div className="square6"><img src="Rectangle 57.png" alt="" className='image6' /><p className='tags'>Laptops &gt</p></div>
        </div>
        <div className="square789">
        <div className="square7"><img src="Rectangle 57.png" alt="" className='image7'/><p className='tags'>Laptops &gt</p></div>
        <div className="square8"><img src="Rectangle 57.png" alt="" className='image8'/><p className='tags'>Laptops &gt</p></div>
        <div className="square9"><img src="Rectangle 57.png" alt="" className='image9'/><p className='tags'>Laptops &gt</p></div>
        </div> */}
      </div>
    )
  }

  export default Home
