import { prompt } from "inquirer";
import { createEvent } from "../controllers/admin/create-events ";
import { deleteEvent } from "../controllers/admin/delete-events ";
import { getEvents } from "../controllers/admin/get-events";
import { searchEvent } from "../controllers/admin/search-events ";
import { updateEvent  } from "../controllers/admin/update-events";
import chalk from 'chalk';

export async function q2() {
  
  const { q2Answer } = await prompt({
    
    type: "list",
    name: "q2Answer",
    message:chalk.blueBright ("Please choose an action 👀!"),
    choices: [
      "1- View events 🙉",
      "2- Add new events 🐊",
      "3- Update events 🐬",
      "4- Delete events ❌",
      "5- Search events by name 🔍",
      "6- Quit app 🤬",
    ],
    filter: (val) => +val[0],
});

  switch (q2Answer) {
    case 1:
      await getEvents();
      break;

    case 2:
      await createEvent();
      break;

    case 3:
      await updateEvent();
      break;

    case 4:
      await deleteEvent();
      break;

    case 5:
      await searchEvent();
      break;

    case 6:
      console.log("see you again 👊!");
      process.exit(0);

    default:
      break;
  }
}


