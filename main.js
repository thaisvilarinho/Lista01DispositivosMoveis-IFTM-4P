import axios from 'axios';

class Github {
	static async getRepositories(repo) {
		let url = `https://api.github.com/repos/${repo}`
		axios.get(url)
		try {
			const { data } = await axios.get(url);
			console.log(data);
		} catch (error) {
			console.log('Repositório não existe');
		}
   }
}

   Github.getRepositories('lucasmoura-dev/iftm_js_lista1');
   Github.getRepositories('lucasmoura-dev/qweqweqweqwueh1u2h3u123');
