import axios from "axios";
import { prompt } from "inquirer";
//import { v4 } from "uuid";
import { baseUrl, globalData } from '../..';
export async function createEvent() {
  try{
  const eventData = await prompt([
    {
      type: "input",
      name: "name",
      message: "Enter event name ๐ค ",
    },
    {
      type: "input",
      name: "deta",
      message: "Enter event Start_endDate๐ฑ ",
    },
    {
      type: "input",
      name: "Start_endTime ", 
      
      message: "Enter event Start_endTime ๐ ",
    },
    {
      type: "input",
      name: "location",
      message: "Enter event  location ๐ ",
    },
    {
      type: "input",
      name: "description",
      message: "Enter event description ",
    },{
    type: "input",
      name: "tickets_count",
      message: "Enter event tickets_count ",
    }
  ]);
  await axios.put(
    baseUrl + "/events",
    {
      //uuid v4
      //id: v4(),
      ...eventData,
    },
    {//add
      headers:{
        authorization:'Bearer'+ globalData.token,
      },
    }
    
  );
  console.log(`Event for ${eventData.name}, has been added โ`);
  }catch (error) {
    console.error(error);
  }
  }
