import React from 'react'
import { FaSearch } from "react-icons/fa";



const Home = () => {
  return (
   <>
    <home class="home" id="home">
      <section className="title" id="title">
        Make your interior more minimalistic & modern
      </section>
      <section className="subtitle" id="subtitle">
        Turn your room with panto into a lot more minimalist <br />
        and modern with ease and speed
      </section>
      <section className="search-bar">
        <div>
          <input
            type="search"
            name="search"
            id="search"
            className="search"
            placeholder="Search furniture"
          />
        </div>
        <div className="circle">
          <i className="fa fa-search"><FaSearch /></i>
        </div>
      </section>
    </home>
   </>
  )
}

export default Home
