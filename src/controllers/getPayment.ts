import axios from 'axios';
import { baseUrl } from '..';

export async function getPayment() {


    const { data: payments } = await axios.get(baseUrl + '/events');
	
	const formattedPayments = payments.map((c: any) => ({ paymentDate: c.paymentDate, paymentAmount: c.paymentAmount}));
	    console.table(formattedPayments);
}








