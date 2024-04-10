import { useState, useEffect } from 'react';
import { Menu, Button } from 'antd';
import { HomeOutlined, ContactsOutlined, UserOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { Drawer } from 'antd';

const Navbar = () => {
  const [current, setCurrent] = useState('home');
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 576); // Check if the screen is small initially
  const [isMediumScreen, setIsMediumScreen] = useState(window.innerWidth >= 576 && window.innerWidth < 992); // Check if the screen is medium initially

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      setIsSmallScreen(screenWidth < 576);
      setIsMediumScreen(screenWidth >= 576 && screenWidth < 992);
    };

    handleResize(); // Check initial size
    window.addEventListener('resize', handleResize); // Add listener for window resize
    return () => window.removeEventListener('resize', handleResize); // Cleanup on unmount
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
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 5px', height: '64px', borderBottom: '1px solid #e8e8e8', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {(isSmallScreen || isMediumScreen) && ( // Show the button on small and medium-sized screens
            <Button type="primary" onClick={toggleDrawer}>
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
            <Menu onClick={handleClick} selectedKeys={[current]} mode="inline">
              {(isSmallScreen || isMediumScreen) && ( // Only show on small and medium devices
                <>
                  <Menu.Item key="home" icon={<HomeOutlined />}>
                    <Link to="/">Home</Link>
                  </Menu.Item>
                  <Menu.Item key="about" icon={<UserOutlined />}>
                    <Link to="/about">About</Link>
                  </Menu.Item>
                  <Menu.Item key="contact" icon={<ContactsOutlined />}>
                    <Link to="/contact">Contact</Link>
                  </Menu.Item>
                </>
              )}
            </Menu>
            <div style={{ textAlign: 'center', padding: '10px', borderTop: '1px solid #f0f0f0' }}>
              <Button type="text" icon={<UserOutlined />}><Link to="/login">Sign In</Link></Button>
              <Button type="text" style={{ marginLeft: '10px' }}><Link to="/signUp">Sign Up</Link></Button>
            </div>
          </Drawer>
          <span style={{ color: 'black', fontSize: '20px', marginLeft: '10px' }}>Event Planner</span>
        </div>

        <Menu selectedKeys={[current]} mode="horizontal">
          {!isSmallScreen && !isMediumScreen && ( // Show only on large devices
            <>
              <Menu.Item key="home" icon={<HomeOutlined />}>
                <Link to="/">Home</Link>
              </Menu.Item>
              <Menu.Item key="about" icon={<ContactsOutlined />}>
                <Link to="/about">About</Link>
              </Menu.Item>
              <Menu.Item key="contact" icon={<ContactsOutlined />}>
                <Link to="/contact">Contact</Link>
              </Menu.Item>
            </>
          )}
        </Menu>

        <div>
        <Button type="text" icon={<UserOutlined />}><Link to="/login">Sign In</Link></Button>
              <Button type="text" style={{ marginLeft: '10px' }}><Link to="/signUp">Sign Up</Link></Button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
