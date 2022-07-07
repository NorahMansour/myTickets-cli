import axios from "axios";
import { prompt } from "inquirer";
import { baseUrl } from "../..";

export async function searchEvent() {
  const query = await prompt([
    {
      type: "input",
      name: "name",
      message: "Enter name to search 🔤 ",
    },
  ]);

  const { data: events } = await axios.get(baseUrl + "/events", {
    params: query,
  });

  const formattedEvents = events.map((c: any) => ({
    name: c.name,
    deta: c.deta,
    
  }));
  console.table(formattedEvents);
}
