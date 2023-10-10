import React from 'react'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { RiAccountPinCircleLine } from 'react-icons/ri'
import { SlCalender } from 'react-icons/sl'



const Search = () => {
  return (
    <div className="search container">
      <div className="sectionContainer grid">

        <div className="btns flex">
          <div className="singleBtn">
            <span>Economy</span>

          </div>
          <div className="singleBtn">
            <span>Business Class</span>

          </div>
          <div className="singleBtn">
            <span>First class</span>

          </div>

        </div>
        <div className="searchInputs flex">
          <div className="singleInput flex">
            <div className="iconDiv">
              <HiOutlineLocationMarker className='icon' />
            </div>
            <div className="texts">
              <h4>Location</h4>
              <input type="text" placeholder='Hom nay ban muon di dau' />
            </div>

          </div>
          <div className="singleInput flex">
            <div className="iconDiv">
              <RiAccountPinCircleLine className='icon' />
            </div>
            <div className="texts">
              <h4>Location</h4>
              <input type="text" placeholder='Dia diem hien tai' />
            </div>

          </div>
          <div className="singleInput flex">
            <div className="iconDiv">
              <SlCalender className='icon' />
            </div>
            <div className="texts">
              <h4>Location</h4>
              <input type="text" placeholder='Ngay khoi hanh' />
            </div>

          </div>
          <button className = 'btn btnBlock flex'>Tim chuyen bay </button>
        </div>

      </div>
    </div>
  )
}

export default Search