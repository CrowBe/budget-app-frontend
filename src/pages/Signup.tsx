import { ReactElement, useState } from "react"
import useAuth from "../context/useAuth";

const Signup: React.FC = (): ReactElement => {
  const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
  const [name, setName] = useState<string>('');
  const { signUp, error } = useAuth();
	return (
		<form onSubmit={(e) => {
      e.preventDefault()
      signUp(email, name, password)
    }}>
      <h1>Welcome newbie!</h1>
      <p>Sign up to get started</p>
			<input type="name" name="text" id="text" placeholder="Your name..." value={name} onChange={(e) => setName(e.currentTarget.value)} />
			<input type="email" name="email" id="email" placeholder="Email..." value={email} onChange={(e) => setEmail(e.currentTarget.value)} />
			<input type="password" name="password" id="password" placeholder="Your Password..." value={password} onChange={(e) => setPassword(e.currentTarget.value)} />
      <button style={{marginTop: '20px'}} type="submit">ikuzo</button>
      <p>{error && error.toString()}</p>
		</form>
	)
}

export default Signup;