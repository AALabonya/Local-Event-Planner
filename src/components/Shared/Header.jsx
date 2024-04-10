import { Row, Col } from 'antd';
import { FacebookOutlined, TwitterOutlined, LinkedinOutlined } from '@ant-design/icons';

const Header = () => {
  return (
    <div style={{ background: '#fff', padding: '0 20px', borderBottom: '1px solid #e8e8e8', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
      <Row justify="space-between" align="middle">
        <Col xs={{ span: 24 }} sm={{ span: 12 }}>
          <div style={{ marginRight: '20px' }}>
            <span>Address</span>
            <span style={{ margin: '0 10px' }}>|</span>
            <span>Phone</span>
            <span style={{ margin: '0 10px' }}>|</span>
            <span>Location</span>
          </div>
        </Col>
        <Col xs={{ span: 24 }} sm={{ span: 12 }}>
          <div style={{ textAlign: 'right' }}>
            <FacebookOutlined style={{ fontSize: '20px', margin: '0 10px' }} />
            <TwitterOutlined style={{ fontSize: '20px', margin: '0 10px' }} />
            <LinkedinOutlined style={{ fontSize: '20px', margin: '0 10px' }} />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Header;
