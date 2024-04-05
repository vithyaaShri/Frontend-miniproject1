import React from 'react'
import workforce from "../images/workforce.jpg"

const Home = () => {
    //This page is for Home Page
  return (
    <div
      class="container-fluid p-5"
      style={{
        backgroundImage: `url(${workforce})`,
        // backgroundImage: `url(${externalImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        width: "100vw",
        height: "100vh",
    
      }}
    ></div>
  )
}

export default Home
