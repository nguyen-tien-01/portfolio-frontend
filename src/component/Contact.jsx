import React from "react"
import { Input, Button, Form } from 'antd'
import { BiBeenHere, BiMobileAlt, BiEnvelope } from "react-icons/bi";
import { BsFacebook, BsInstagram, BsTwitter, BsLinkedin } from 'react-icons/bs';
import todoApi from "../api/todoApi";

const { TextArea } = Input;

function Contact() {

    const [form] = Form.useForm();

    const sendMessage = (values) => {
        todoApi.PostMessage(values)
        alert('Bạn đã gửi thông tin thành công!')
        form.resetFields();
    }

    return (
        <div id="contact" className="contact_content">
            <div className="contact">
                <div className="div_message">
                    <h2>Send Message</h2>
                    <Form
                        form={form}
                        initialValues={{
                        remember: true,
                        }}
                        onFinish={sendMessage}
                        autoComplete="off"
                    >
                        <Form.Item
                            name="nameMessage"
                        >
                            <Input placeholder="Your Name" required />
                        </Form.Item>
                        <Form.Item
                            name="emailMessage"
                        >
                            <Input type="email" placeholder="Your Email" required />
                        </Form.Item>
                        <Form.Item
                            name="message"
                        >
                            <TextArea rows={4} placeholder="Message" required />
                        </Form.Item>
                        <Button type="primary" shape="round" htmlType="submit">Send Message</Button>

                    </Form>
                </div>
                <div className="div_contact">
                    <h2>Get in Touch</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolorum dolorem soluta quidem expedita aperiam aliquid at. Totam magni ipsum suscipit amet? Autem nemo esse laboriosam ratione nobis mollitia inventore?</p>
                    <ul className="list_contact">
                        <li> <BiBeenHere /> Cầu Giấy - Hà Nội </li>
                        <li> <BiMobileAlt /> 0941433568 </li>
                        <li> <BiEnvelope /> nguyentien2001@gmai.com </li>
                    </ul>
                </div>
                <div className="socials">
                    <ul>
                        <li>
                            <a href="#"> <BsFacebook className="icon" /> </a>
                        </li>
                        <li>
                            <a href="#"> <BsInstagram className="icon" /> </a>
                        </li>
                        <li>
                            <a href="#"> <BsTwitter className="icon" /> </a>
                        </li>
                        <li>
                            <a href="#"> <BsLinkedin className="icon" /> </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    )
}

export default Contact