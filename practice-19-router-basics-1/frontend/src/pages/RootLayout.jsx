import MainNavigation from "../components/MainNavigation";
import { Outlet, useNavigation } from "react-router-dom";

function RootLayout() {
  const { state } = useNavigation();
  return (
    <>
      <MainNavigation />
      <main>
        {state === "loading" && <p>Loading...</p>}
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
