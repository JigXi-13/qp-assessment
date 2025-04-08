import { Request, Response, NextFunction } from 'express';

export const isAdmin = (req: Request, res: Response, next: NextFunction) => {
  // In real world, this would come from auth middleware
  const userRole = req.headers['x-role']; // simulate role from header

  if (userRole !== 'admin') {
    res.status(403).json({ message: 'Access denied. Admins only.' });
    return;
  }

  next();
};
