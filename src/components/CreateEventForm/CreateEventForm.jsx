import React, { useContext, useState } from 'react';
import { Form, Input, DatePicker, Button, Upload, message } from 'antd';
import moment from 'moment'; // Import moment library
import { useDispatch } from 'react-redux';
import { addEvent } from '../../redux/features/event/eventSlice';

const CreateEventForm = () => {

  const [fileList, setFileList] = useState([]);
  const dispatch = useDispatch();

  // Retrieve date and time from localStorage
  const savedDate = localStorage.getItem('eventDate');
  const savedTime = localStorage.getItem('eventTime');

  // Set default date and time based on localStorage or current date and time
  const defaultDate = savedDate ? moment(savedDate, 'YYYY-MM-DD') : moment();
  const defaultTime = savedTime ? moment(savedTime, 'HH:mm') : moment();

  const onFinish = (values) => {
    const existingData = JSON.parse(localStorage.getItem('data')) || [];
    existingData.push(values);
    localStorage.setItem('data', JSON.stringify(existingData));
    dispatch(addEvent(existingData));

    // Save date and time to localStorage
    localStorage.setItem('eventDate', values.eventDate.format('YYYY-MM-DD'));
    localStorage.setItem('eventTime', values.eventTime.format('HH:mm'));

    // Show success message
    message.success('Event posted successfully!');
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const normFile = (e) => {
    setFileList(e.fileList);
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };


  return (
    <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", textAlign: "center", marginTop: "6rem" }}>
      {/* Form */}
      <div style={{ width: "100%", maxWidth: "600px", marginRight: "2rem", marginBottom: "2rem" }}>
        <Form
          name="createEventForm"
          initialValues={{
            eventDate: defaultDate,
            eventTime: defaultTime
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Event Title"
            name="title"
            rules={[{ required: true, message: 'Please input the event title!' }]}
          >
            <Input placeholder="Enter the event title" />
          </Form.Item>

          <Form.Item
            label="Description"
            name="description"
            rules={[{ required: true, message: 'Please input the event description!' }]}
          >
            <Input.TextArea placeholder="Enter the event description" />
          </Form.Item>
          <Form.Item
            name="user_image"
            valuePropName="fileList"
            label="Image"
            getValueFromEvent={normFile}
            rules={[{ required: true, message: "Please upload an Image!" }]}
          >
            <Upload name="logo" action="/upload.do" listType="picture">
              <Button>Click to upload Image</Button>
            </Upload>
          </Form.Item>
          <Form.Item
            label="Event Date"
            name="eventDate"
            rules={[{ required: true, message: 'Please select the event date!' }]}
          >
            <DatePicker style={{ width: '100%' }} />
          </Form.Item>

          <Form.Item
            label="Event Time"
            name="eventTime"
            rules={[{ required: true, message: 'Please select the event time!' }]}
          >
            <DatePicker.TimePicker style={{ width: '100%' }} format="HH:mm" />
          </Form.Item>

          <Form.Item
            label="Location"
            name="location"
            rules={[{ required: true, message: 'Please input the event location!' }]}
          >
            <Input placeholder="Enter the event location" />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit" style={{ backgroundColor: "#CE1446", color: "#FFF" }}>
              Create Event
            </Button>
          </Form.Item>
        </Form>
      </div>

      
      <div style={{ width: "100%", maxWidth: "400px" }}>
        <img src="https://i.ibb.co/kgrBssT/maxresdefault.jpg" alt="" style={{ width: "100%" }} />
      </div>
    </div>
  );
};


export default CreateEventForm;
