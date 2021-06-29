import React from 'react'
import { useHistory } from 'react-router-dom';
import "./menuSection.css"

export default function Menu() {
    const history = useHistory();
    const getBackToHomePage = () => {
        history.push("/")
    }
    return (
        <div className="menu-section">
            <div className="back-button p-2">
                <button onClick={() => getBackToHomePage()} className="btn btn-warning">Quay lại trang chủ</button>
            </div>
        </div>
    )
}
