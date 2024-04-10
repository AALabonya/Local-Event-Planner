
import { Button, Form, Input, Upload, message } from "antd";
import { useLocation, useNavigate, useNavigation } from "react-router-dom";

import { UploadOutlined } from "@ant-design/icons";
import { useState } from "react";

const Registration = () => {
   
    const navigate = useNavigate(); // Import useNavigate hook to redirect after signup
    const navigation = useNavigation();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const [fileList, setFileList] = useState([]);
  
    if (navigation.state === "loading") {
      return <progress className="progress w-56"></progress>;
    }
  
    const onFinish = async (values) => {
      console.log(values);
      const data = new FormData();
      data.append("firstName", values.firstName);
      data.append("lastName", values.lastName);
      data.append("email", values.email);
      data.append("password", values.password);
      data.append("age", values.age);
      data.append("address", values.address);
      data.append("city", values.city);
      data.append("postalCode", values.postalCode);
      data.append("images", fileList[0].originFileObj);
  
     
     
    };
  
    const onFinishFailed = (errorInfo) => {
      console.log("Failed:", errorInfo);
    };
  
    const normFile = (e) => {
      setFileList(e.fileList);
      // console.log(e.fileList);
      if (Array.isArray(e)) {
        return e;
      }
      return e?.fileList;
    };
  
    const props = {
      multiple: false,
      onRemove: (file) => {
        const index = fileList.indexOf(file);
        const newFileList = fileList.slice();
        newFileList.splice(index, 1);
        setFileList(newFileList);
      },
      beforeUpload: () => {
        return false;
      },
      fileList,
    };
  
  
  return (
    <div >
            <div>
              <div style={{padding:"30px", }}>
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
                    label="First Name"
                    name="firstName"
                    className="mb-4"
                    rules={[
                      {
                        required: true,
                        message: "Please input your username!",
                      },
                    ]}
                  >
                    <Input placeholder="Enter your FirstName" />
                  </Form.Item>
                  <Form.Item
                    label="Last Name"
                    name="lastName"
                    className="mb-4"
                    rules={[
                      {
                        required: true,
                        message: "Please input your username!",
                      },
                    ]}
                  >
                    <Input placeholder="Enter your FirstName" />
                  </Form.Item>
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
                    name="age"
                    label="Age"
                    rules={[{ required: true }]}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    name="user_image"
                    valuePropName="fileList"
                    label="Image"
                    getValueFromEvent={normFile}
                    rules={[
                      {
                        required: true,
                        message: "Please upload a Image!",
                      },
                    ]}
                  >
                    <Upload
                      name="logo"
                      action="/upload.do"
                      listType="picture"
                      {...props}
                    >
                      <Button icon={<UploadOutlined />}>
                        Click to upload Image
                      </Button>
                    </Upload>
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
                    label="Address"
                    name="address"
                    className="mb-5 "
                    rules={[
                      {
                        required: true,
                        message: "Please input your location!",
                      },
                    ]}
                  >
                    <Input placeholder="Enter your location" />
                  </Form.Item>
                  <Form.Item
                    label="City"
                    name="city"
                    className="mb-5 "
                    rules={[
                      {
                        required: true,
                        message: "Please input your city!",
                      },
                    ]}
                  >
                    <Input placeholder="Enter your city" />
                  </Form.Item>
                  <Form.Item
                    label="Postal Code"
                    name="postalCode"
                    className="mb-5 "
                    rules={[
                      {
                        required: true,
                        message: "Please input your postal code!",
                      },
                    ]}
                  >
                    <Input placeholder="Enter your postal code" />
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
                      SignUp
                    </button>
                  </Form.Item>
                </Form>
              </div>
            </div>
        
        </div>
  )
}

export default Registration
