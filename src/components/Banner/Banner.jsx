import React from 'react'
import { Carousel } from 'antd';

const contentStyle = {
  height: '300px',
  color: '#fff',
  textAlign: 'center',
  backgroundSize: "cover",
  display: 'flex',
  flexDirection: 'column', // To stack image and text vertically
  justifyContent: 'center', // Center items horizontally
  alignItems: 'center', // Center items vertically
};

const Banner = () => {
  return (
    <div>
      <Carousel autoplay>
        <div>
          <div style={contentStyle}>
            <img alt="example" src="https://img.freepik.com/free-photo/bunch-flowers-leaves-table_1304-4187.jpg?t=st=1712683466~exp=1712687066~hmac=8ea7dbb2eedfeed4ee7c2e93a61d370bc4693a1bd80d19f5a0c071d868ae2b4f&w=900" />
            <span> this is a local event planner web site</span>
          </div>
        </div>
        <div>
          <div style={contentStyle}>
            <img alt="example" src="https://cdn.pixabay.com/photo/2024/02/14/13/13/hamburg-8573427_1280.jpg" />
            <span> this is a local event planner web site</span>
          </div>
        </div>
        <div>
          <div style={contentStyle}>
            <img alt="example" src="https://cdn.pixabay.com/photo/2024/02/14/13/13/hamburg-8573427_1280.jpg" />
            <span> this is a local event planner web site</span>
          </div>
        </div>
        <div>
          <div style={contentStyle}>
            <img alt="example" src="https://img.freepik.com/free-photo/female-wedding-planner-working-ceremony_23-2150167261.jpg?t=st=1712683414~exp=1712687014~hmac=263ab687f14bad963807f92f856965baf6876535de557e4df78f26b9580f0911&w=900" />
            <span> this is a local event planner web site</span>
          </div>
        </div>
      </Carousel>
    </div>
  )
}

export default Banner
