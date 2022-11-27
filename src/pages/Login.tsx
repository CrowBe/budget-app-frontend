import { ReactElement, useState } from "react"
import { Link } from "react-router-dom";
import useAuth from "../context/useAuth";

const LoginPage: React.FC = (): ReactElement => {
	const [email, setEmail] = useState<string>('')
	const [password, setPassword] = useState<string>('')
	const { login, error } = useAuth();
	return (
		<form onSubmit={(e) => {
			e.preventDefault()
			login(email, password)
		}}>
      <h1>Welcome Back!</h1>
      <p>Sign in to get started</p>
			<input type="email" name="email" id="email" placeholder="Email..." value={email} onChange={(e) => setEmail(e.currentTarget.value)} />
			<input type="password" name="password" id="password" placeholder="Your Password..." value={password} onChange={(e) => setPassword(e.currentTarget.value)} />
      <button style={{marginTop: '20px'}} type="submit">ikuzo</button>
			<small style={{marginTop: '20px'}}>
				Don't have an account yet?{' '}
				<Link to="/signup">Create one here.</Link>
			</small>
      <p>{error && error.toString()}</p>
		</form>
	)
}

export default LoginPage;