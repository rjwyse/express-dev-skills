const flight = require('../models/flight');

module.exports = {
  index,
  show,
  new: newflight,
  create,
  
};

async function index(req, res) {
  const flights = await flight.find({});
  res.render('flights/index', { title: 'All flights', flights });
}

async function show(req, res) {
  const flight = await flight.findById(req.params.id);
  res.render('flights/show', { title: 'flight Detail', flight });
}

function newflight(req, res) {
  res.render('flights/new', { title: 'Add flight', errorMsg: '' });
}

async function create(req, res) {
  try {
      await Flight.create(req.body)
      res.redirect('/flights')
  } catch (err) {
      console.log(err)
      res.render('flight/new', { errorMsg: err.message })
  }
}