import { Button, Form, Input } from "antd";
import { useLocation, useNavigate, useNavigation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createUser } from "../redux/features/user/userSlice";

const Registration = () => {

  const navigate = useNavigate(); // Import useNavigate hook to redirect after signup
  const navigation = useNavigation();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const dispatch = useDispatch()
  if (navigation.state === "loading") {
    return <progress className="progress w-56"></progress>;
  }

  const onFinish = async (name, email, password) => {
    console.log(name, email, password);
    await dispatch(
      createUser({
        name,
        email,
        password
      })
    );
    // Further actions after form submission
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };



  

  return (
    <div style={{ display: "flex", justifyContent: "center", textAlign: "center", flexWrap: "wrap", marginTop: "6rem" }}>

      <div style={{ border: '1px solid black', padding: "15px", borderRadius: "5px" }}>
        <h1>signUp</h1>
        <Form
          label="signup"
          name="signup"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Name"
            name="name"
            className="mb-4"
            rules={[{ required: true, message: "Please input your name!" }]}
          >
            <Input placeholder="Enter your Name" />
          </Form.Item>
         
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                type: 'email',
                message: 'Please enter a valid email address',
              },
              {
                required: true,
                message: 'Please input your email!',
              },
            ]}
          >
            <Input placeholder="Enter your Email" />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            className="mb-5 "
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password placeholder="Enter your password" />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 0, span: 24 }}>
            <Button type="primary" htmlType="submit" style={{ width: "100%", fontSize: "0.875rem", fontWeight: "500", color: "white", backgroundColor: "#CE1446", borderRadius: "0.5rem", border: "none", cursor: "pointer" }}>
              SignUp
            </Button>
          </Form.Item>
        </Form>
      </div>
      <div>
        <img src="https://i.ibb.co/xqsxXBd/Mobile-login.png" alt="" style={{ width: "50%" }} />
      </div>
    </div>
  );
};

export default Registration;
