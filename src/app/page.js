import React from 'react'

export default function page(){

  const divs = [
    {image: "./images/image1.jpg", text:"hello1"},
    {image: "./images/image2.png", text:"hello2"},
    {image: "./images/image3.jpg", text:"hello3"},
  ]
  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="flex w-[90%] h-[40vh]">
        {divs.map((div, index) => (
          <div
            key={index}
            className="w-1/3 relative h-full flex transition-all hover:w-[60vw] duration-300 overflow-hidden"
          >
            <div className='absolute font-bold text-white p-2'>{div.text}</div>
            <img
              src={div.image}
              alt={`Image ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
