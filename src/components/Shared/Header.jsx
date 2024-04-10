import { Row, Col } from 'antd';
import { FacebookOutlined, TwitterOutlined, LinkedinOutlined } from '@ant-design/icons';

const Header = () => {
  return (
    <div style={{ background: '#CE1446', padding: '5px 20px', borderBottom: '1px solid #e8e8e8', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
      <Row justify="space-between" align="middle">
        <Col xs={{ span: 24 }} sm={{ span: 12 }}>
          <div style={{ marginRight: '20px' ,color:"#fff" }}>
            <span>Address</span>
            <span style={{ margin: '0 10px',color:"#fff"  }}>|</span>
            <span>Phone</span>
            <span style={{ margin: '0 10px',color:"#fff"  }}>|</span>
            <span>Location</span>
          </div>
        </Col>
        <Col xs={{ span: 24 }} sm={{ span: 12 }} >
          <div style={{ textAlign: 'right' }}>
            <FacebookOutlined style={{ fontSize: '20px', margin: '0 10px', color:"#fff" }} />
            <TwitterOutlined style={{ fontSize: '20px', margin: '0 10px' ,color:"#fff" }} />
            <LinkedinOutlined style={{ fontSize: '20px', margin: '0 10px' ,color:"#fff" }} />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Header;
