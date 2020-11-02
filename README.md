# Lista01DispositivosMoveis-IFTM-4P
Este repositório contém a resolução de atividades da aula do dia 27/10/20, que foram disponibilizadas no link: https://www.notion.so/Lista-1-6796739aa7db46138cb820170e7fae57 na disciplina de Introdução a Programacao de dispositivos Móveis do 4º período no Curso Superior em Análise e Desenvolvimento de Sistemas, do Instituto Federal de Educação, Ciência e Tecnologia do Triângulo Mineiro (IFTM) - Campus Ituiutaba.

Abaixo consta uma cópia do enunciado de cada atividade.

Todos os exercícios abaixo necessitam que você esteja com o plugin do **Async**/**Await** do Babel e o
babel-polyfill devidamente configurados. Em alguns exercícios é necessário instalar o Axios.

**Você deverá criar um repositório no Git Hub contendo os códigos dos exercícios abaixo. Você deverá criar um commit para cada exercício, exemplo:**

1. Fez o exercício 1, cria um commit "Resolução do exercício 1";
2. Apagou o código e fez o exercício 2, cria outro commit "Resolução do exercício 2";
3. Deverá ser criado um commit para cada solução.

**Transforme os seguintes trechos de código utilizando async/await.**

## Exercício 1

```jsx
// Funão delay aciona o .then após 1s
const delay = () => new Promise(resolve => setTimeout(resolve, 1000));

function umPorSegundo() {
	 delay().then(() => {
		 console.log('1s');
		 delay().then(() => {
			 console.log('2s');
			 delay().then(() => {
				 console.log('3s');
			 });
		 })
	 });
}

umPorSegundo();
```

## Exercício 2

```jsx
import axios from 'axios';

function getUserFromGithub(user) {
	axios.get(`https://api.github.com/users/${user}`)
	 .then(response => {
		 console.log(response.data);
	 })
	 .catch(err => {
		 console.log('Usuário não existe');
	 })
}

getUserFromGithub('lucasmoura-dev');
getUserFromGithub('lucasmoura-dev12312312q');
```

## Exercício 3

```jsx
class Github {
 static getRepositories(repo) {
	 axios.get(`https://api.github.com/repos/${repo}`)
		 .then(response => {
			 console.log(response.data);
		 })
		 .catch(err => {
			 console.log('Repositório não existe');
		 })
	 }
}

Github.getRepositories('lucasmoura-dev/iftm_js_lista1');
Github.getRepositories('lucasmoura-dev/qweqweqweqwueh1u2h3u123');
```

### Exercício 4

```jsx
const buscaUsuario = usuario => {
	axios.get(`https://api.github.com/users/${user}`)
		.then(response => {
			console.log(response.data);
		})
	 .catch(err => {
		 console.log('Usuário não existe');
	 });
}

buscaUsuario('lucasmoura-dev');
```
