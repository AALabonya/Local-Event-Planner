import { Row, Col, Typography, Button, Tag, Avatar, Divider } from 'antd';
import {
  CalendarOutlined,
  TeamOutlined,
  DollarCircleOutlined,
  NotebookOutlined,
  UserAddOutlined,
} from '@ant-design/icons';

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
        <div className="h-[500px] bg-black bg-opacity-70 relative">
          <div className="absolute top-60 left-8 md:left-36 ">
            <Title level={1} className="text-white font-bold">Event Details</Title>
            <div className="text-xl mt-2 flex items-center gap-2 text-white">
              <a href="/events" className="underline">Events</a>
              <CalendarOutlined className="text-pink-600" />
              <span className="text-red-500">Event Details</span>
            </div>
          </div>
        </div>
      </div>

      <Row className="mt-24 max-w-screen-xl mx-auto px-4" gutter={[16, 16]}>
        <Col xs={24} lg={16}>
          {/* Main Content */}
          {/* Image */}
          <img
            className="w-full h-96 object-cover rounded-md"
            src="{event.image}"
            alt="event.title"
          />
          <Row  className="max-w-[780px] ml-2 mt-6">
            {/* Date */}
            <Col>
              <p className="flex items-center gap-2">
                <CalendarOutlined className="text-xl text-primary" />
                formattedDate
              </p>
            </Col>
            {/* Seat */}
            <Col>
              <p className="flex items-center gap-2 text-red-600 font-semibold text-xl">
                <TeamOutlined className="text-xl" />
                event.seat Seat
              </p>
            </Col>
            {/* Location */}
            <Col>
              <p className="flex items-center gap-1 text-sm">
                <VscLocation className="text-2xl text-primary" />
                event.location
              </p>
            </Col>
          </Row>
          {/* Event Type, Speaker, Sponsor */}
          <Divider />
          <Row justify="space-between" className="max-w-[840px]">
            {/* Event Type, Speaker, Sponsor */}
            {/* Please add your event type, speaker, and sponsor details here */}
          </Row>
          {/* Price & Ticket Button */}
          <Divider />
          <Row justify="space-between" className="max-w-[840px]">
            {/* Price & Ticket Button */}
            {/* Please add your price and ticket button here */}
          </Row>
          {/* Event Description */}
          <Divider />
          <Title level={2}>event.title</Title>
          <Paragraph className="mt-5 text-gray-600 leading-loose max-w-[850px]">
            event.description
          </Paragraph>
          {/* Overview */}
          <Divider />
          {/* Overview */}
          {/* Please add your overview content here */}
          {/* Main Speakers */}
          <Divider />
          <Title level={2} className="my-8">Main Speakers</Title>
          {/* Main Speakers */}
          {/* Please add your main speakers here */}
        </Col>
        {/* Sidebar */}
        <Col xs={24} lg={8}>
          {/* Sidebar */}
          {/* Please add your sidebar content here */}
        </Col>
      </Row>
    </div>
  )
}

export default EventDetails
