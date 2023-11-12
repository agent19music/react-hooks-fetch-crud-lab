import React,{useEffect,useState} from "react";
import Questionitem from './QuestionItem'
let updatedQuestions;
function QuestionList() {
const [questions, setQuestions] = useState([])  
   useEffect(()=>{
    fetch('http://localhost:4000/questions')
    .then((res)=>res.json())
    .then((res)=>setQuestions(res))
   })

  function handleDelete(id){
    fetch(`http://localhost:4000/questions/${id}`,{
      method : 'DELETE',
    })
    .then(()=>{
      let updatedquestions = questions.filter((question) => question.id !== id);
      setQuestions(updatedquestions);
    })
  } 
 
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{  updatedQuestions.map((question) =>(
      <Questionitem key={question.id} question={question}
        handleDeleteClick={handleDelete}
      
      />

        ) )}</ul>
    </section>
  );
}

export default QuestionList;
