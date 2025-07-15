import "../App.css";

const User = (props) => {
    return (
        <div className="card-container">
            <span className={props.online?"status online":"status offline"}>{props.online?"Online":"Offline"}</span>
            <img src={props.profile} alt="Hat" />
            <h3>{props.name}</h3>
            <h3>{props.city}</h3>
            <p>{props.role}</p>
            <div className="btn">
                <button className="primary msg ">Message</button>
                <button className="primary outline">Follow</button>
            </div>
            <div className="skills">
                <h4>Skills</h4>
                <ul> {props.skills.map((skill,index)=>(
                    <li key={index}>{skill}</li>
                ))}
                </ul>
            </div>
        </div>
    )
}
export default User;