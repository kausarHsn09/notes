import React from 'react'

const SearchBar = () => {
  return (
    <div className='w-[1330px] flex justify-center'>
      <input className='w-[1230px] relative mx-auto focus:outline-blue rounded-full py-3 px-6 '   placeholder='Search Notes'  type="text" />
    </div>
  )
}

export default SearchBar 