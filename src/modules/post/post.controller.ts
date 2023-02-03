import { Request, Response, NextFunction } from 'express';
import prisma from '../../config/db.js';

export const getOne = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | undefined> => {
  const { id } = req.params;
  try {
    const post = await prisma.post.findUnique({
      where: { id },
    });

    return res.status(200).json({ data: post });
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
  const { title, content, authorEmail } = req.body;

  try {
    const result = await prisma.post.create({
      data: {
        title,
        content,
        author: {
          connect: {
            email: authorEmail,
          },
        },
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
  const { id } = req.params;

  try {
    const post = await prisma.post.update({
      where: { id },
      data: {
        viewCount: {
          increment: 1,
        },
      },
    });

    console.log(`post: `, post);

    return res.status(200).json({ data: post });
  } catch (error) {
    res.status(400);

    if (error instanceof Error) {
      error.message = `Post with ID ${id} does not exist in the database`;
    }

    next(error);
  }
};

export const deleteOne = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | undefined> => {
  const { id } = req.params;

  try {
    const post = await prisma.post.delete({
      where: {
        id,
      },
    });
    return res.status(200).json({ data: post });
  } catch (error) {
    res.status(500);
    next(error);
  }
};
