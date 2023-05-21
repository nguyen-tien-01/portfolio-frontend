import React, { useState, useEffect } from "react"
import { Button, Slider, Form, Input, Row, Col, InputNumber, message, Popconfirm } from 'antd';
import todoApi from "../api/todoApi";

function Update_skill() {
    const [kiNang, setKiNang] = useState([])
    const [checkAdd, setCheckAdd] = useState(false);

    const confirm = async (id) => {
        const check = message.info('Xóa Thành Công');
        if (check) {
            await todoApi.DleKiNang(id);
            const data = kiNang.filter(x => x.kiNangId !== id);
            setKiNang(data);
        }
    };

    useEffect(() => {
        getAllData();
    }, [])

    const getAllData = async () => {
        const dataKiNang = await todoApi.getAllKiNang()
        setKiNang(dataKiNang)
    }

    const onChange = (value, kn) => {
        const KiNang = {
            kiNangId: kn.kiNangId,
            tenKiNang: kn.tenKiNang,
            diemSo: value
        }
        todoApi.updateKiNang(KiNang)
        console.log(KiNang)

    };

    const addSkill = async (values) => {
        await todoApi.PostKiNang(values)
        console.log(values)
        alert('Thêm Kĩ năng thành công')
        const dataKiNang = await todoApi.getAllKiNang();
        console.log(dataKiNang)
        setKiNang(dataKiNang)
        setCheckAdd(!checkAdd)
    }
    useEffect(() => {
        getAllData();
    }, [checkAdd])


    return (
        <div className="skill">
            <Row>
                <Col span={16}>
                    <div className="update_skill">
                        <h2>Cập nhật kĩ năng</h2>
                        {kiNang.map((kn, index) => (
                            <div>
                                <li key={index}>
                                    <h4 className="item_name_skill">{kn.tenKiNang}</h4>
                                    <Popconfirm
                                        className="btn_del"
                                        placement="topLeft"
                                        title={"Xóa chức năng bạn nhé!"}
                                        description={"Yes or No"}
                                        onConfirm={() => confirm(kn.kiNangId)}
                                        okText="Yes"
                                        cancelText="No"
                                    >
                                        <Button>Xóa</Button>
                                    </Popconfirm>
                                    <Slider className="item_point_skill" defaultValue={kn.diemSo} onChange={(value) => onChange(value, kn)} />
                                </li>
                            </div>
                        ))}
                    </div>
                </Col>
                <Col span={8}>
                    <div className="add_skill">
                        <h2 className="title_add_skill">Thêm kĩ năng mới</h2>
                        <Form
                            initialValues={{
                                remember: true,
                            }}
                            style={{
                                marginTop: 20
                            }}
                            onFinish={addSkill}
                            autoComplete="off"
                        >
                            <Form.Item
                                label="Tên kĩ năng"
                                name="tenKiNang"
                            >
                                <Input placeholder="Tên Kĩ Năng" required />
                            </Form.Item>
                            <Form.Item
                                label="Điểm số"
                                name="diemSo"
                            >
                                <InputNumber min={0} max={100} placeholder="Điểm số (0-100) " required />
                            </Form.Item>

                            <Button type="primary" shape="round" htmlType="submit">Thêm Kĩ Năng</Button>

                        </Form>
                    </div>
                </Col>
            </Row>


        </div>
    )
}

export default Update_skill