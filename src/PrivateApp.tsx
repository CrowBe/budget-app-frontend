import { ReactElement } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import useUser from "./context/useUser";

const PrivateApp: React.FC = (): ReactElement => {
  const user = useUser();
  return (
    <div id="private-app">
      <NavBar />
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default PrivateApp;