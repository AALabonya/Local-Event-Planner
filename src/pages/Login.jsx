
import { Form, Input, message } from "antd";
import { useLocation, useNavigate, useNavigation } from "react-router-dom";


const Login = () => {

  const navigate = useNavigate();
  const navigation = useNavigation();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";




  if (navigation.state === "loading") {
    return <progress className="progress w-56"></progress>;
  }

  const onFinish = async ({ email, password }) => {
    
     console.log(email, password);
   
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };


  return (
    <div className="mt-5">
      <div className="flex justify-center lg:flex-row flex-col lg:gap-16 justify-items-center items-center lg:px-44">
        <div className="lg:w-[500px] lg:flex-row flex-col border border-black shadow-2xl rounded-lg">
          <div className="p-2">
            <div className="flex flex-col lg:w-auto border-opacity-50 ">
              <div className="grid card rounded-box place-items-center">
                <div>
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
                          required: true,
                          message: "Please input your email!",
                        },
                        {
                          validator: (rule, value) => {
                            if (!validateEmail(value)) {
                              return Promise.reject(
                                "Please input a valid email address!"
                              );
                            }
                            return Promise.resolve();
                          },
                        },
                      ]}
                    >
                      <Input placeholder="Enter your Email" />
                    </Form.Item>
                    <Form.Item
                      label="Password"
                      name="password"
                      className="mb-5 "
                      rules={[
                        {
                          required: true,
                          message: "Please input your password!",
                        },
                      ]}
                    >
                      <Input.Password placeholder="Enter your password" />
                    </Form.Item>

                    <Form.Item
                      wrapperCol={{
                        offset: 0,
                        span: 10,
                      }}
                    >
                      <button
                        className="btn btn-wide border-2 border-black btn-accent"
                        type="submit"
                      >
                        Login with Email
                      </button>
                    </Form.Item>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login