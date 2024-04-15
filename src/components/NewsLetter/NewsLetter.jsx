
import { Button, Input, Select, Space } from 'antd';
const { Search } = Input;
const NewsLetter = () => {
    const handleSubmit = (value) => {
        const email = value;
        // Process email...
    };

    return (
        <div
            style={{
                backgroundImage: `url('https://i.ibb.co/b1cnRPs/getty-479977238-253066.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundAttachment: 'fixed',
            }}
        >
            <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', height: '100%', padding: '1rem',  marginBottom:"40px" }}>
                <div style={{ display: 'flex', flexWrap:"wrap", justifyContent: "space-evenly", alignItems: 'center', marginTop: "3rem" }}>
                    <div>
                        <p style={{ textTransform: 'uppercase', fontSize: '2xl', fontWeight: '600', color: '#B0C4DE', textAlign: 'center' }}>
                            FOR EXCLUSIVE BENEFITS,<br /> INSIDER NEWS AND OUR UPCOMING<br /> EVENTS SUBSCRIBE for our newsletter
                        </p>
                    </div>

                    <div style={{ display: "flex-1", marginTop: '1rem', marginBottom: '1rem', width: "30%" }}>
                        <Space.Compact style={{ width: '100%' ,}}>
                            <Input defaultValue="your email address" />
                            <Button style={{ backgroundColor: '#CE1446', color: "#FFF", fontSize: "16px", height:"50px" }}>Subscribe</Button>
                        </Space.Compact>
                        <p style={{ color: '#FFFFFF', textAlign: 'center'}}>
                            Your personal data is to be used by the legal entity local Events in order to provide you with the local Events planner services that you requested, to send you information on local Events planner activities and services and to provide offers tailored to your interests.
                        </p>
                        
                    </div>

                </div>
            </div>
        </div>
    );
};

export default NewsLetter;
