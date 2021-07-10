
const suffleArray = (arr)=>{
    return [...arr].sort(()=>0.5 - Math.random())
    
}
 
export const getQuizDetails = async ()=>{
    const res = await fetch('https://opentdb.com/api.php?amount=10&diffculty=easy&type=multiple')
    let {results} = await res.json()
    const quiz = results.map((item)=>{
        return {
            question: item.question,
            answer: item.correct_answer,
            option: suffleArray(item.incorrect_answers.concat(item.correct_answer))
        }
    })
    console.log(quiz)
    return quiz
}
