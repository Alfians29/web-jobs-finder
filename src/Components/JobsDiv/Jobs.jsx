/* eslint-disable no-unused-vars */
import React from 'react'

import { BiTimeFive } from 'react-icons/bi'

import logo1 from '../../Assets/logo (1).png'
import logo2 from '../../Assets/logo (2).png'
import logo3 from '../../Assets/logo (3).png'
import logo4 from '../../Assets/logo (4).png'
import logo5 from '../../Assets/logo (5).png'
import logo6 from '../../Assets/logo (6).png'
import logo7 from '../../Assets/logo (7).png'
import logo8 from '../../Assets/logo (8).png'

// array method to display jobs using (map)
const Data = [
  {
    id: 1,
    image: logo1,
    title: 'Software Engineer',
    time: 'Now',
    location: 'Canada',
    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque accusamus ducimus officia nulla molestias!',
    company: 'Slack Technologies, Inc.',
  },
  {
    id: 2,
    image: logo2,
    title: 'Systems Analyst',
    time: 'Now',
    location: 'United States',
    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque accusamus ducimus officia nulla molestias!',
    company: 'Instagram, LLC',
  },
  {
    id: 3,
    image: logo3,
    title: 'Business Analyst',
    time: 'Now',
    location: 'China',
    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque accusamus ducimus officia nulla molestias!',
    company: 'ByteDance Ltd.',
  },
  {
    id: 4,
    image: logo4,
    title: 'Technical Support',
    time: 'Now',
    location: 'England',
    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque accusamus ducimus officia nulla molestias!',
    company: 'Spotify Technology S.A.',
  },
  {
    id: 5,
    image: logo5,
    title: 'Network Engineer',
    time: 'Now',
    location: 'Germany',
    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque accusamus ducimus officia nulla molestias!',
    company: 'Reddit Inc.',
  },
  {
    id: 6,
    image: logo6,
    title: 'IT Director',
    time: 'Now',
    location: 'Russia',
    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque accusamus ducimus officia nulla molestias!',
    company: 'Match Group, LLC',
  },
  {
    id: 7,
    image: logo7,
    title: 'Data Analyst',
    time: 'Now',
    location: 'Indonesia',
    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque accusamus ducimus officia nulla molestias!',
    company: 'LinkedIn Corporation',
  },
  {
    id: 8,
    image: logo8,
    title: 'Web Developer',
    time: 'Now',
    location: 'Morocco',
    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque accusamus ducimus officia nulla molestias!',
    company: 'Snap Inc.',
  },
]

const Jobs = () => {
  return (
    <div className='jobContainer flex gap-10 justify-center flex-wrap items-center py-10'>
      {Data.map(({ id, image, title, time, location, desc, company }) => {
        return (
          <div
            key={id}
            className='group group/item singleJob w-[260px] p-[20px] bg-white rounded [10px] hover:bg-blueColor shadow-lg shadow-greyIsh400/700 hover:shadow-lg'
          >
            <span className='flex justify-between items-center gap-4'>
              <h1 className='text-[16px] font-semibold text-textColor group-hover:text-white'>
                {title}
              </h1>
              <span className='flex items-center text-[#ccc] gap-1'>
                <BiTimeFive />
                {time}
              </span>
            </span>
            <h6 className='text-[#ccc]'>{location}</h6>

            <p className='text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white'>
              {desc}
            </p>

            <div className='company flex items-center gap-2'>
              <img src={image} alt='Company Logo' className='w-[10%]' />
              <span className='text-[14px] py-[1rem] block group-hover:text-white'>{company}</span>
            </div>

            <button className='border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor hover:bg-white group-hover/item:text-textColor group-hover:text-white'>
              Apply Now
            </button>
          </div>
        )
      })}
    </div>
  )
}

export default Jobs
