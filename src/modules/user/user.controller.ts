import { Request, Response, NextFunction } from 'express';
import prisma from '../../config/db.js';

export const getMany = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | undefined> => {
  try {
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
  const { name, email } = req.body;

  try {
    const result = await prisma.user.create({
      data: {
        name,
        email,
      },
    });
    return res.status(201).json({ data: result });
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
    return res.status(200).json({ data: 'User deleted.' });
  } catch (error) {
    res.status(500);
    next(error);
  }
};

export const findDraftsByUser = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | undefined> => {
  const { id } = req.params;

  try {
    const drafts = await prisma.user
      .findUnique({
        where: {
          id,
        },
      })
      .posts({
        where: {
          published: false,
        },
      });

    return res.status(200).json({ data: drafts });
  } catch (error) {
    res.status(500);
    next(error);
  }
};
