import { redirect } from "react-router-dom";
import AuthForm from "../components/AuthForm";

function AuthenticationPage() {
  return <AuthForm />;
}

export default AuthenticationPage;

export async function action({ request }) {
  console.log("action 1");
  const searchParams = new URL(request.url).searchParams;
  const mode = searchParams.get("mode") || "login";

  if (mode !== "login" && mode !== "signup") {
    throw new Response(JSON.stringify({ message: "Unsupported mode." }), {
      status: 422,
    });
  }
  console.log("action 2");

  const formData = await request.formData();
  const { email, password } = Object.fromEntries(formData);
  const credentials = { email, password };
  console.log("credentials", credentials);

  const res = await fetch(`http://localhost:8080/${mode}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials),
  });

  const status = res.status;
  console.log("status", status);
  if (status === 422 || status === 401) {
    return res;
  }
  if (!res.ok) {
    throw new Response(
      JSON.stringify({ message: "Could not authenticate user." }),
      { status: 500 }
    );
  }

  const data = await res.json();
  localStorage.setItem("token", data.token);

  return redirect("/");
}
