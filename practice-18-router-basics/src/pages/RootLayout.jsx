import { Outlet } from "react-router-dom";
import MainNavigation from "../comopnents/MainNavigation";

export default function RootLayout() {
  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
}
