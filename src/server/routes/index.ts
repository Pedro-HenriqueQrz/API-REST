import { Router } from 'express';
import {StatusCodes} from 'http-status-codes';

const router = Router();

router.get('/', (req, res) => {
    return res.send("Hello, World!")
});

router.post('/teste', (req, res) => {
    // console.log(req.params);
    return res.status(StatusCodes.UNAUTHORIZED).json(req.body);
});

export { router };