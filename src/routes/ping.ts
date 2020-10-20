import { Request, Response } from 'express';

const pingRoute = (req: Request, res: Response)=> {
    return res.json({ result: 'API service is running' });
  };
  
  export default pingRoute;