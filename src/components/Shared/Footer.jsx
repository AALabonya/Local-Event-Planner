import React from 'react';
import { Layout, Row, Col, Space, Typography, Menu } from 'antd';
import { HomeOutlined,ContactsOutlined, InfoCircleOutlined, PhoneOutlined, MailOutlined, FacebookOutlined, InstagramOutlined, TwitterOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
const { Text } = Typography;
const { Footer } = Layout;

const Footers = () => {
  return (
    <Footer style={{ textAlign: 'center' }}>
      <Row justify="space-between">
      <Col xs={24} sm={24} md={8} style={{marginTop:"20px"}}>
          {/* Center: Website Description */}
          <Space direction="vertical" size="small">
            <img src="/path/to/logo.png" alt="Logo" style={{ width: 100 }} />
            <Text type="secondary">One line description about your website</Text>
          </Space>
          <Row justify="center">
        <Col style={{marginTop:"20px"}}>
          {/* Bottom: Social Media Links */}
          <Space size="large">
            <a href="#" target="_blank" rel="noopener noreferrer" ><FacebookOutlined  style={{color:"#CE1446"}}/></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><InstagramOutlined style={{color:"#CE1446"}} /></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><TwitterOutlined style={{color:"#CE1446"}}/></a>
          </Space>
        </Col>
      </Row>
        </Col>
        <Col xs={24} sm={24} md={8} style={{marginTop:"20px"}}>
          {/* Left side: Menu items */}
          <Space direction="vertical" size="small">
            <Space><HomeOutlined style={{color:"#CE1446"}}/> <Text>Home</Text></Space>
            <Space><ContactsOutlined style={{color:"#CE1446"}} /> <Text>About</Text></Space>
            <Space><ContactsOutlined style={{color:"#CE1446"}}/> <Text>Contact</Text></Space>
          </Space>
        </Col>
        
        <Col xs={24} sm={24} md={8} style={{marginTop:"20px"}}>
          {/* Right side: Contact Information */}
          <Space direction="vertical" size="small">
            <Space><PhoneOutlined style={{color:"#CE1446"}}/> <Text>+1234567890</Text></Space>
            <Space><MailOutlined style={{color:"#CE1446"}}/> <Text>info@example.com</Text></Space>
            <Space><InfoCircleOutlined style={{color:"#CE1446"}} /> <Text>123 Main Street, City, Country</Text></Space>
          </Space>
        </Col>
      </Row>
      
      <Row justify="center" style={{marginTop:"25px"}}>
        <Col>
          {/* Bottom: Copyright */}
          <Text type="secondary">Event Planner Site ©{new Date().getFullYear()} Created by Aklima Akter</Text>
        </Col>
      </Row>
    </Footer>
  );
};

export default Footers;
