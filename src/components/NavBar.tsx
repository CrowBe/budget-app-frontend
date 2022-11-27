import { ReactElement } from "react"
import { Link } from "react-router-dom"
import { FaHome } from 'react-icons/fa'

const NavBar: React.FC = (): ReactElement => {
	return (
		<nav>
			<Link to="/">
				<FaHome />
			</Link>
			<Link to="/transactions">
				My Transactions
			</Link>
		</nav>
	)
}

export default NavBar;