import { Request, Response } from 'express';
import { getZipCodeInfo } from '../services/zipCodeService';

export const getZipCode = async (req: Request, res: Response): Promise<void> => {
  const { countryCode, zipCode } = req.params;
  try {
    const data = await getZipCodeInfo(countryCode, zipCode);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Error retrieving zip code information' });
  }
};
