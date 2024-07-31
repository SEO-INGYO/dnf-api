import { Request, Response } from 'express';
import axios from 'axios';


export const fetchAllPosts = async (req: Request, res: Response): Promise<void> => {
    try {
        const response = await axios.get('http://localhost/api/posts');
        res.json(response.data);
    } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
            res.status(error.response.status).json({ message: error.response.data });
        } else {
            res.status(500).json({ message: 'Internal server error' });
        }
    }
};

export const fetchPostById = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const response = await axios.get(`http://localhost/api/posts/${id}`);
        res.json(response.data);
    } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
            res.status(error.response.status).json({ message: error.response.data });
        } else {
            res.status(500).json({ message: 'Internal server error' });
        }
    }
};