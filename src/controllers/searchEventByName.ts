import axios from 'axios';
import { baseUrl } from '..';
import { prompt } from 'inquirer';

export async function searchEventByName() {
    
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
    Start_endTime: c.Start_endTime,
    location: c.location,
    description:c.description,
  }));
  console.table(formattedEvents);
}

