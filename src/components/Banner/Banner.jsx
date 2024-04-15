import React from 'react'
import { Carousel } from 'antd';

const contentStyle = {
  width: "100%",
  height: '400px',
  position: 'relative', // Added position relative
};

const imgStyle = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
};

const textStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  textAlign: 'center',
  color: 'white',
};

const Banner = () => {
  return (
    <div>
      <Carousel autoplay>
        <div>
          <div style={contentStyle}>
            <img alt="example" src="https://cdn.pixabay.com/photo/2024/04/05/05/17/concert-8676557_1280.jpg" style={imgStyle} />
            <div style={textStyle}>
              <h1 style={{fontSize:"40px"}}>Plan Your Perfect Event with Us</h1>
            </div>
          </div>
        </div>
        <div>
          <div style={contentStyle}>
            <img alt="example" src="https://img.freepik.com/premium-photo/diversity-equity-inclusion-compagny-work-space-illustration-concept-background_916191-76412.jpg?w=1060" style={imgStyle} />
            <div style={textStyle}>
              <h1 style={{fontSize:"40px"}}>Make Every Moment Memorable</h1>
            </div>
          </div>
        </div>
        <div>
          <div style={contentStyle}>
            <img alt="example" src="https://i.ibb.co/vzfKs0j/meeting.jpg" style={imgStyle} />
            <div style={textStyle}>
              <h1 style={{fontSize:"40px"}}>Elevate Your Event Experience</h1>
            </div>
          </div>
        </div>
        <div>
          <div style={contentStyle}>
            <img alt="example" src="https://i.ibb.co/tsLGjv6/people-2608316-960-720.jpg" style={imgStyle} />
            <div style={textStyle}>
              <h1 style={{fontSize:"40px"}}>Create Memories with Local Events</h1>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  )
}

export default Banner
