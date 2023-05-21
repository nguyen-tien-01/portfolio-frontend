import React, { useState, useEffect } from "react"
import { Row, Col } from 'antd';
import todoApi from "../api/todoApi";

var pageNumber = 1
var totalPage = 1;

function Message() {
    const [message, setMessage] = useState([])

    useEffect(() => {
        getAllData();
    }, [])

    const getAllData = async (pagesize = 5, pagenumber = 1) => {
        const dataMessage = await todoApi.getAllMessage({pagesize , pagenumber})
        setMessage(dataMessage.data)
        totalPage = dataMessage.pagination.totalPage
        // console.log(dataMessage)
    }

    const handlePageChange = async (pagesize, pagenumber) => {
        const dataMessage = await todoApi.getAllMessage({ pagesize, pagenumber });
        setMessage(dataMessage.data)
        // console.log(dataMessage)
        // console.log(dataMessage.data)
        pageNumber = dataMessage.pagination.pageNumber
    }

    return (
        <div className="mes">
            <div className="massage">
                <h2>Message</h2>
                <Row className="title_message">
                    <Col className="title_item" span={6}>Name Message</Col>
                    <Col className="title_item" span={4}>Time</Col>
                    <Col className="title_item" span={6}>Email</Col>
                    <Col className="title_item" span={8}>Message</Col>
                </Row>
                {message.map((mes, index) => (
                    <div className="list_message">
                        <li key={index}>
                            <Row >
                                <Col className="mes_item" span={6}>{mes.nameMessage}</Col>
                                <Col className="mes_item" span={4}>{mes.dateTime}</Col>
                                <Col className="mes_item" span={6}>{mes.emailMessage}</Col>
                                <Col className="mes_item" span={8}>{mes.message}</Col>
                            </Row>
                        </li>
                    </div>
                ))}
                 <div className="pageChange">
                    <button className="prev" disabled={pageNumber <= 1} onClick={() => handlePageChange(5, pageNumber -= 1)}>
                        Prev
                    </button>
                    <button className="next" disabled={pageNumber >= totalPage} onClick={() => handlePageChange(5, pageNumber += 1)}>
                        Next
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Message