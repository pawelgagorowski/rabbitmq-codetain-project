import { Request, Response, Router } from 'express';
import { getUsers } from '../controllers/users';
const router = Router();

router.get('/api/v1', (req: Request, res: Response) => res.status(200).send({
  message: 'Welcome to the Todos API!',
}))
router.get('/', getUsers);
export default router;
