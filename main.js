import axios from 'axios';

const buscaUsuario = async usuario => {
	let url = `https://api.github.com/users/${usuario}`;
	try {
		const { data } = await axios.get(url);
		console.log(data);
	} catch (error) {
		console.log('Usuário não existe');
	}
}

buscaUsuario('lucasmoura-dev');
