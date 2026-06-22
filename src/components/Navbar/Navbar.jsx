import React from 'react'

const navbar = () => {
  return (
    <>
      <div className="navbar flex bg-[#eb4b89] h-20">
        <div className="left  flex  flex-[0.4]"><div className="logo text-3xl pt-4 pr-3 pl-3 pb-3  ">✍️ StoryNest</div></div>
        <div className="search-bar flex-1 pt-4 pb-4 pr-5 pl-5">
          <input placeholder=' What are you looking for' name='search-bar' className='border-transparent rounded-4xl w-[80%] h-full bg-white px-5'></input>
        </div>
        <div className="center flex flex-1">
          <div className="home pt-7 pb-5 pr-5 pl-5">
            Home
          </div>
          <div className="create-blogs pt-7">
            Create blogs
          </div>
          <div className="categories pt-7 pb-5 pr-5 pl-5">
            Categories
          </div>
          <div className="community pt-7 pb-5 pr-5 pl-5">
            Community
          </div>

        </div>
        <div className="right flex flex-0.6 gap-3">
          <div className="register flex-2 pt-7 pb-5 mr-5 font-semibold ">Register</div>
          <div className="Sign-in flex-2 pt-5 pb-5  pr-2"><button className='bg-black text-white rounded-lg w-15 h-10'>Sign in</button></div>

        </div>
      </div></>
  )
}

export default navbar