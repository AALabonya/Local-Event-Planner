import { Avatar, Card, Button } from 'antd';
import moment from 'moment';
import { Input } from 'antd';
import { useState } from 'react';
import { useSelector } from 'react-redux';

const { Meta } = Card;
const { Search } = Input;

const EventListing = () => {
  const [searchText, setSearchText] = useState('');
  const event = useSelector((state) => state.eventSlice.events);

  const onSearch = (value) => {
    setSearchText(value);
  };

  // Filter events based on search text
  const filteredEvents = event.filter((event) => {
    return (
      event.title.toLowerCase().includes(searchText.toLowerCase()) ||
      event.location.toLowerCase().includes(searchText.toLowerCase())
    );
  });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Search
        placeholder="search by name and location"
        onSearch={onSearch}
        enterButton={<Button style={{ backgroundColor: '#CE1446', borderColor: '#CE1446', color: 'white' }}>Search</Button>}
        style={{ width: '50%' }}
      />
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center', marginTop: '30px', marginBottom: '30px' }}>
        {filteredEvents.map((event, index) => (
          <Card
            key={index}
            hoverable
            style={{ width: 300, border: '2px solid white', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
            cover={<img alt={event.title} src="https://img.freepik.com/free-photo/employee-showing-appreciation-each-other_23-2149357542.jpg?t=st=1713175463~exp=1713179063~hmac=1aa5948498d641c828d1cce20affd6b49087af55e310e00818079363d4040370&w=900" style={{ height: 200, objectFit: 'cover' }} />}
          >
            <Meta title={event.title} description={event.description} />
            <p>Date: {moment(event.eventDateTime).format('MMMM Do YYYY')}</p>
            <p>Time: {moment(event.eventDateTime).format('h:mm A')}</p>
            <p>Location: {event.location}</p>
            <Button type="primary" block href={`/eventDetails/${index}`} style={{ backgroundColor: '#CE1446' }}>
              View Details
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default EventListing;
