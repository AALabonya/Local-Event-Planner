import { useState, useEffect } from 'react';
import { Menu, Button } from 'antd';
import { HomeOutlined, ContactsOutlined, UserOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { Drawer } from 'antd';

const Navbar = () => {
  const [current, setCurrent] = useState('home');
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 576);
  const [isMediumScreen, setIsMediumScreen] = useState(window.innerWidth >= 576 && window.innerWidth < 992);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      setIsSmallScreen(screenWidth < 576);
      setIsMediumScreen(screenWidth >= 576 && screenWidth < 992);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleClick = (e) => {
    setCurrent(e.key);
  };

  const toggleDrawer = () => {
    setIsDrawerVisible(!isDrawerVisible);
  };

  const onClose = () => {
    setIsDrawerVisible(false);
  };

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 5px', height: '64px', borderBottom: '1px solid #CE1446', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
        <div style={{ display: 'flex', alignItems: 'center'}}>
          {(isSmallScreen || isMediumScreen) && (
            // Show the button on small and medium-sized screens
            <Button type="primary" onClick={toggleDrawer} style={{backgroundColor:"#CE1446", color:"#FFF"}} >
              <MenuUnfoldOutlined />
            </Button>
          )}
          <Drawer
            title="Event planner"
            placement="left"
            width={250}
            onClose={onClose}
            open={isDrawerVisible}

          >
            <Menu onClick={handleClick} selectedKeys={[current]} mode="inline" >
              {(isSmallScreen || isMediumScreen) && (
                // Only show on small and medium devices
                <>
                  <Menu.Item key="home" icon={<HomeOutlined />} style={{ color: '#CE1446',  }}>
                    <Link to="/">Home</Link>
                  </Menu.Item>
                  <Menu.Item key="about" icon={<ContactsOutlined />} style={{ color: '#CE1446' }}>
                    <Link to="/about">About</Link>
                  </Menu.Item>
                  <Menu.Item key="contact" icon={<ContactsOutlined />} style={{ color: '#CE1446' }}>
                    <Link to="/contact">Contact</Link>
                  </Menu.Item>
                </>
              )}
            </Menu>
            <div style={{ textAlign: 'center', padding: '10px', borderTop: '1px solid #CE1446' }}>
            <Button type="text" style={{ color: "#CE1446", border: "1px solid #CE1446", fontWeight:"bold", fontSize:"15px"}}  icon={<UserOutlined />}><Link to="/login">Sign In</Link></Button>
          <Button type="text" style={{ marginLeft: '10px', color: "#CE1446", border: "1px solid #CE1446" ,fontWeight:"bold", fontSize:"15px", marginTop:"10px"}} icon={<UserOutlined />}><Link to="/signUp">Sign Up</Link></Button>
            </div>
          </Drawer>
          <Link to="/" style={{display:"flex" , justifyContent:"center", alignItems:"center", cursor:"pointer" }}>
            <img src="https://i.ibb.co/BLdtTBV/culture-logo.jpg" alt="" style={{width:"40px"}} />
            <span style={{ color: 'black', fontSize: '20px', marginLeft: '10px',color: '#CE1446' }}>Event Planner</span>
            
            </Link>
        </div>

        <Menu selectedKeys={[current]} mode="horizontal">
          {!isSmallScreen && !isMediumScreen && (
            // Show only on large devices
            <>
              <Menu.Item key="home" icon={<HomeOutlined />} style={{ color: '#CE1446', }}>
                <Link to="/">Home</Link>
              </Menu.Item>
              <Menu.Item key="about" icon={<ContactsOutlined />} style={{ color: '#CE1446' }}>
                <Link to="/about">About</Link>
              </Menu.Item>
              <Menu.Item key="contact" icon={<ContactsOutlined />} style={{ color: '#CE1446' }}>
                <Link to="/contact">Contact</Link>
              </Menu.Item>
            </>
          )}
        </Menu>

        <div>
        {!isSmallScreen && (
          <>
          <Button type="text" style={{ color: "#CE1446", border: "1px solid #CE1446", fontWeight:"bold", fontSize:"15px"}}  icon={<UserOutlined />}><Link to="/login">Sign In</Link></Button>
          <Button type="text" style={{ marginLeft: '10px', color: "#CE1446", border: "1px solid #CE1446" ,fontWeight:"bold", fontSize:"15px"}} icon={<UserOutlined />}><Link to="/signUp">Sign Up</Link></Button>
          </>
        )}  
        
        </div>
      </div>
    </>
  );
};

export default Navbar;
