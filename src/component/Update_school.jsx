import React, { useState, useEffect } from "react"
import { Button, Input, message, Popconfirm, Modal, DatePicker, Form } from 'antd';
import todoApi from "../api/todoApi";


const { TextArea } = Input;


function Update_school() {
    const [schools, setSchools] = useState([])
    const [checkAdd, setCheckAdd] = useState(false);
    const [form] = Form.useForm();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [schoolHienTai, setSchoolHienTai] = useState()



    useEffect(() => {
        getAllData();
    }, [])
    const getAllData = async () => {
        const dataSchools = await todoApi.getAllTruongHoc()
        setSchools(dataSchools)
    }

    const confirm = async (id) => {
        const check = message.info('Xóa Thành Công');
        if (check) {
            await todoApi.DleTruongHoc(id);
            const data = schools.filter(x => x.truongHocId !== id);
            setSchools(data);
        }
    };

    const addSchool = async (values) => {
        console.log('Success:', values);

        todoApi.PostTruongHoc(values)
        alert('Thêm thành công!')
        const data = await todoApi.getAllTruongHoc();
        setSchools(data)
        setCheckAdd(!checkAdd)
        form.resetFields();
    };

    const updateSchool = async (values) => {
        const scl = {
            truongHocId: schoolHienTai.truongHocId,
            tenTruongHoc: values.tenTruongHoc != undefined ? values.tenTruongHoc : schoolHienTai.tenTruongHoc,
            thoiGianBatDau: values.thoiGianBatDau != undefined ? values.thoiGianBatDau : schoolHienTai.thoiGianBatDau,
            thoiGianKetThuc: values.thoiGianKetThuc != undefined ? values.thoiGianKetThuc : schoolHienTai.thoiGianKetThuc,
            hocLuc: values.hocLuc != undefined ? values.hocLuc : schoolHienTai.hocLuc,
            moTa: values.moTa != undefined ? values.moTa : schoolHienTai.moTa
        }
        todoApi.updateTruongHoc(scl)
        alert("Cập nhật thành công!")
        setSchoolHienTai()

        const dataSchool = await todoApi.getAllCongViec()
        setSchools(dataSchool)
        setCheckAdd(!checkAdd)

        setIsModalOpen(false)
        form.resetFields();
    }

    const showModal = (school) => {
        setIsModalOpen(true);
        setSchoolHienTai(school)

    };

    // const handleOk = () => {
    //     updateSchool()
    // }

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    useEffect(() => {
        getAllData();
    }, [checkAdd])




    return (
        <div className="updateSchool">
            <div className="update_school">
                <h2>Cập nhật trường học</h2>
                <div className="formSchool">
                    <h4>Thêm một trường học</h4>
                    <Form id="form"
                        form={form}
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
                        onFinish={addSchool}
                        // onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <Form.Item
                            required
                            label="Tên trường học"
                            name="tenTruongHoc"
                        >
                            <Input placeholder="Tên trường học" required />
                        </Form.Item>

                        <Form.Item
                            required
                            label="Thời gian bắt đầu"
                            name="thoiGianBatDau"
                        >
                            <Input placeholder="Thời gian bắt đầu" required />
                        </Form.Item>

                        <Form.Item
                            label="Thời gian kết thúc"
                            name="thoiGianKetThuc"
                        >
                            <Input placeholder="Thời gian kết thúc" />
                        </Form.Item>

                        <Form.Item
                            required
                            label="Học Lực"
                            name="hocLuc"
                        >
                            <Input placeholder="Xếp loại học lực" required />
                        </Form.Item>
                        <Form.Item
                            label="Mô Tả"
                            name="moTa"
                        >
                            <TextArea rows={4} placeholder="Mô tả" />
                        </Form.Item>

                        <Form.Item
                            wrapperCol={{
                                offset: 8,
                                span: 16,
                            }}
                        >
                            <Button type="primary" htmlType="submit" shape="round">
                                Thêm
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
                {schools.map((school, index) => (
                    <div>
                        <li key={index}>
                            <h4 className="item_name_work">{school.tenTruongHoc}</h4>
                            <p>
                                (<span>{school.thoiGianBatDau}</span>  ----- <span>{school.thoiGianKetThuc}</span>)
                            </p>
                            <p>Xếp loại học lực: {school.hocLuc}</p>
                            <p>{school.moTa}</p>

                            <Popconfirm
                                className="btn_del"
                                placement="topLeft"
                                title={"Xóa trường học này bạn nhé!"}
                                description={"Yes or No"}
                                onConfirm={() => confirm(school.truongHocId)}
                                okText="Yes"
                                cancelText="No"
                            >
                                <Button className="btnDle">Xóa</Button>
                            </Popconfirm>
                            <Button className="btnUpdate" onClick={() => showModal(school)}>Sửa</Button>
                        </li>
                    </div>

                ))}
                <Modal title="Cập nhật trường học" open={isModalOpen} onCancel={handleCancel}>
                    <Form id="form"
                        form={form}
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
                        onFinish={updateSchool}
                        // onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <Form.Item
                            label="Tên trường học"
                            name="tenTruongHoc"
                        >
                            <Input placeholder="Tên trường học" />
                        </Form.Item>

                        <Form.Item
                            label="Thời gian bắt đầu"
                            name="thoiGianBatDau"
                        >
                            <Input placeholder="Thời gian bắt đầu" />
                        </Form.Item>

                        <Form.Item
                            label="Thời gian kết thúc"
                            name="thoiGianKetThuc"
                        >
                            <Input placeholder="Thời gian kết thúc" />
                        </Form.Item>

                        <Form.Item
                            label="Học Lực"
                            name="hocLuc"
                        >
                            <Input placeholder="Học Lực" />
                        </Form.Item>
                        <Form.Item
                            label="Mô Tả"
                            name="moTa"
                        >
                            <TextArea rows={4} placeholder="Mô Tả" />
                        </Form.Item>

                        <Form.Item
                            wrapperCol={{
                                offset: 8,
                                span: 16,
                            }}
                        >
                            <Button type="primary" htmlType="submit" shape="round">
                                Cập nhật
                            </Button>
                        </Form.Item>
                    </Form>
                </Modal>
            </div>
        </div>
    )
}

export default Update_school