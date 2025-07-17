// import Usercard from "./components/Usercard"
// import './App.css';
import Qr from "./components/Qrgenerator";
const App = () => {
  return (
    <>
     {/* <div>
      <h1 className="title">User Profiles</h1>
     </div> */}
      {/* <div className="cards">
        <Usercard name="John"  role="front-end developer" city="new york" online={false} profile="./John.jpeg" skills={["HTML","CSS","JavaScript","React Js","Responsive Web Design"]}/>
        <Usercard  name="Paul Walker" role="full-stack developer" city="London" online={true} profile="./Pawl Walker.jpeg" skills={["HTML","CSS","JavaScript","React Js","Node Js","Express","Mongo DB"]} />
        <Usercard name="Steve"  role="Back-end developer" city="Los Angels" online={true} profile="./Steve.jpeg" skills={["Java","Node Js","Mongo DB","MYSQL","APIs"]}/>
        <Usercard name="Martin Roa" role="Back-end developer" city="Los Angels" online={true} profile="./Martin Roa.jpeg" skills={["Python","Flask","Postre SQL","MYSQL","APIs"]}/>
      </div> */}
      <div>
        <Qr/>
      </div>
    </>



  )
}
export default App;