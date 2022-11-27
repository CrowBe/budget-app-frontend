import { User } from "../types";

const postConfig = (data: {[key: string]: string}) => {
	return {
		method: 'POST', // or 'PUT'
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data)
	}
} 

export async function apiLogin(data: {email: string, password: string}): Promise<{message: string, user: User}> {
	return (await fetch(`${process.env.REACT_APP_API_HOST}/login`, postConfig(data))
		.then(async (res) => res.json()).then((data) => data))
}

export async function apiSignUp(data: {email: string, password: string, name: string}): Promise<{message: string, user: User}> {
	return (await fetch(`${process.env.REACT_APP_API_HOST}/signup`, postConfig(data))
		.then(async (res) => res.json()).then((data) => data))
}