import Question from "./Question";
import questions from "./data"
function App() {
  console.log(questions)
  return (
    <div className="App">
      <main>
        <div className="container">
        <h3>question and answers about login</h3>
       <div className="info">
       {questions.map((question) => {
          const {id,title,info} = question;
          return <Question id={id}  info={info} title = {title}/>
        })}
       </div>
        </div>
      </main>

    </div>
  );
}

export default App;
