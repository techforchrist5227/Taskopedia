import Header from "./Header"
import Footer from "./Footer"
import Students from "./Students"



function App() {
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
      <Students/>
      <Footer/>
    </div>
  );
}

export default App;
