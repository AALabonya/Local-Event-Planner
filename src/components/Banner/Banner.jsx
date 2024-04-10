import React from 'react'
import { Carousel } from 'antd';

const contentStyle = {
  height: '300px', // To stack image and text vertically
  justifyContent: 'center', // Center items horizontally
  alignItems: 'center', 
  backgroundSize: "cover",
 backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
};

const Banner = () => {
  return (
    <div>
      <Carousel autoplay>
        <div>
          <div style={contentStyle}>
            <img alt="example" src="https://cdn.pixabay.com/photo/2024/04/05/05/17/concert-8676557_1280.jpg" />
            <span> this is a local event planner web site</span>
          </div>
        </div>
        <div>
          <div style={contentStyle}>
            <img alt="example" src="https://cdn.pixabay.com/photo/2024/04/05/05/17/concert-8676557_1280.jpg" />
            <span> this is a local event planner web site</span>
          </div>
        </div>
        <div>
          <div style={contentStyle}>
            <img alt="example" src="https://cdn.pixabay.com/photo/2024/04/05/05/17/concert-8676557_1280.jpg" />
            <span> this is a local event planner web site</span>
          </div>
        </div>
        <div>
          <div style={contentStyle}>
            <img alt="example" src="https://cdn.pixabay.com/photo/2024/04/05/05/17/concert-8676557_1280.jpg" />
            <span> this is a local event planner web site</span>
          </div>
        </div>
      </Carousel>
    </div>
  )
}

export default Banner
