import { HomeOutlined } from '@ant-design/icons';
import { Link, NavLink } from 'react-router-dom';
import { Typography, Row, Col } from 'antd';
import Map from './Map';

const { Title, Paragraph } = Typography;
const Contact = () => {
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
            <Title level={2} style={{ color: 'white', fontSize: "50px", fontWeight: 'bold', marginTop: "8rem", marginLeft: "5rem" }}>Contact Details</Title>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'white', textAlign: "center", marginLeft: "40px" }}>
              <Link to={'/'} style={{ color: 'white', marginLeft: "3rem", font: "bold", fontSize: "30px" }}>Contact</Link>
            </div>
          </div>
        </div>
      </div>
      <Map />
    </div>
  )
}

export default Contact
