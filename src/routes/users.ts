import { Router } from "express";

const router = Router();

import { getUsers } from '../controllers/users';

router.get('/', getUsers);

export default router;
