import { Form, Input, message, Button } from "antd";
import { useLocation, useNavigate, useNavigation } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const navigation = useNavigation();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  if (navigation.state === "loading") {
    return <progress style={{ width: "56px" }}></progress>;
  }

  const onFinish = async ({ email, password }) => {
    console.log(email, password);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div style={{ marginTop: "3rem", }}>
      <div style={{ display: "flex", justifyContent: "center", gap: "3rem", alignItems: "center", flexWrap: "wrap" }}>

        <div style={{ border: '1px solid black', padding: "15px", borderRadius: "5px" }}>
          <h1>Login</h1>
          <Form
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
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
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
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
        <div >
          <img src="https://i.ibb.co/GRFX5BS/sign-in-8044873-6430782.webp" alt="" style={{ width: "50%" }} />
        </div>

      </div>
    </div>

  );
};

export default Login;
