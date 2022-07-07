import { prompt } from "inquirer";
import chalk from 'chalk';
import {getAllEventsUser} from "../controllers/getAllEventsUser";
import{ getPayment} from  "../controllers/getPayment";
import{getReservation} from "../controllers/getReservationTicket";
import{searchEventByName}from "../controllers/searchEventByName";


export async function q3() {

    const { q3Answer } = await prompt({
    type: "list",
    name: "q3Answer",
    message: "Please choose an action 👀!",
    choices: [
      "1-  View events 🙉",
      "2-  Search events by name 🔍",    
      "3- Reservation 🐬",                            
      "4- payment 💸 ",
      "5- Quit app 🤬  ",                           
    ],
    filter: (val) => +val[0],
  });

  
switch (q3Answer) {
    case 1:
      await getAllEventsUser();
      break;

    case 2:
      await searchEventByName ();
      break;

    case 3:
      await getReservation();
      break;

    case 4:
      await   getPayment ();
      break;

    case 5:
      console.log("see you again 👊,Give everyday the chance to become the most beautiful of your life!");
      //console.log("Give everyday the chance to become the most beautiful of your life");
      process.exit(0);
    default:
      break;
  }
}


