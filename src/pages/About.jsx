import { HomeOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';
import { Typography, Row, Col, Button } from 'antd';

const { Title, Paragraph } = Typography;
const About = () => {
  return (
    <div>
      <div style={{ backgroundImage: `url(https://i.ibb.co/9qNw5xs/leadership.jpg)`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div style={{ maxWidth: '100vw', height: "300px", margin: '0 auto', padding: '24px' }} className="justify-center">
          <div
            style={{ textAlign: 'center' }}
            title={<h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'rgba(0, 0, 0, 0.8)', fontFamily: 'serif' }}>Contact</h2>}>

            <div style={{ marginTop: '6rem' }}>
              <NavLink to="/" style={{ fontFamily: 'sans-serif', fontSize: '3rem', fontWeight: 'bold', color: '#fff', marginRight: '1rem' }}>
                <HomeOutlined style={{ marginRight: '0.5rem' }} /> Home /
              </NavLink>
              <NavLink to="/" style={{ fontFamily: 'sans-serif', fontSize: '3rem', fontWeight: 'bold', color: '#fff' }}>
                About Details
              </NavLink>
            </div>

          </div>
        </div>
      </div>
      <Row justify="center" align="middle" style={{ height: "100%" }}>
        <Col xs={24} sm={20} md={16} lg={12} xl={14}>
          <div style={{ textAlign: "center", fontFamily: "serif", padding: "1.25rem" }}>
            <Title level={2} style={{ fontSize: "1.875rem", fontWeight: "700", marginBottom: "1.25rem" , color:"#CE1446"}}>Our Story</Title>
            <Paragraph style={{ fontSize: "1.25rem" }}>
              We are an exclusive, independent event planning company based in Bangladesh, specializing in premium wedding services, birthday parties, and perfect party organizing tailored to the needs of our clients. With a touch of personalization, we create stylish, exclusive, and creative events throughout Bangladesh. Our award-winning team of event management and wedding planners offers a highly creative, friendly, and professional service dedicated to making every event memorable. At Bangladesh Love to Plan, we are passionate about bringing dreams to life.
            </Paragraph>
          </div>
        </Col>
      </Row>

      <div style={{ display: "flex", flexWrap: "wrap", padding: "50px", marginBottom: "30px", justifyContent: "space-between" }}>

        <Col xs={24} lg={12} style={{ position: 'relative', paddingLeft: '3px', paddingRight: '8px', lg: { paddingLeft: '0', paddingRight: '0' } }}>
          <img style={{ width: '100%', maxWidth: '500px', minHeight: '324px', maxHeight: '350px', borderRadius: '5px', zIndex: '10' }} src="https://i.ibb.co/9qNw5xs/leadership.jpg" alt="" />
          <div style={{ position: 'absolute', left: '50%', transform: 'translateX(-30%)', top: '50%', minWidth: '160px', minHeight: '300px', lg: { left: '50%', top: '50%', minWidth: '300px', minHeight: '300px' }, xl: { left: '50%', top: '50%' } }}>
            <img style={{ width: '100%', height: '100%', borderRadius: '5px' }} src="https://i.ibb.co/9qNw5xs/leadership.jpg" alt="" />
          </div>
        </Col>
        <Col xs={24} lg={12} style={{ display: 'flex', flexDirection: 'column', paddingLeft: '3px', paddingRight: '8px', lg: { paddingLeft: '0', paddingRight: '0' } }}>
        <h1 style={{ fontSize: '4xl', fontWeight: 'bold', color: '#CE1446' }}>About Us</h1>
        <p style={{ fontSize: '17px', color: '#666666', marginTop: '1.5rem', marginBottom: '1rem', textAlign: 'justify' }}>Easy Rent is your go-to platform for finding the perfect rental property. We specialize in connecting renters with their dream homes, offering a seamless and stress-free experience from start to finish. Whether you are looking for a cozy apartment in the city, a spacious house in the suburbs, or a luxurious villa by the beach, Easy Rent has you covered. Our mission is to simplify the rental process and empower renters to make informed decisions about their housing needs.</p>
        <ul style={{ color: 'black', fontWeight: 'bold', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <li style={{ fontSize: '16px', color: 'black' }}>
                We have strong customer support available 24/7.
            </li>
            <li style={{ fontSize: '16px', color: 'black' }}>
                We offer wonderful homes with furniture included.
            </li>
            <li style={{ fontSize: '16px', color: 'black' }}>
                Private balconies with stunning views.
            </li>
            <li style={{ fontSize: '16px', color: 'black' }}>
                Smart Home Design & Beautiful Scenery Around.
            </li>
            <li style={{ fontSize: '16px',color: 'black' }}>
                Easy application process with quick approvals to get you into your new home sooner.
            </li>
            <li style={{ fontSize: '16px', color: 'black' }}>
                Regular community events and activities to foster a sense of belonging and camaraderie among residents.
            </li>
        </ul>
        <div style={{ marginTop: '1rem' }}>
            <Button style={{border:'#CE1446', background: '#CE1446', color:"#FFF"}}>     
                Explore More
            </Button>
        </div>
    </Col>

      </div>


    </div>
  )
}

export default About
