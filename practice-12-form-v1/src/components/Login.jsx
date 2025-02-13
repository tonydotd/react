import { useState } from "react";

export default function Login() {
  const [userInput, setUserInput] = useState({
    email: "",
    password: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setUserInput((prevInput) => ({ ...prevInput, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log("submitted");
    console.log(userInput);
  }

  return (
    <form>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            value={userInput.email}
            onChange={handleChange}
          />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            value={userInput.password}
            onChange={handleChange}
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button type="submit" className="button" onClick={handleSubmit}>
          Login
        </button>
      </p>
    </form>
  );
}
