import {Router} from 'express';
import { home } from '../controller/user.controller.js';

const router=Router();

router.get('/',home);

export default router;