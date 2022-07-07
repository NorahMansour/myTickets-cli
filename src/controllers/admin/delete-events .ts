import axios from 'axios';
import { prompt } from 'inquirer';
import { baseUrl } from '../..';

export async function deleteEvent() {
	try{
	const { data: events } = await axios.get(baseUrl + '/events')
	const formattedEvents = events.map((c: any) => ({ name: c.name, deta: c.deta }));
	console.table(formattedEvents);

	const { index } = await prompt({
		type: 'number',
		name: 'index',
		message: 'Enter index to delete ❌',
		filter: (val) => +val,
	});
	const event = events[index];
	await axios.delete(baseUrl + `/events/${event.event_id
	}`);
	console.log(`Event for ${events.name} has been deleted ✅`);
}catch(err)
{
  console.error(err);
}
}
