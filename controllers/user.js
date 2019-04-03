/** 
*  Customer controller
*  Handles requests related to customers (see routes)
*
* @author Ravi Kumar Atluri <s534734@nwmissouri.edu>
*
*/
const express = require('express')
const api = express.Router()
const LOG = require('../utils/logger.js')
const find = require('lodash.find')
const remove = require('lodash.remove')
const Model = require('../models/user.js')
const notfoundstring = 'user not found'

// RESPOND WITH JSON DATA  --------------------------------------------

// GET all JSON
api.get('/findall', (req, res) => {
  res.setHeader('Content-Type', 'application/json')
  const data = req.app.locals.user.query
  res.send(JSON.stringify(data))
})

// GET one JSON by ID
api.get('/details/:id', (req, res) => {
  LOG.info(`Handling GET /details/:id ${req}`)
  const id = parseInt(req.params.id)
  const data = req.app.locals.user.query
  const item = find(data, { _id: id })
  if (!item) { return res.end(notfoundstring) }
  LOG.info(`RETURNING VIEW FOR ${JSON.stringify(item)}`)
  return res.render('user/details.ejs',
    {
      title: 'customer Details',
      layout: 'layout.ejs',
      user: item
    })
})

// RESPOND WITH VIEWS  --------------------------------------------

// GET to this controller base URI (the default)
api.get('/', (req, res) => {
  res.render('user/index.ejs')
})


module.exports = api
