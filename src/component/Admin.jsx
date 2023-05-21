import React from "react"
import { Outlet } from 'react-router-dom'
import Sidebar from "./Sidebar_admin";
import { Row, Col } from 'antd'



function Admin() {
    return (
        <div className="admin">
            <Row className="admin_control">
                <Col className="sideBarAdmin" span={4}><Sidebar /> </Col>
                <Col className="itemAdmin" span={20}>
                    <Outlet />
                </Col>
            </Row>
        </div>
    )
}

export default Admin 