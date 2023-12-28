import * as dotenv from 'dotenv';
import Express, { Request } from 'express';
import {
  getCharacterCashItemEquipment,
  getOCID,
  setAPIKey,
} from 'maplestory-open-api-js';

dotenv.config();

const API_KEY = process.env.API_KEY;
const app = Express();

if (API_KEY) {
  setAPIKey(API_KEY);
}

app.get('/', async (req: Request<{ name?: string }>, res) => {
  const characterName = req.params.name ?? '운소망';
  try {
    const { ocid } = await getOCID(characterName);
    const characterCashItemEquipment = await getCharacterCashItemEquipment({
      ocid,
    });
    return res.json(characterCashItemEquipment);
  } catch (error) {
    console.log(error);
    return res.json({});
  }
});

app.listen(3000, '0.0.0.0', () => {
  console.log('[server-demo] Server started!');
});
