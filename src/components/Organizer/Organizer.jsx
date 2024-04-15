import React from 'react'
import { Card, Button, Row, Col } from 'antd';
import { Link } from 'react-router-dom';
const Organizer = () => {
  return (
    <div style={{ padding: '50px 0' }}>
      <Row justify="center">
        <Col xs={24} md={20} lg={16}>
          <Card style={{ width: '100%' }}>
            <Row gutter={[16, 16]} align="middle">
              <Col xs={24} md={12}>
                <img
                  style={{ width: '100%', borderRadius: '8px' }}
                  src="https://img.freepik.com/free-photo/front-view-composition-quinceanera-party-table_23-2148478077.jpg?t=st=1712692358~exp=1712695958~hmac=f232b8248397309e6ac6ff86ee2a773ed7d5ff967a090c4eeb8406801d6723e4&w=900"
                  alt="Organizer"
                />
              </Col>
              <Col xs={24} md={12}>
                <div style={{ background: '#fff', padding: '24px', borderRadius: '8px' }}>
                  <h2 style={{ fontSize: '24px', marginBottom: '16px', fontWeight: 'bold' }}>
                    Host Your Event with Us
                  </h2>
                  <p style={{ marginBottom: '24px' }}>
                  Where your local dreams find perfection. Whether it's a cozy community gathering or a neighborhood celebration, we specialize in seamless event coordination. Entrust us with the details, so you can savor every moment stress-free. Reach out today, and let's craft unforgettable memories together.

                  </p>
                  <Link to="/eventForm">
                  <Button type="primary" size="large" style={{ textTransform: 'uppercase', backgroundColor:"#CE1446" }}>
                   Create Event
                  </Button></Link>
                </div>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default Organizer
