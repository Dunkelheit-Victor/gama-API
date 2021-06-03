import { Router } from 'express';

const routes = Router();


export default routes;
routes.get('/', (req, res) => {
    return res.json({ message: "tudo certo"})
})

routes.post('/teste', (req, res) => {
    // const { name } = req.body
    const { nameUser} = req.query
    return res.json(name, nameUser)
})