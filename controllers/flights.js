import { Flight } from '../models/flight.js'

function index(req, res) {
  Flight.find({}, function (error, flights) {
    res.render("flights/index", {
      error,
      flights,
      title: 'All Flights',
    })
  })
}

function newFlight(req, res) {
  res.render('flights/new', {title: 'Flight'})
}

function create(req, res) {

  for (let key in req.body) {
    if(!req.body[key]) delete req.body[key];
  }

  const flight = new Flight(req.body)
  console.log(flight)
  // movie.save(function(err) {
  //   if (err) return res.redirect('/movies/new')
  //   res.redirect('/movies')
  // })
}


export {
  index,
  newFlight as new,
  create
}