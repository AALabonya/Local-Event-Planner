import { HomeOutlined } from '@ant-design/icons';
import { Link, NavLink } from 'react-router-dom';
import { Typography, Row, Col, Button } from 'antd';

const { Title, Paragraph } = Typography;
const About = () => {
  return (
    <div>
      <div style={{
        backgroundImage: "url('https://i.ibb.co/tsLGjv6/people-2608316-960-720.jpg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        borderRadius: "6px",
        backgroundPosition: "center",
        height: 400,
      }}>
        <div style={{ background: 'rgba(0, 0, 0, 0.10)', borderRadius: '6px' }}>
          <div style={{ position: 'absolute', top: 60, left: 8 }}>
            <Title level={2} style={{ color: 'white', fontSize: "50px", fontWeight: 'bold', marginTop: "8rem", marginLeft: "5rem" }}>About Details</Title>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'white', textAlign: "center", marginLeft: "40px" }}>
              <Link to={'/'} style={{ textDecoration: 'underline', color: 'white', marginLeft: "3rem", font: "bold", fontSize: "30px" }}>About</Link>
            </div>
          </div>
        </div>
      </div>
      <Row justify="center" align="middle" style={{ height: "100%" }}>
        <Col xs={24} sm={20} md={16} lg={12} xl={14}>
          <div style={{ textAlign: "center", fontFamily: "serif", padding: "1.25rem" }}>
            <Title level={2} style={{ fontSize: "1.875rem", fontWeight: "700", marginBottom: "1.25rem", color: "#CE1446" }}>Our Story</Title>
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
          <p style={{ fontSize: '17px', color: '#666666', marginTop: '1.5rem', marginBottom: '1rem', textAlign: 'justify' }}>Event Planner specializes in organizing memorable events of all types, ensuring a smooth and hassle-free experience. Whether it's a corporate conference, birthday party, wedding, or any special occasion, we have everything you need to make it a success.</p>
          <ul style={{ color: 'black', fontWeight: 'bold', display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1rem' }}>
            <li style={{ fontSize: '16px', color: 'black' }}>24/7 customer support</li>
            <li style={{ fontSize: '16px', color: 'black' }}>Wide selection of venues</li>
            <li style={{ fontSize: '16px', color: 'black' }}>Professional decorators and caterers</li>
            <li style={{ fontSize: '16px', color: 'black' }}>State-of-the-art equipment</li>
            <li style={{ fontSize: '16px', color: 'black' }}>Streamlined booking process</li>
            <li style={{ fontSize: '16px', color: 'black' }}>Exciting community events</li>
          </ul>
          <div style={{ marginTop: '1rem' }}>
            <Button style={{ border: '#CE1446', background: '#CE1446', color: '#FFF' }}>
              Explore More
            </Button>
          </div>
        </Col>

      </div>


    </div>
  )
}

export default About
