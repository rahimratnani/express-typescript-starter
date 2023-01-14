import { Request, Response, NextFunction } from 'express';

export const getMany = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | undefined> => {
  try {
    // get items
    return res.status(200).json({ data: 'Items' });
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
    // get an item
    return res.status(200).json({ data: 'Item1' });
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
    // create an item
    return res.status(201).json({ data: 'Item created.' });
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
    // update an item
    return res.status(200).json({ data: 'Item updated.' });
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
    // delete an item
    return res.status(200).json({ data: 'Item deleted.' });
  } catch (error) {
    res.status(500);
    next(error);
  }
};
