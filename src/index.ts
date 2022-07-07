import { q2 } from "./questions/q2";
import { q3 } from "./questions/q3";
import { q1 } from "./questions/q1";
import chalk from "chalk";
//import figlet from "figlet";



export const baseUrl = "http://0.0.0.0:3009";
//export let token = "12394";
export const globalData:any ={
  token:''};
  let gg="";



var figlet = require('figlet');
async function start() {
  /// Display welcome message
  console.log(chalk.blue("---------------------------------------------------------------------------"));
  console.log();
  //
  console.log(chalk.blue(figlet.textSync("Welcome to myTickets")));
  console.log(chalk.blue.bold(" Are you ready to start 👀?"));
  console.log();
  console.log(chalk.blue.bold(" Let's go 👀!"));
  //console.log("Give everyday the chance to become the most beautiful of your life");

  console.log(chalk.blue("---------------------------------------------------------------------------"));
  console.log();
  console.log();

  


  const role = await q1();
  if (role === "admin") {
    console.log("welcome admin");
	while (true) {
		await q2();
		console.log();
		console.log();
	  }
  }
  if (role === "user") {
    console.log("hi user");
	while (true) {
		await q3();
		console.log();
		console.log();
	  }
  }

  
}
start();

