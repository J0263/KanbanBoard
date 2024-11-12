import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface JwtPayload {
  username: string;
}

export const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
  // Get the token from the Authorization header
  const authHeader = req.header('Authorization');
  const token = authHeader && authHeader.split(' ')[1]; // Extract token after "Bearer"

  // Check if the token is missing
  if (!token) {
    return res.status(401).json({ message: 'Access denied. No token provided.' });
  }

  try {
    // Verify the token and decode the payload
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY as string) as JwtPayload;

    // Attach user data to the request object
    req.user = decoded;

    // Proceed to the next middleware or route handler
    next();
    return; // Explicitly return after calling next()
  } catch (error) {
    return res.status(403).json({ message: 'Invalid token.' });
  }
};