// import { useState } from "react";
import "../css/qr.css"
const Qrgenerator = () => {
    return (
        <div className="app-body">
            <h2>QR Generator</h2>
            <img src="./John.jpeg" />
            <div>
                <label htmlFor="datainput">Data for QR</label>
                <input type="text" id="datainput" placeholder="Enter your data or link" />
                <label htmlFor="sizeinput">Image Size(e.g.150)</label>
                <input type="text" id="sizeinput" placeholder="Enter your size" />
                <button className="gr-btn" >Generate QR</button>
                <button className="dd-btn">Download QR</button>
            </div>
        </div>
    )
}
export default Qrgenerator;
