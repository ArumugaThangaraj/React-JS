import { useState } from "react";
import "../css/qr.css"
const Qrgenerator = () => {
    const [loading, setLoading] = useState(false);
    const [img, setImg] = useState("");
    const [qrData, setqrData] = useState("Josheph");
    const [qrSize, setSize] = useState("150");
    async function generateQR() {
        setLoading(true);
        try {
            const url = `https://api.qrserver.com/v1/create-qr-code/?size=${qrSize}x${qrSize}&data=${encodeURIComponent(qrData)}`;
            setImg(url);
        }catch (error) {
            console.error("Error in QR Code generating",error);
        }
        finally {
            setLoading(false);
        }
    }
    function downloadQR(){
        if (!img) {
            alert("Please generate a QR code first.");
            return;
        }
        fetch(img)
        .then((response)=> response.blob())
        .then((blob)=>{
            const link=document.createElement("a");
            link.href=URL.createObjectURL(blob);
            link.download="qr-code.png";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }).catch((error)=>{
            console.error("Error downloading QR code", error);
            alert("Failed to download QR code.");
        });
    }

    return (
        <div className="app-body">
            <h2>QR Generator</h2>
            {loading && <p>Please wait..</p>}
            {img && <img src={img} alt="Generated QR Code"/>}
            <div>
                <label htmlFor="datainput">Data for QR</label>
                <input type="text" value={qrData} onChange={(e) => {
                    setqrData(e.target.value);
                }} id="datainput" placeholder="Enter your data or link" required:true />
                <label htmlFor="sizeinput" >Image Size(e.g.150)</label>
                <input type="number" value={qrSize} onChange={(e) => {
                    setSize(e.target.value);
                }
                } id="sizeinput" placeholder="Enter your size" />
                <button className="gr-btn" onClick={generateQR} disabled={loading}>Generate QR</button>
                <button className="dd-btn" onClick={downloadQR}>Download QR</button>
            </div>
        </div>
    )
}
export default Qrgenerator;
