import {Router }from 'express';
const router = Router();

/**DATABASE conecction */

import {connect} from '../database';
import {ObjectID} from 'mongodb';

router.get('/', async (req, res) => {
    const db = await connect();
    const result = await db.collection('tasks').find({}).toArray();
    console.log(result);
    res.json(result);
});

router.post('/', async (req, res) => {
    const db = await connect();
    // console.log(req.body);
    const task = {
        title: req.body.title,
        description: req.body.description
    };
    const result =await db.collection('tasks').insert(task);
    res.json(result.ops[0]);
});

router.get('/:id', async (req, res) => {
   const { id } = req.params;
   const db = await connect();
   const result =  await db.collection('tasks').findOne({_id: ObjectID(id)});
   console.log(id);
   res.json(result);
});

router.delete('/:id', async (req, res) => {
    const {id} = req.params;
    const db = await connect();
    const result = await db.collection('tasks').deleteOne(ObjectID(id));
    res.json({
        message: `Task ${id} eliminada exitossamente`,
        result
    })
});

router.put('/:id', async (req, res) => {
    const {id } = req.params;
    const updateTasks= {
        title: req.body.title,
        description: req.body.description
    };
    const db = await connect();
    await db.collection('tasks').updateOne({id: ObjectID(id)}, {$set: updateTasks});
    res.json({
        message: `Taks ${id} actualizada exitosamente`
    });
});
export default router;