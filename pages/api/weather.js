import axios from 'axios';
import wmo from '../../const/wmo_data';

export default async function handler(req, res) {
  const { lat, lon } = req.query;

  const weatherApi = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m,weathercode&daily=sunrise,sunset&timezone=Asia/Ho_Chi_Minh&current_weather=true`;

  try {
  const { data } = await axios.get(weatherApi);

  const { current_weather } = data;
  const { temperature, weathercode } = current_weather;

  // determine day or night
  const date = new Date();
  const hour = date.getHours();
  const isDay = hour > 6 && hour < 18;

  // get weather description and image
  const weather = wmo[weathercode][isDay ? "day" : "night"];

  res.status(200).json({
    temperature: temperature,
    ...weather,
  });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error });
  }
}
