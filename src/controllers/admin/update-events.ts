import axios from "axios";
import { prompt } from "inquirer";
import { baseUrl } from "../..";

//try {
  export async function updateEvent() {
    let events = []
    try{
    const { data } = await axios.get(baseUrl + "/events");
    events = data
    

    const formattedEvents = events.map((c: any) => ({
      name: c.name,
      Start_endDate: c.Start_endDate,
    }));
    console.table(formattedEvents);

    const { index } = await prompt({
      type: "number",
      name: "index",
      message: "Enter index to update 🐬",
      filter: (val) => +val,
    });
    const event = events[index];

    const newEvent = await prompt([
      {
        type: "input",
        name: "name",
        message: `Enter new name or press enter to keep it as (${event.name})`,
        filter: (val) => {
          if (val.trim() === "") return event.name;
          return val;
        },
      },
      {
        type: "input",
        name: "deta",
        message: `Enter new date or press enter to keep it as (${event.deta})`,
        filter: (val) => {
          if (val.trim() === "") return event.deta;
          return val;
        },
      },
    ]);

    await axios.patch(baseUrl + `/events/${event.event_id}`, newEvent);

    console.log(`Event for ${newEvent.name}, has been updated ✅`);
    }
    catch (error) {
      console.error(error);
    }
}
