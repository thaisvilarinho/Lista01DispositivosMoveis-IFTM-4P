import axios from 'axios';

async function getUserFromGithub(user) {
	let url = `https://api.github.com/users/${user}`;
	try {
		const { data } = await axios.get(url);
		console.log(data);
	} catch (error) {
		console.log('Usuário não existe');
	}
}

getUserFromGithub('lucasmoura-dev');
getUserFromGithub('lucasmoura-dev12312312q');
