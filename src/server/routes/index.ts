import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
    return res.send("Hello, World!")
});

router.post('/teste/:id', (req, res) => {
    console.log(req.params);
    return res.json(req.body);
});

export { router };