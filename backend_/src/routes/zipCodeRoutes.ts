import { Router } from 'express';
import { getZipCode } from '../controllers/zipCodeController';

const router = Router();

router.get('/:countryCode/:zipCode', getZipCode);

export default router;
