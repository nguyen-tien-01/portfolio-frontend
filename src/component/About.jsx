import React, { useState, useEffect } from "react"
import { Progress, Row, Col } from 'antd';
import todoApi from "../api/todoApi";

function About() {
    const [kiNang, setKiNang] = useState([])
    const [thongTin, setThongTin] = useState([])

    useEffect(() => {
        getAllData();
    }, [])

    const getAllData = async () => {
        const dataKiNang = await todoApi.getAllKiNang()
        const dataThongTin = await todoApi.getAllThongTin()
        setKiNang(dataKiNang)
        setThongTin(dataThongTin)
        console.log(dataThongTin)
    }

    return (
        <div id="about" className="about">
            <Row>
                <Col span={12}>
                    <div className="div_info">
                        <div className="avt">
                            <img src="https://kiemtientuweb.com/ckfinder/userfiles/images/avatar-fb/avatar-fb-1.jpg" alt="" />
                        </div>
                        <ul>
                            <li><b>Họ tên:</b> <span>{thongTin.hoTen}</span> </li>
                            <li><b>Năm sinh:</b> <span>{thongTin.namSinh}</span> </li>
                            <li><b>Email:</b> <span>{thongTin.email}</span> </li>
                            <li><b>Số điện thoại:</b> <span>{thongTin.soDienThoai}</span> </li>

                        </ul>
                    </div>
                </Col>

                <Col span={12}>
                    <div className="div_desc">
                        <h2>Mô tả</h2>
                        <p>{thongTin.moTa}</p>
                    </div>
                </Col>
            </Row>
            
            <Row id='skill'>
                <Col span={24}>
                    <div className="list_skill">
                        <ul className="skill">
                            <h3>Kĩ năng</h3>
                            {kiNang.map((kn, index) => (
                                <div>
                                    <li key={index}>
                                        {kn.tenKiNang}
                                        <Progress percent={kn.diemSo} status="active" />
                                    </li>
                                </div>
                            ))}
                        </ul>
                    </div>
                </Col>
            </Row>


        </div>
    )
}

export default About