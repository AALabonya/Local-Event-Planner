import { HomeOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';
import { Typography, Row, Col } from 'antd';
import Map from './Map';

const { Title, Paragraph } = Typography;
const Contact = () => {
  return (
    <div>
    <div style={{backgroundImage: `url(https://i.ibb.co/9qNw5xs/leadership.jpg)`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
      <div style={{maxWidth: '100vw', height:"300px",  margin: '0 auto', padding: '24px'}} className="justify-center">
        <div
          style={{textAlign: 'center'}}
          title={<h2 style={{fontSize: '2.5rem', fontWeight: 'bold',color: '#CE1446', fontFamily: 'serif'}}>Contact</h2>}>
        
            <div style={{marginTop: '6rem'}}>
              <NavLink to="/" style={{fontFamily: 'sans-serif', fontSize: '3rem', fontWeight: 'bold', color: '#fff', marginRight: '1rem'}}>
                <HomeOutlined style={{marginRight: '0.5rem'}} /> Contact /
              </NavLink>
              <NavLink to="/" style={{fontFamily: 'sans-serif', fontSize: '3rem', fontWeight: 'bold', color: '#fff'}}>
                Contact Details
              </NavLink>
            </div>
       
       </div>
      </div>
    </div>
    <Map/>
  </div>
  )
}

export default Contact
