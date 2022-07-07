import axios from "axios";
import { baseUrl } from "..";

export async function getReservation() {
    try{
  const { data: reservation } = await axios.get(baseUrl + "/view");
  const formattedReservation = reservation.map((c: any) => ({
    event_name: c.event_name,
    date: c.date,
    total: c.total,
  }));
  console.table(formattedReservation);
}catch(err)
{
  console.error(err);
}
}




