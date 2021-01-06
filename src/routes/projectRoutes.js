const express = require('express');
const mongoose = require('mongoose')
const requireAuth = require('../middlewares/requireAuth');


const Project = mongoose.model('Project')

const router = express.Router();


router.use(requireAuth);

router.get('/projects', async (req, res) => {
  const projects = await Project.find({ userId: req.user._id });
  res.send(projects);
})

router.post('/projects', async (req, res) => {
  const { name, description, email, prototype_link, images, github, join_link, contact } = req.body;

  if (!name || !description || !email || !prototype_link || !images || !github || !join_link || !contact) {
    return res.status(422).send({ error: 'The Info is needed seriously' })
  }
  try {
    const project = new Project({ name, description, email, prototype_link, images, github, join_link, contact, userId: req.user._id });
    await project.save();
    res.send(project);
  } catch (err) {
    res.status(422).send({ error: err.message })
  }
})

router.delete('/projects/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Project.remove({ _id: id })
    await res.status(200).send({ message: "Succesfully deleted the project" })
  } catch (err) {
    res.status(422).send({ error: err.message });
  }
})

module.exports = router;


