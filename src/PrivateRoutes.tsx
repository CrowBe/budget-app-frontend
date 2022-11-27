import { ReactElement } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Transactions from "./pages/Transactions";
import PrivateApp from "./PrivateApp";

const PrivateRoutes: React.FC = (): ReactElement => {
	return (
		<Routes>
			<Route path="/" element={<PrivateApp />} >
				<Route index element={<Home />} />
				<Route path='transactions' element={<Transactions />} />
			</Route>
		</Routes>
	)
}

export default PrivateRoutes