import Header from "./Layout/Header"
import Footer from "./Layout/Footer"
import Students from "./Students"
import faker from "@faker-js/faker"
import MainBody from "./MainBody"



function App() {
  const randomNum = Math.floor(Math.random()*1000)
  const whatWeWillLearn = "React JS";
  const totalLecture = 3;
  
  return (
    <div className="App">
      

      <Header/>
      <body>
        <h3>{whatWeWillLearn} The Best JS Framework</h3>
        <p>Total Lecture - {totalLecture}</p>
        <ul>
          <li>Call Ben</li>
          <li>Go to Walmart</li>
        </ul>
        <div>
          Enter Task <input maxLength={3} readOnly={false} placeholder={"Enter"}></input>
        </div>
        <button id="submitButton"></button>
      </body>
      <MainBody/>
      <Footer/>
    </div>
  );
}

export default App;
