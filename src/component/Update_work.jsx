import React, { useState, useEffect } from "react"
import { Button, Input, message, Popconfirm, Modal } from 'antd';
import todoApi from "../api/todoApi";


const { TextArea } = Input;


function Update_work() {
    const [congViec, setCongViec] = useState([])
    const [checkAdd, setCheckAdd] = useState(false);

    const [tenCongViec, setTenCongViec] = useState("")
    const [moTa, setMoTa] = useState("")

    const [defaultTenCv, setDefaultTenCv] = useState('')
    const [defaultMoTa, setDefaultMoTa] = useState('')
    const [cvId, setCvId] = useState()



    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        getAllData();
    }, [])


    const showModal = (cv) => {
        setDefaultTenCv(cv.tenCongViec)
        setDefaultMoTa(cv.moTa)
        setCvId(cv.congViecId)
        setIsModalOpen(true);

    };
    const handleOk = async () => {
        const congViec = {
            congViecId: cvId,
            tenCongViec: tenCongViec == "" ? defaultTenCv : tenCongViec,
            moTa: moTa == "" ? defaultMoTa : moTa
        }
        todoApi.updateCongViec(congViec)
        alert("Sửa Công việc thành công!")
        setIsModalOpen(false);
      
        const dataCongViec = await todoApi.getAllCongViec()
        
        setCongViec(dataCongViec)       
        setCheckAdd(!checkAdd)
        setTenCongViec(prev => prev = "")
        setMoTa(prev => prev = "")
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const confirm = async (id) => {
        const check = message.info('Xóa Thành Công');
        if (check) {
            await todoApi.DleCongViec(id);
            const data = congViec.filter(x => x.congViecId !== id);
            setCongViec(data);
        }
    };


    const getAllData = async () => {
        const dataCongViec = await todoApi.getAllCongViec()
        setCongViec(dataCongViec)
    }

    const addCongViec = async () => {
        if(tenCongViec == "" || moTa == ""){
            alert("Bạn cần điền đầy đủ thông tin Tên Công việc và Mô tả")
            return
        }
        const values = {
            tenCongViec: tenCongViec,
            moTa: moTa
        }
        await todoApi.PostCongViec(values)
        alert('Thêm Công Việc thành công')
        const dataCongViec = await todoApi.getAllCongViec();
        setCongViec(dataCongViec)
        setCheckAdd(!checkAdd)
    }

    useEffect(() => { 
        getAllData();
    }, [checkAdd])

    


    return (
        <div className="updateWork">
            <div className="update_work">
                <h2>Cập nhật công việc</h2>
                <div className="formCV">
                    <h4>Tạo một công việc mới</h4>
                    <label>Tên công việc:</label>
                    <Input onChange={(e) => setTenCongViec(e.target.value)} placeholder="Tên công việc" />
                    <label>Mô tả:</label>
                    <TextArea onChange={(e) => setMoTa(e.target.value)} placeholder="Mô tả" />
                    <Button onClick={addCongViec} >Thêm</Button>
                </div>
                {congViec.map((cv, index) => (
                    <div>
                        <li key={index}>
                            <h4 className="item_name_work">{cv.tenCongViec}</h4>
                            <p className="item_desc">{cv.moTa}</p>

                            <Popconfirm
                                className="btn_del"
                                placement="topLeft"
                                title={"Xóa công việc này bạn nhé!"}
                                description={"Yes or No"}
                                onConfirm={() => confirm(cv.congViecId)}
                                okText="Yes"
                                cancelText="No"
                            >
                                <Button className="btnDle">Xóa</Button>
                            </Popconfirm>
                            <Button className="btnUpdate" onClick={() => showModal(cv)}>Sửa</Button>
                        </li>
                    </div>

                ))}
                <Modal    title="Cập nhật công việc" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                    <Input value={tenCongViec} onChange={(e) => setTenCongViec(e.target.value)} placeholder={defaultTenCv} />
                    <TextArea value={moTa} onChange={(e) => setMoTa(e.target.value)} placeholder  ={defaultMoTa}   />
                </Modal>
            </div>
        </div>
    )
}

export default Update_work