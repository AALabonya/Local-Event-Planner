import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card,Button } from 'antd';
const { Meta } = Card;

const EventListing = () => {
    const eventData = [
        {
          id: 1,
          image: "https://img.freepik.com/free-photo/beautiful-white-wedding-cake-with-different-desserts-cups-tale_181624-24921.jpg?t=st=1712684347~exp=1712687947~hmac=33dd5a8d5d3104250150f97883ad98e41997c985170742845e31169bc7881523&w=900",
          title: "Community Picnic in the Park",
          description: "Join us for a fun-filled community picnic in the park! There will be games, music, food, and lots of laughter. Bring your family and friends for a memorable day outdoors.",
          date: "Saturday, May 14, 2024",
          time: "12:00 PM - 4:00 PM",
          location: "Central Park, Main Pavilion",
          eventPlannerType: "Local Event"
        },
        {
          id: 2,
          image: "https://img.freepik.com/free-photo/female-wedding-planner-working-ceremony_23-2150167256.jpg?t=st=1712684422~exp=1712688022~hmac=3e0f9d6790ec68fb52d4ceb97c277048be080fcff3d59b4a9a22155f743bb87a&w=900",
          title: "Charity 5K Fun Run",
          description: "Lace up your running shoes and join us for a charity 5K fun run to support local charities. Whether you're a seasoned runner or just starting, everyone is welcome to participate!",
          date: "Sunday, June 5, 2024",
          time: "9:00 AM - 11:00 AM",
          location: "Riverfront Park, Starting Line",
          eventPlannerType: "Local Event"
        },
        {
          id: 3,
          image: "https://img.freepik.com/free-photo/restaurant-hall-with-round-tables-white-napoleon-chairs-red-curtains-brick-walls-chandeliers_140725-8446.jpg?t=st=1712684387~exp=1712687987~hmac=ae888ad2386209e2b95702a65b573e39d797c7383040c5aaabad405d7d49f2cc&w=740",
          title: "Summer Music Festival",
          description: "Experience the magic of live music at our annual Summer Music Festival! Featuring talented local artists, food vendors, and a vibrant atmosphere, it's an event you won't want to miss.",
          date: "Saturday, July 22, 2024",
          time: "3:00 PM - 10:00 PM",
          location: "City Park, Main Stage",
          eventPlannerType: "Local Event"
        },
        {
          id: 4,
          image: "https://img.freepik.com/free-photo/decorated-wedding-celebration-table-with-guests-seats-outdoors-gardens-with-mountain-view_8353-10887.jpg?t=st=1712684431~exp=1712688031~hmac=2cf1cad59443dc33134f2e5fd40daad27680aaa591c2eddb442a581ccd9639fd&w=900",
          title: "Artisan Market Showcase",
          description: "Discover unique handmade treasures at our Artisan Market Showcase! Browse stalls of local artisans offering jewelry, pottery, textiles, and more. Support local craftsmanship and find one-of-a-kind gifts.",
          date: "Sunday, August 8, 2024",
          time: "10:00 AM - 4:00 PM",
          location: "Downtown Square, Market Street",
          eventPlannerType: "Local Event"
        },
        {
          id: 5,
          image: "https://img.freepik.com/free-photo/elegant-wedding-candles_1157-17848.jpg?t=st=1712684512~exp=1712688112~hmac=77815ef274212c13ea22ce224a3510eec4b601872144be16933528600c60f18a&w=900",
          title: "Family Movie Night Under the Stars",
          description: "Grab your blankets and lawn chairs for a cozy night under the stars! We'll be screening a family-friendly movie on a giant outdoor screen. Don't forget the popcorn!",
          date: "Friday, September 16, 2024",
          time: "7:00 PM - 9:30 PM",
          location: "Community Center Park, Soccer Field",
          eventPlannerType: "Local Event"
        },
        {
          id: 6,
          image: "https://img.freepik.com/free-photo/wonderful-wedding-table-amazing-restaurant_8353-9875.jpg?t=st=1712684540~exp=1712688140~hmac=4037b36a3062f68f025ddaf1ccaedfdf6aefc7ca2f2bee7cb35535c4b7e68bad&w=900",
          title: "Harvest Festival & Pumpkin Patch",
          description: "Celebrate the harvest season at our annual Harvest Festival & Pumpkin Patch! Enjoy hayrides, pumpkin decorating, corn mazes, and seasonal treats for the whole family.",
          date: "Saturday, October 12, 2024",
          time: "11:00 AM - 5:00 PM",
          location: "Farmer's Field, Oak Street",
          eventPlannerType: "Local Event"
        },
        {
          id: 7,
          image: "https://img.freepik.com/free-photo/elegant-candlelit-wedding-decor-with-floral-arrangements-generated-by-ai_188544-17834.jpg?t=st=1712684571~exp=1712688171~hmac=5ea33a93a35c6ea3eaede2f73917ac16643e174814b704bbd2b9ddb3064a5a30&w=1060",
          title: "Winter Wonderland Ice Skating",
          description: "Experience the magic of winter at our Winter Wonderland Ice Skating event! Lace up your skates and glide across the ice with friends and family. Hot cocoa and holiday music provided!",
          date: "Saturday, December 7, 2024",
          time: "1:00 PM - 6:00 PM",
          location: "Ice Rink Park, Main Pavilion",
          eventPlannerType: "Local Event"
        },
        {
          id: 8,
          image: "https://img.freepik.com/free-photo/decorated-wedding-celebration-table-with-guests-seats-outdoors-gardens-with-mountain-view_8353-10887.jpg?t=st=1712684431~exp=1712688031~hmac=2cf1cad59443dc33134f2e5fd40daad27680aaa591c2eddb442a581ccd9639fd&w=900",
          title: "New Year's Eve Gala",
          description: "Ring in the New Year with style at our glamorous New Year's Eve Gala! Enjoy live music, gourmet cuisine, and a champagne toast at midnight. Dress to impress for this unforgettable night!",
          date: "Wednesday, December 31, 2024",
          time: "8:00 PM - 1:00 AM",
          location: "Grand Ballroom, Downtown Hotel",
          eventPlannerType: "Local Event"
        },
      ];
      
  return (
    <>
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center', marginTop:"30px" }}>
            {eventData.map(event => (
                <Card
                    key={event.id}
                    hoverable
                    style={{ width: 300, border: '2px solid white', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
                    cover={<img alt={event.title} src={event.image} style={{ height: 200, objectFit: 'cover'}}/>}
                >
                    <Meta title={event.title} description={event.description} />
                    <p>Date: {event.date}</p>
                    <p>Time: {event.time}</p>
                    <p>Location: {event.location}</p>
                    <Button type="primary" block href={`/eventDetails/${event.id}`}>
                        View Details
                    </Button>
                </Card>
            ))}
        </div>
     {/* <div style={{ display: 'flex', gap:"15px", flexWrap: 'wrap', justifyItems:"center", justifyContent:"center", marginTop:"30px" }}>
    {eventData.map(event => (
      <Card
        key={event.id}
        style={{ width: "300px", height: '100%', marginBottom: 20, boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
        cover={<img alt={event.title} src={event.image} style={{ height: 200, objectFit: 'cover', border: '5px solid white' }} />}
      >
         <Meta
          title={event.title}
          description={
            <>
              <p >{event.description}</p>
              <p>Date: {event.date}</p>
              <p>Time: {event.time}</p>
              <p>Location: {event.location}</p>
            </>
          }
        />
        <Button type="primary" block href={`/event/${event.id}`}>
          View Details
        </Button>
      </Card>
    ))}
  </div> */}
    
    </>
       
   
  )
}

export default EventListing
