import { prompt } from 'inquirer';
import chalk from 'chalk';
import axios from 'axios';
import { baseUrl, globalData } from '..';


export async function q1(): Promise<any> {
	const { q1Answer } = await prompt({
		type: 'list',
		name: 'q1Answer',
		message:chalk.redBright( ' Hi, Are you Admin or User 👀 ?  quit 🤬!'), //'are you Admin  or user  quti'
		choices: ['Admin','user', 'Quit'],
		filter: (val) => val.toLowerCase(),
	});

	if (q1Answer === 'quit') {
		console.log('bay bay  👊');
		process.exit(0);
	}

	if (q1Answer === 'user'){
	const { email, password } = await prompt([
		{
			type: 'input',
			name: 'email',
			message: 'Enter your email 🥸 ',
			filter: (val) => val.toLowerCase(),
		},
		{
			type: 'password',
			name: 'password',
			message: 'Enter your password 🔑 ',
		},
	]);
	try {
		const result = await axios.post(baseUrl + '/login', {
			email,
			password,
		});
		const newToken = result.data.token;
		globalData.token = newToken;
	} catch (err: any) {
		console.log(err?.response?.data);
		process.exit(0);
	}
}
	// if (username !== 'nora' || password !== 'NN') {
	// 	console.log('Wrong username & password, bye!');
	// 	process.exit(0);
	// }
 if (q1Answer === "admin"){
	const { email, password } = await prompt([
		{
			type: 'input',
			name: 'email',
			message: 'Enter your email 🥸 ',
			filter: (val) => val.toLowerCase(),
		},
		{
			type: 'password',
			name: 'password',
			message: 'Enter your password 🔑 ',
		},
		
	]);
	
}
return q1Answer
}


// const r = await axios.post(
// 	Url +'/user/create',
// 	{
// 	   // user_id:v4(),
// 		...userData,
// 	},  );
// 	globalData.token = r.data.token;
