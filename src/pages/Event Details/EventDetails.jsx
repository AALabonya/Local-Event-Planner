import { Row, Col, Typography, Button, Tag, Divider, Card } from 'antd';
import {
  CalendarOutlined,
  TeamOutlined,
 
} from '@ant-design/icons';
const { Meta } = Card;

const { Title, Paragraph } = Typography;


const EventDetails = () => {
  return (
    <div>
      <div
        className=""
        style={{
          backgroundImage: "url('https://i.ibb.co/VxZZKMK/banner-top.jpg')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          borderRadius: "6px",
          backgroundPosition: "center",
          height: 500,
        }}
      >
        <div >
          <div>
            <Title level={1}>Event Details</Title>
            <div >
              <a href="/events" >Events</a>
              <CalendarOutlined  />
              <span>Event Details</span>
            </div>
          </div>
        </div>
      </div>

      <Row  gutter={[16, 16]}>
        <Col xs={24} lg={16}>
          {/* Main Content */}
          {/* Image */}
          <img style={{marginTop:"10px"}}
            src="https://img.freepik.com/free-photo/portrait-autistic-kid-fantasy-world_23-2151354127.jpg?t=st=1712777645~exp=1712781245~hmac=911078df814e92e211752f711b5b4e878bf53c6cc760623c64d6ce78eb81682a&w=900"
            alt="event.title"
          />
          <Row  >
          Date 
            <Col>
              <p >
                <CalendarOutlined/>
                formattedDate
              </p>
            </Col>
        Seat 
            <Col>
              <p >
                <TeamOutlined />
                event.seat Seat
              </p>
            </Col>
             Location 
            <Col>
              <p >
               
                event.location
              </p>
            </Col>
          </Row>
          {/* Event Type, Speaker, Sponsor */}
          <Divider />
          <Row justify="space-between">
             Event Type, Speaker, Sponsor 
          </Row>
          {/* Price & Ticket Button */}
          <Divider />
          <Row justify="space-between" >
             Price & Ticket Button 
          </Row>
          {/* Event Description */}
          <Divider />
          <Title level={2}>event.title</Title>
          <Paragraph >
            event.description
          </Paragraph>
          {/* Overview */}
          <Divider />
          Overview 
          
         Main Speakers 
          <Divider />
          <Title level={2} className="my-8">Main Speakers</Title>
        Main Speakers 
          Please add your main speakers here 
        </Col>
        {/* Sidebar */}
        <Col xs={12} lg={4}>
         Sidebar 
         <Card
                    cover={<img alt="event.title" src="{event.image}" style={{ height: 200, objectFit: 'cover'}}/>}
                >
                    <Meta title="event.title" description="event.description" />
                    <p>Date: </p>
                    <p>Time: </p>
                    <p>Location: </p>
                    <Button type="primary" block href={`/eventDetails`}>
                        View Details
                    </Button>
                </Card>
        </Col>
      </Row>
    </div>
  )
}

export default EventDetails
