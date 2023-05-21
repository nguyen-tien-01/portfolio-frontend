import React, { useState, useEffect } from "react"
import todoApi from "../api/todoApi";


function Work() {
    const [congViec, setCongViec] = useState([])

    useEffect(() => {
        getAllData();
    }, [])

    const getAllData = async () => {
        const dataCongViec = await todoApi.getAllCongViec()
        setCongViec(dataCongViec)
    }

    return (
        <div id="work" className="work">
            <h2>What i do !!!</h2>
            <ul className="list_work">
                {congViec.map((cv, index) => (
                    <li key={index}>
                        <div className="lw_cont">
                            <h3>{cv.tenCongViec}</h3>
                            <p>{cv.moTa}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Work