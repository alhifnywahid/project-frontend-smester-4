import axios from "axios";

export async function getUser(token) {
	try {
		const result = await axios.get(import.meta.env.VITE_BASE_URL + `/user/${token}`);
		const user = result.data.result;
		if (!user) return false;
		return user;
	} catch (error) {
		console.log(error);
	}
}
