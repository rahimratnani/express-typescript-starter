import { Request, Response, NextFunction } from 'express';

export const getMany = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | undefined> => {
  try {
    // get users
    return res.status(200).json({ data: 'Users' });
  } catch (error) {
    res.status(500);
    next(error);
  }
};

export const getOne = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | undefined> => {
  try {
    // get a user
    return res.status(200).json({ data: 'User1' });
  } catch (error) {
    res.status(500);
    next(error);
  }
};

export const createOne = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | undefined> => {
  try {
    // create a user
    return res.status(201).json({ data: 'User created.' });
  } catch (error) {
    res.status(500);
    next(error);
  }
};

export const updateOne = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | undefined> => {
  try {
    // update a user
    return res.status(200).json({ data: 'User updated.' });
  } catch (error) {
    res.status(500);
    next(error);
  }
};

export const deleteOne = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | undefined> => {
  try {
    // delete a user
    return res.status(200).json({ data: 'User deleted.' });
  } catch (error) {
    res.status(500);
    next(error);
  }
};
