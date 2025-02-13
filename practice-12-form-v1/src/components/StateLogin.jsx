import Input from "./Input";
import { isEmail, isNotEmpty, hasMinLength } from "../util/validation";
import { useInput } from "./useInput";

export default function StateLogin() {
  const email = useInput("", (value) => isNotEmpty(value) && isEmail(value));
  const password = useInput(
    "",
    (value) => isNotEmpty(value) && hasMinLength(value, 6)
  );

  function handleSubmit(event) {
    event.preventDefault();
    if (!email.isValid || !password.isValid) {
      return;
    }
    console.log({ email, password });
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          label="Email"
          id="email"
          type="email"
          name="email"
          value={email.value}
          onChange={email.handleChange}
          onBlur={email.handleBlur}
          error={
            email.isEdited && !email.isValid && "Please enter a valid email!"
          }
        />

        <Input
          label="Password"
          id="password"
          type="password"
          name="password"
          value={password.value}
          onChange={password.handleChange}
          onBlur={password.handleBlur}
          error={
            password.isEdited &&
            !password.isValid &&
            "Please enter a valid password!"
          }
        />
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
