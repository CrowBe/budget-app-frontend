import { ReactElement } from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/Login";
import Signup from "./pages/Signup";
import PublicApp from "./PublicApp";

const PublicRoutes: React.FC = (): ReactElement => {
	return (
		<Routes>
			<Route path="/" element={<PublicApp /> }>
				<Route index element={<LoginPage />} />
				<Route path="login" element={<LoginPage />} />
				<Route path="signup" element={<Signup />} />
			</Route>
		</Routes>
	)
}

export default PublicRoutes;