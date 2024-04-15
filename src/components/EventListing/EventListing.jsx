
import { Avatar, Card, Button } from 'antd';
const { Meta } = Card;
import moment from 'moment';
import { useEffect } from 'react';
import { addEvent } from '../../redux/features/event/eventSlice';
import { useDispatch, useSelector} from 'react-redux';

const EventListing = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    const value = localStorage.getItem('data');
    const data = JSON.parse(value);

    console.log('Data from localStorage:', data); 

    if (data) {
      dispatch(addEvent(data)); 
    } else {
      console.log('No data found in localStorage');
    }
  }, [dispatch]);

  
  const event  = useSelector(state => state.eventSlice.events);

  console.log('Events from Redux state:', event[0]); 

 



  return (
    <>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center', marginTop: "30px", marginBottom:"30px" }}>
        {/* {event[0]?.map((event, index) => (
          <Card
            key={index}
            hoverable
            style={{ width: 300, border: '2px solid white', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
            cover={<img alt={event.title} src={event.user_image[0].originFileObj.thumbUrl} style={{ height: 200, objectFit: 'cover' }} />}
          >
            <Meta title={event.title} description={event.description} />
            <p>Date: {moment(event.eventDateTime).format('MMMM Do YYYY')}</p>
          <p>Time: {moment(event.eventDateTime).format('h:mm A')}</p>
            <p>Location: {event.location}</p>
            <Button type="primary" block href={`/eventDetails/${index}`} style={{ backgroundColor: "#CE1446" }}>
              View Details
            </Button>
          </Card>
        ))} */}
      </div>


    </>


  )
}

export default EventListing
