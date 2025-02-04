import Task from "../models/Task.mjs";
import * as Yup from "yup";

class TaskController {
  async index(req, res) {
    const tasks = await Task.findAll({
      where: { user_id: req.userId, check: false }
    })
    return res.json(tasks);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      title: Yup.string().required(),
      description: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: "Dados inválidos. Verifique title e description." });
    }

    const { title, description } = req.body;
    console.log(title, description)
    console.log(req.body)

    const task = await Task.create({
      title,
      description,
      user_id: req.userId,
    });

    return res.json(task)
  }

  async update(req, res) {
    const { task_id } = req.params;

    const task = await Task.findByPk(task_id)
    if (!task) {
      return res.status(400).json({ error: "Tarefa não encontrada." })
    }

    await task.update(req.body)
    return res.json(task)
  }

  async delete(req, res) {
    const { task_id } = req.params;
    const task = await Task.findByPk(task_id)
    if (!task) {
      return res.status(400).json({ error: "Tarefa não encontrada." })
    }
    if (task.user_id !== req.userId) {
      return res.status(401).json({ error: "Requisição não autorizada." })
    }

    await task.destroy()

    return res.json({ message: "Tarefa deletada com sucesso." })
  }
}

export default new TaskController();
