import { useState } from "react";
import Button from "./Button";
import Input from "./Input";

export default function AuthInputs() {
  const [input, setInput] = useState({
    email: '',
    password: ''
  });
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(e) {
    const { name, value } = e.target;
    setInput(prevInput => ({
      ...prevInput,
      [name]: value
    }))
  }

  function handleLogin() {
    setSubmitted(true)
  }

  const invalidEmail = submitted && !input.email.includes('@');
  const invalidPassword = submitted && input.password.trim().length < 6;

  return (
    <div id="auth-inputs" className="w-full max-w-sm p-8 mx-auto rounded shadow-md bg-gradient-to-b from-stone-700 to-stone-800">
      <div className="flex flex-col gap-2 mb-6">
        <Input
          label="Email"
          type="email"
          name="email"
          onChange={handleInputChange}
          invalid={invalidEmail}
        />
        <Input
          label="Password"
          type="password"
          name="password["
          onChange={handleInputChange}
          invalid={invalidPassword}
        />
      </div>
      <div className="flex justify-end gap-4">
        <button type="button" className="text-amber-400 hover:text-amber-500">
          Create a new account
        </button>
        <Button
          className='button'
          onClick={handleLogin}
        >
          Sign In
        </Button>
      </div>
    </div>
  )
}