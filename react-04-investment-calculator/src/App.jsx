import { useState } from "react";
import Header from "./components/Header"
import Results from "./components/Results"
import UserInput from "./components/UserInput"

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  });

  const inputIsValid = userInput.duration > 0;

  function handleChange(event) {
    const { name, value } = event.target;
    setUserInput(prevInput => ({
      ...prevInput,
      [name]: +value
    }));
  }

  return (
    <>
      <Header />
      <UserInput input={userInput} onChange={handleChange} />
      {inputIsValid
        ? <Results input={userInput} />
        : <p className="center">Please enter a duration greater than zero.</p>
      }
    </>
  )
}

export default App
