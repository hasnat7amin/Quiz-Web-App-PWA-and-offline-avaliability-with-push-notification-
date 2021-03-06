import React, { useState } from 'react'
import './../../src/App.css';

function QuestionCard({question, option, handleSubmit,Score}) {
    let [answer, setAnswer] = useState('')
    let getAnswer = (e) =>{
        setAnswer(e.target.value)
    }
    console.log(question,option)
    return (
        <div className="questionCard">
            <h1 className="logo">Quiz</h1>
            <div className='questions'>
                <p className="score">Your Score: {Score}</p>
            <form onSubmit={(e)=>handleSubmit(e,answer)}>

                <h3>Question:</h3>
                <h5>{question}</h5>
                <h3>Options:</h3>
                <div>
                    {option.map((ques,id)=>{
                        return <div key={id}>
                            <input type="radio" id={ques} required name="question" checked={answer === ques}  value={ques} onChange={getAnswer} />
                            <label >{ques}</label>
                        </div>
                    })}
                </div>
                <button className="nextbutton">
                    Next
                </button>
            </form>
            </div>
        </div>
    )
}

export default QuestionCard
