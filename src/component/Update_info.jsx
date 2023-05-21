import React, { useState, useEffect } from "react"
import { Button, Form, Input } from 'antd';
import todoApi from "../api/todoApi";



const { TextArea } = Input;

function Update_info() {
    const [thongTin, setThongTin] = useState([])
    
    useEffect(() => {
        getAllData();
    }, [])

    const getAllData = async () => {
        const dataThongTin = await todoApi.getAllThongTin()
        setThongTin(dataThongTin)
    }


    const onFinish = (values) => {
        todoApi.updateThongTin(values)
        alert('Cập nhật thành công!')
        console.log('Success:', values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };




    return (
        <div className="info">
            <div className="update_info">
                <h2>Cập nhật thông tin cá nhân</h2>
                <Form id="form"
                    name="basic"
                    labelCol={{
                        span: 6,
                    }}
                    wrapperCol={{
                        span: 18,
                    }}
                    style={{
                        // maxWidth: 600,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Họ Tên"
                        name="hoTen"
                    >
                        <Input  placeholder= {thongTin.hoTen} />
                    </Form.Item>

                    <Form.Item
                        label="Năm sinh"
                        name="namSinh"
                    >
                        <Input placeholder={thongTin.namSinh} />
                    </Form.Item>

                    <Form.Item
                        label="Email"
                        name="email"
                    >
                        <Input placeholder={thongTin.email} />
                    </Form.Item>

                    <Form.Item
                        label="Số điện thoại"
                        name="soDienThoai"
                    >
                        <Input placeholder={thongTin.soDienThoai} />
                    </Form.Item>
                    <Form.Item
                        label="Mô Tả"
                        name="moTa"
                    >
                        <TextArea rows={4} placeholder={thongTin.moTa} />
                    </Form.Item>

                    <Form.Item
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                        <Button type="primary" htmlType="submit">
                            Cập Nhật
                        </Button>
                    </Form.Item>
                </Form>

            </div>
        </div>
    )
}

export default Update_info