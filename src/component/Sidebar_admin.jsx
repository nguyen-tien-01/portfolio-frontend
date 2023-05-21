import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
        <div>
            <ul className="nav">
                <li className="nav-item">
                    <Link to="/admin" className="nav-link">Thông tin cá nhân</Link>
                </li>
                <li className="nav-item">
                    <Link to="/admin/kinang" className="nav-link">Kĩ Năng</Link>
                </li>
                <li className="nav-item">
                    <Link to="/admin/update-school" className="nav-link">Trường học</Link>
                </li>
                <li className="nav-item">
                    <Link to="/admin/update-work" className="nav-link">Công Việc</Link>
                </li>
                <li className="nav-item">
                    <Link to="/admin/message" className="nav-link">Message</Link>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar