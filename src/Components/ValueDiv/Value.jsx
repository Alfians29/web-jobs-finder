/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'

import heart from '../../Assets/heart.png'
import trust from '../../Assets/trust.png'
import shield from '../../Assets/shield.png'

const Value = () => {
  return (
    <div className='mb-[4rem] mt-[6rem]'>
      <h1 className='text-textColor text-[25px] py-[2rem] pb-[3rem] font-bold w-[400px] block'>
        The value that holds us true and to account
      </h1>

      <div className='grid gap-[10rem] grid-cols-3 items-center'>
        <div className='singleGrid rounded-[10px] hover:bg-[#ffdfdf] p-[1.5rem]'>
          <div className='flex items-center gap-3'>
            <div className='imgDiv p-[4px] rounded-[.8rem] bg-[#ffc1c2] h-[40px] w-[40px] flex items-center justify-center'>
              <img src={heart} alt='' className='w-[70%]' />
            </div>

            <span className='font-semibold text-textColor text-[18px]'>We summarize carefully</span>
          </div>
          <p className='text-[13px] text-textColor opacity-[.7] py-[1rem] font-semibold'>
            Things being made beautiful simple are the heart of everything we do.
          </p>
        </div>

        <div className='singleGrid rounded-[10px] hover:bg-[#c5d5fc] p-[1.5rem]'>
          <div className='flex items-center gap-3'>
            <div className='imgDiv p-[4px] rounded-[.8rem] bg-[#a8c1ff] h-[40px] w-[40px] flex items-center justify-center'>
              <img src={trust} alt='' className='w-[70%]' />
            </div>

            <span className='font-semibold text-textColor text-[18px]'>
              We believe can help you
            </span>
          </div>
          <p className='text-[13px] text-textColor opacity-[.7] py-[1rem] font-semibold'>
            We believe in making things better for everyone, even if just by a little bit!
          </p>
        </div>

        <div className='singleGrid rounded-[10px] hover:bg-[#ffeede] p-[1.5rem]'>
          <div className='flex items-center gap-3'>
            <div className='imgDiv p-[4px] rounded-[.8rem] bg-[#ffddbb] h-[40px] w-[40px] flex items-center justify-center'>
              <img src={shield} alt='' className='w-[70%]' />
            </div>

            <span className='font-semibold text-textColor text-[18px]'>We work with original</span>
          </div>
          <p className='text-[13px] text-textColor opacity-[.7] py-[1rem] font-semibold'>
            We work on the basis of creating trust which can be nurtured through authenticity.
          </p>
        </div>
      </div>

      <div className='card mt-[2rem] flex justify-between bg-blueColor p-[5rem] rounded-[10px]'>
        <div>
          <h1 className='text-blueColor text-[30px] font-bold'>Ready to switch a career?</h1>
          <h2 className='text-textColor text-[25px] font-bold'>Let's get started!</h2>
        </div>

        <button className='border-[2px] rounded-[10px] py-[4px] px-[50px] text-[18px] font-semibold text-blueColor hover:bg-white border-blueColor'>
          Get Started
        </button>
      </div>
    </div>
  )
}

export default Value
