class Calculator {
  constructor(previousOp, currentOp){
  this.previousOp =previousOp
  this.currentOp = currentOp
  this.clear()

}

clear(){
    this.currentOperand = ''
    this.previousOperand = ''
    this.operation = undefined
  
}
//delete last character 
delete(){
this.currentOperand = this.currentOperand.toString().slice(0, -1)
}
//append numbers to view and prevent multiple '.'
append(num){
if(num === '.' && this.currentOperand.includes('.')) return
this.currentOperand = this.currentOperand.toString() + num.toString()
}

chooseOps(operation){
if(this.currentOperand === '') return 
if(this.previousOperand !== '') {
  this.calculate()
}
this.operation = operation
this.previousOperand = this.currentOperand
this.currentOperand= ''

}

calculate(){
  //result of calcuklation problem 
  let calculation 
  //string into number 
  let prev = parseInt(this.previousOperand) 
  let current = parseInt(this.currentOperand)
  if(isNaN(prev) || isNaN(current)) return 
  switch(this.operation){
    case '+':
      calculation = prev + current
      break
    case '-':
      calculation = prev - current
      break
    case 'x':
      calculation = prev * current
      break
    case '%': 
      calculation = prev / current
      break
    default: 
    return 
  }
  this.currentOperand = calculation
  this.operation = undefined
  this.previousOperand = ''

 
}
getDisplayNum(num){
const stringNum = num.toString()
const intDigits = parseFloat(stringNum.split('.')[0])
const decimal = stringNum.split('.')[1]
let intDisplay
if (isNaN(intDigits)) {
  intDisplay = ''
} else {
  intDisplay = intDigits.toLocaleString('en', { maximumFractionDigits: 0 })
}
if (decimal != null) {
  return `${intDisplay}.${decimal}`
} else {
  return intDisplay
}
}


displayUpdate(){
  this.currentOp.innerText =
   this.getDisplayNum(this.currentOperand)
  if(this.operation != null){
    this.previousOp.innerText =
  this.getDisplayNum.innerText = `${this.previousOperand} ${this.operation}`
  }else {
    this.previousOp.innerText = ''
  }
}
}
//app.js

const numberPad = document.querySelectorAll('.num-pad')
const operator = document.querySelectorAll('.ops')
const solve = document.querySelector('.equals')
const previousOp = document.querySelector('.previous-Op')
const currentOp = document.querySelector('.current-Op')
const deleteButton = document.querySelector('.delete')
const clearButton = document.querySelector('.clear')

const simpCalculator = new Calculator(previousOp, currentOp)


//add event listener for numbers with foreach
numberPad.forEach(button => {
    button.addEventListener("click", () =>{
        simpCalculator.append(button.innerHTML)
        simpCalculator.displayUpdate()
    })
  })
//add eventlistener for operators
operator.forEach( button => {
    button.addEventListener("click", () =>{
        simpCalculator.chooseOps(button.innerText)
        simpCalculator.displayUpdate()
    })
})
  solve.addEventListener('click', button => {
    simpCalculator.calculate()
    simpCalculator.displayUpdate()
  })
  clearButton.addEventListener('click', button => {
    simpCalculator.clear()
    simpCalculator.displayUpdate()
  })

  deleteButton.addEventListener('click', button => {
    simpCalculator.delete()
    simpCalculator.displayUpdate()
  })