
import { Layout, Card, Typography, Button, Avatar, Divider, } from 'antd';
import { Link, useParams } from 'react-router-dom';
import { CalendarOutlined, MenuFoldOutlined, TeamOutlined, ThunderboltOutlined, SoundOutlined, CheckCircleOutlined, UserOutlined } from '@ant-design/icons';
import { Row, Col, } from 'antd';
const { Content } = Layout;
const { Meta } = Card;
const { Title, Text, Paragraph } = Typography;
import { Flex, Rate } from 'antd';
import { useState } from 'react';

const datas = {
 
  image: "https://i.ibb.co/VxZZKMK/banner-top.jpg",
}

const speakers = [
  { name: "Foyez Ahmed", role: "Web Developer", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVYTd2Hapj5Ri_KBYNwWpK-Jk9cNuOiQbp6Q&usqp=CAU", socials: ["facebook", "instagram", "linkedin", "twitter"] },
  { name: "Asif Mahmud", role: "Graphic Designer", image: "https://demo.egenslab.com/html/eventlab/assets/images/speaker/speaker-sm1.png", socials: ["facebook", "instagram", "linkedin", "twitter"] },
  { name: "Arif Hossain", role: "Digital Marketer", image: "https://demo.egenslab.com/html/eventlab/assets/images/speaker/speaker-sm2.png", socials: ["facebook", "instagram", "linkedin", "twitter"] },
  { name: "Sabrina Suraiya", role: "Product Designer", image: "https://1.bp.blogspot.com/-HoyT-d9JX0g/YUtRefQcHLI/AAAAAAAAk9w/P-NTrf0jPColdcKjKy2XGAVAjLjbQUyIQCLcBGAsYHQ/s16000-rw/50%2B%252B%2BIndian%2BHijab%2BGirl%2BDP%2Bfor%2BInstagram%2BPage%2Bwith%2BCaption%2B%252825%2529.jpg", socials: ["facebook", "instagram", "linkedin", "twitter"] },
  { name: "Lutfur Rahman", role: "Brand Identity Designer", image: "https://demo.egenslab.com/html/eventlab/assets/images/speaker/speaker-sm4.png", socials: ["facebook", "instagram", "linkedin", "twitter"] },
  { name: "Rizve Ahmed", role: "Writer", image: "https://i.ibb.co/pPtyQxm/360-F-214746128-31-Jkea-P6r-U0-Nzzzd-FC4kh-Gkmqc8noe6h.jpg", socials: ["facebook", "instagram", "linkedin", "twitter"] },
];

const recentEvents = [
  { title: "Web Development Workshop", image: "https://c.ndtvimg.com/2022-04/3uvghvj8_coachella-afp_625x300_16_April_22.jpg?im=Resize=(1230,900)", date: "2024-04-20", seat: 100 },
  { title: "Graphic Design Conference", image: "https://i.ibb.co/9qNw5xs/leadership.jpg", date: "2024-04-25", seat: 150 },
  { title: "Digital Marketing Summit", image: "https://sidwellhorizon.org/wp-content/uploads/2023/10/Screenshot-2023-02-28-134748_FD871725-5056-BF65-D63E6A8D9B3EE979_fd880673-5056-bf65-d64260e7963fb5c1.jpg", date: "2024-04-30", seat: 200 },
  { title: "Product Design Exhibition", image: "https://i.ibb.co/9qNw5xs/leadership.jpg", date: "2024-05-05", seat: 120 },
];

const organizer = {
  name: "Abdullah Mamun",
  role: "CEO",
  image: "https://i.ibb.co/c2PW68Q/pexels-italo-melo-2379004.jpg",
};

const EventDetails = () => {
  
  const {id} = useParams()

  console.log("id",id);

  const data = localStorage.getItem('data');

    const user = (JSON.parse(data));

    console.log("data",user);

    const task = user.find((item, index) => index.toString() === id);
  console.log("task",task);
  const params = 1
  const [value, setValue] = useState(3);

  

  return (
    <div>
      <div>
        <div style={{
          backgroundImage: "url('https://i.ibb.co/VxZZKMK/banner-top.jpg')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          borderRadius: "6px",
          backgroundPosition: "center",
          height: 500,
        }}>
          <div style={{ height: 500, background: 'rgba(0, 0, 0, 0.7)', borderRadius: '6px' }}>
            <div style={{ position: 'absolute', top: 60, left: 8 }}>
              <Title level={2} style={{ color: 'white',fontSize:"50px", fontWeight: 'bold',marginTop:"8rem", marginLeft:"5rem"}}>Event Details</Title>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'white',textAlign:"center", marginLeft:"40px"}}>
                <Link to={'/events'} style={{ textDecoration: 'underline', color: 'white' ,marginLeft:"3rem"}}>Events</Link>

                <span style={{ color: 'red' }}>Event Details</span>
              </div>
            </div>
          </div>
        </div>

        <div style={{ maxWidth: '100vw', margin: '24px auto', padding: '0 16px' }}>
          <Row gutter={[16, 16]}>
            <Col xs={24} lg={18}>
              <img
                style={{ width: '100%', height: 384, objectFit: 'cover', borderRadius: 6 }}
                src="https://images.inc.com/uploaded_files/image/1920x1080/ges-01-2016_98454.jpg"
                alt="datasImage"
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', maxWidth: 830, margin: '24px 0' }}>
                <p style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <CalendarOutlined style={{ fontSize: 24, color: '#1890ff' }} />
                  {task.eventDateTime} 
                </p>
                <p style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <TeamOutlined style={{ fontSize: 24, color: '#1890ff' }} />
                  {task.location}
                </p>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', gap: 16, border: '1px solid #f0f0f0', padding: 16, margin: '24px 0' }}>
                <div style={{ display: 'flex', gap:"40px" , justifyContent:"space-between"}}>
                  <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                  <MenuFoldOutlined style={{color:"red"}}/>
                    <div>
                      <p style={{ fontWeight: 'bold' }}>Event Type</p>
                      <p>Web Development</p>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                  <SoundOutlined style={{color:"red"}}/>
                    <div>
                      <p style={{ fontWeight: 'bold' }}>Speaker</p>
                      <p>10 Best Speaker</p>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                    <ThunderboltOutlined style={{color:"red"}}/>
                    <div>
                      <p style={{ fontWeight: 'bold' }}>Sponsor</p>
                      <p>Event Lab</p>
                    </div>
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                  {/* <Rate allowHalf defaultValue={5} disabled /> */}
                  <Flex gap="middle" vertical>
                    <Rate  onChange={setValue} value={value} />
                  
                  </Flex>
                  <p>(260)</p>
                </div>
              </div>

             

              <div style={{ maxWidth: 850 }}>
                <Title level={2}>{task.title}</Title>
                <Paragraph>{task.description}</Paragraph>
              </div>

              <div style={{ display: 'grid', gap: 24, marginTop: 32, gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
                <div>
                  <Title level={3}>Overview</Title>
                  <ul style={{ listStyleType: 'none', padding: 0 }}>
                    <li style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <CheckCircleOutlined style={{ color: 'green', fontSize: 24 }} />
                      You Got Full Free Certificate.
                    </li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <CheckCircleOutlined style={{ color: 'green', fontSize: 24 }} />
                      Unlimited Coffe & Tea When U Boring.
                    </li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <CheckCircleOutlined style={{ color: 'green', fontSize: 24 }} />
                      Comfortable Seating Areas.
                    </li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <CheckCircleOutlined style={{ color: 'green', fontSize: 24 }} />
                      Wi-Fi Access.
                    </li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <CheckCircleOutlined style={{ color: 'green', fontSize: 24 }} />
                      Lunch Suspendisse In Commodo Feli.
                    </li>
                  </ul>
                </div>
                <div style={{ display: 'flex', gap: 16 }}>
                  <img style={{ width: '48%', borderRadius: '8px 0 0 8px' }} src="https://i.ibb.co/mGZ71df/pexels-rdne-stock-project-7648306.jpg" alt="" />
                  <img style={{ width: '48%', borderRadius: '0 8px 8px 0' }} src="https://i.ibb.co/9qNw5xs/leadership.jpg" alt="" />
                </div>
              </div>

              <Paragraph style={{ marginTop: 32 }}>
                {task.description}
              </Paragraph>

              <Title level={3} style={{ marginTop: 32 }}>Main Speakers</Title>
              <Row gutter={[16, 16]}>
                {speakers?.slice(0, 4).map((data, index) => (
                  <Col key={index} xs={24} sm={12} md={12} lg={6}>
                    <Card hoverable>
                      <Card.Meta
                        avatar={<Avatar src={data.image} />}
                        title={data.title}
                        description={(
                          <div>
                            <Paragraph ellipsis={{ rows: 2 }}>{data.description}</Paragraph>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                              <Link to={`/speaker/${data.speakerId}`}></Link>
                              <Flex gap="middle" vertical>
                                <Rate onChange={setValue} value={value} />
                                
                              </Flex>
                            </div>
                          </div>
                        )}
                      />
                    </Card>
                  </Col>
                ))}
              </Row>
            </Col>
            <Col xs={24} lg={6}>
              <div style={{ background: '#fafafa', padding: 24, borderRadius: 8 }}>
                <Title level={3} style={{ marginBottom: 24 }}>Recent Event</Title>
                {recentEvents?.slice(0, 4).map((item, index) => (
                  <div key={index} style={{ display: 'flex', gap: 16, alignItems: 'center', marginBottom: 16 }}>
                    <img style={{ width: 120, height: 80, objectFit: 'cover', borderRadius: 6 }} src={item.image} alt={item.title} />
                    <div>
                      <p style={{ fontWeight: 'bold' }}>{item.title}</p>
                      <p>
                        <CalendarOutlined /> {item.date.slice(0, 10)}
                      </p>
                      <p>
                        {/* <BsDiagram3 /> {event.seat} Seat */}Seat
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: 16 }}>
                <Divider />
                <Title level={3}>Event Organized By</Title>
                <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                  <img style={{ width: 80, height: 80, borderRadius: '50%' }} src="https://i.ibb.co/c2PW68Q/pexels-italo-melo-2379004.jpg" alt="" />
                  <div>
                    <Title level={4}>Abdullah Mamun</Title>
                    <Paragraph style={{ fontWeight: 'bold' }}>CEO</Paragraph>
                  </div>
                </div>
              </div>

              <div style={{ marginTop: 16 }}>
                <img style={{ width: '100%' }} src="https://i.ibb.co/gzYpGCB/sb-banner.png" alt="" />
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;


