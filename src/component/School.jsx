import React, { useState, useEffect } from "react"
import todoApi from "../api/todoApi";


function School() {
    const [schools, setSchools] = useState([])

    useEffect(() => {
        getAllData();
    }, [])

    const getAllData = async () => {
        const dataSchools = await todoApi.getAllTruongHoc()
        setSchools(dataSchools)
        console.log(dataSchools)
    }

    return (
        <div id="schools" className="schools">
            <h2>Trường học</h2>
            
            <ul className="list_school">
                {schools.map((school, index) => (
                    <li key={index}>
                        <div className="school_item">
                            <h3>{school.tenTruongHoc}</h3>
                            <p>
                                (<span>{school.thoiGianBatDau}</span>  ----- <span>{school.thoiGianKetThuc}</span>)
                            </p>
                            <p>Xếp loại học lực: {school.hocLuc}</p>
                            <p>{school.moTa}</p>
                        </div>
                        <hr />
                    </li>   
                ))}
            </ul>
        </div>
    )
}

export default School