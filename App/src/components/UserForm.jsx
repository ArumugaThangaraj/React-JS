import "../css/UserForm.css";
import { useState } from "react";
const UserForm = () => {
    const [user, setUser] = useState({
        name: "Ram",
        age: 25,
        gender: "Male",
        isMarried: true,
        country: "India",
    });
    function changeHandler(e){
        const name = e.target.name;
        const age = document.getElementById("age");
        if(age>=120){
            console.log(age);
        }
        else{
            console.log("Error")
        }
        const value = e.target.value === "checkbox"? e.target.checked : e.target.value;
        setUser({...user,[name]:value})
    }
    
    return (
        <div className="bg">
            <h1>UserForm</h1>
            <table>
                <tr>
                    <td>Name</td>
                    <td>{user.name}</td>
                </tr>
                <tr>
                    <td>Age</td>
                    <td>{user.age}</td>
                </tr>
                <tr>
                    <td>Gender</td>
                    <td>{user.gender}</td>
                </tr>
                <tr>
                    <td>Marial Status</td>
                    <td>{user.isMarried ? "Married" : "Not Married"}</td>
                </tr>
                <tr>
                    <td>Country</td>
                    <td>{user.country}</td>
                </tr>
            </table>
            <form>
                <input type="text" name="name" value={user.name} id="name"  onChange={changeHandler} placeholder="Enter Your name" />
                <input type="number" id="age" name="age" value={user.age}  placeholder="Enter Your age" onChange={changeHandler}/>
                <div>
                    <label>
                        <input type="radio" name="gender" value="Male" checked={user.gender == "Male"} onChange={changeHandler}/>
                        Male</label>
                    <label>
                        <input type="radio" name="gender" value="Female" checked={user.gender == "Female"} onChange={changeHandler}/>
                        Female</label>
                        <label htmlFor="isMarried">
                            <input type="checkbox" onChange={changeHandler} name="isMarried" id="isMarried" checked={user.isMarried} />
                            isMarried
                        </label>
                </div>
                <div>
                    <label>Country</label>
                    <select name="country" id="country" onChange={changeHandler}>
                        <option value="India">India</option>
                        <option value="West Indians">West Indians</option>
                        <option value="South Africa">South Africa</option>
                    </select>
                </div>
            </form>
        </div>
    )
}
export default UserForm;
