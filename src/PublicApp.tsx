import { ReactElement } from "react";
import { Outlet } from "react-router-dom";

const PublicApp: React.FC = (): ReactElement => {
  return (
    <div id="public-app">
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default PublicApp;