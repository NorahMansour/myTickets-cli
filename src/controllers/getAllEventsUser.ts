import axios from 'axios';
import { baseUrl } from '..';


export async function getAllEventsUser() {
	const { data: events } = await axios.get(baseUrl + '/events');
	
	const formattedEvents = events.map((c: any) => ({ name: c.name, deta: c.deta,Start_endTime:c.Start_endTime,
		location: c.location, description: c.description , TicketsCount: c.TicketsCount}));
	    console.table(formattedEvents);
        



}