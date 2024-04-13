import {useState} from "react"
import InputArea from "./components/InputArea"
import Results from "./components/Results"

const userInput = {
  initialInvestment: 10000,
  annualInvestment: 1200,
  expectedReturn: 6,
  duration: 10
}

function App() {

  const [inputData, setInputData] = useState(userInput)

  const isValid = inputData.duration && inputData.duration > 0

  function updateUserInput(prop, value){
    setInputData(oldState => ({...oldState, [prop]: value}))
  }
  return (
    <>
    <InputArea initValues={inputData} inputState={inputData} updateInput={updateUserInput} />
    {isValid ? <Results data={inputData} /> : <p className="center">Duration only accepts +ve values</p>}
    </>
  )
}

export default App
