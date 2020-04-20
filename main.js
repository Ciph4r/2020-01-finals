const makeRunOn = (str) => {
let answer = str.split('.').join(',').split('')
if (answer[answer.length -1] === ',') {
  answer[answer.length -1] = '.'
}
return answer.join('')
}

const stringOut= (str) => {
  let newstr = []
  for (const letter of str.split('')){
    if (letter !==' '){
      newstr.push(letter)
  }
}
  return newstr.join(' ')
}

const  nightOwls = (array) => {
  return [...array].filter( x => x.localTime >= 100 && x.localTime <=400 && x.asleep === false)
}

const totalScore = (array) => {
  let number = 0
  array.map( x =>{ if (!x.multiplier){
    x.multiplier = 1
  }
  number += x.multiplier * x.score
}
  )
  return number
}

const getToBed = (array) => {
 let newarray = [...array]
for (const obj of newarray){
  if (obj.localTime >=100 && obj.localTime <= 400){
    obj.asleep = true
  }
}
return newarray
}



const findIndices = (array , func) => {
  const gg = []
  let newarray = array.map(func)
  for (let i = 0 ; i < newarray.length ; i++){
    if (newarray[i]){
      gg.push(i)
    }
  }
  return gg
}

const Faqtory = () => {
  return {
    questions: [],
    addQuestion: function (text){
      let obj = {
        text,
        answered: false,
        id: this.questions.length
      }
      this.questions.push(obj)
    },
    answerQuestion: function (id , text){
      for (const x of this.questions){
        if (x.id === id && !x.answered){
         x.answer= text
        }
      }
    }
  }
}



if (typeof makeRunOn === 'undefined') {
  makeRunOn = undefined;
}

if (typeof stringOut === 'undefined') {
  stringOut = undefined;
}

if (typeof nightOwls === 'undefined') {
  nightOwls = undefined;
}

if (typeof totalScore === 'undefined') {
  totalScore = undefined;
}

if (typeof getToBed === 'undefined') {
  getToBed = undefined;
}

if (typeof findIndices === 'undefined') {
  findIndices = undefined;
}

if (typeof Faqtory === 'undefined') {
  Faqtory = undefined;
}

module.exports = {
  makeRunOn,
  stringOut,
  nightOwls,
  totalScore,
  getToBed,
  findIndices,
  Faqtory,
}
