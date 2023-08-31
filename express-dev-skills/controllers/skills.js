const skill = require('../models/skill');

module.exports = {
  index,
  show,
  new: newSkill,
  create,
  delete: deleteSkill,
  edit,
  update
};

function update(req, res) {
  req.body.done = !!req.body.done;
  skill.update(req.params.id, req.body);
  res.redirect(`/skills/${req.params.id}`);
}

function edit(req, res) {
  const skill = skill.getOne(req.params.id);
  res.render('skills/edit', {
    title: 'Edit Skill',
    skill
  });
}

function deleteskill(req, res) {
  skill.deleteOne(req.params.id);
  res.redirect('/skills');
}

function create(req, res) {
  console.log(req.body);
  // Models are responible for CRUD'ing the data
  skill.create(req.body);
  // Always do a redirect when data has been changed
  res.redirect('/skills');
}

function newskill(req, res) {
  res.render('skills/new', { title: 'New skill' });
}

function show(req, res) {
  res.render('skills/show', {
    skill: skill.getOne(req.params.id),
    title: 'To-Do Details'
  });
}

function index(req, res) {
  res.render('skills/index', {
    skills: skill.getAll(),
    title: 'All Skills'
  });
}