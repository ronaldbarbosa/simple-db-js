import { v4 as idGenerator } from "uuid";
import { getConnection } from "../database.js";

export const getTasks = (req, res) => {
    const db = getConnection();
    res.json(db.data.tasks);
};

export const createTask = async (req, res) => {
    const newTask = {
        id: idGenerator(),
        name: req.body.name,
        description: req.body.description
    };

    try {
        const db = getConnection();
        db.data.tasks.push(newTask);
        await db.write();
        res.json(newTask)
    } catch (error) {
        return res.status(500).send({ message: error.message });
    }
};

export const getTask = (req, res) => {
    const taskFound = getConnection().data.tasks.find(task => task.id === req.params.id);
    if (!taskFound) return res.sendStatus(404);
    res.json(taskFound);
};

export const updateTask = async (req, res) => {
    const db = getConnection();
    const taskFound = db.data.tasks.find(task => task.id === req.params.id);
    if (!taskFound) return res.sendStatus(404);
    
    taskFound.name = req.body.name;
    taskFound.description = req.body.description;

    db.data.tasks.map(task => task.id === req.params.id ? taskFound : task);

    await db.write();

    res.send(taskFound);
};

export const deleteTask = async (req, res) => {
    const db = getConnection();
    const taskFound = db.data.tasks.find((task) => task.id === req.params.id);
    if (!taskFound) return res.sendStatus(404);

    const newTasks = db.data.tasks.filter(task => task.id === req.params.id);
    db.data.tasks = newTasks;

    await db.write;

    res.json(taskFound);
};

export const count = (req, res) => {
    const totalTasks = getConnection().data.tasks.length;
    res.json({ "total": totalTasks });
};