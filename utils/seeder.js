// set up a temporary (in memory) database
const Datastore = require('nedb')
const LOG = require('../utils/logger.js')

// require each data file

const user = require('../data/user.json')
const account = require('../data/account.json')
const category = require('../data/category.json')
const transaction = require('../data/transaction.json')

// inject the app to seed the data

module.exports = (app) => {
  LOG.info('START seeder.')
  const db = {}

  db.account = new Datastore()
  db.account.loadDatabase()

  // insert the sample data into our data store
  db.account.insert(account)

  // initialize app.locals (these objects will be available to our controllers)
  app.locals.account = db.account.find(account)
  LOG.debug(`${app.locals.account.query.length} account seeded`)


  db.user = new Datastore()
  db.user.loadDatabase()

  // insert the sample data into our data store
  db.user.insert(user)

  // initialize app.locals (these objects will be available to our controllers)
  app.locals.user = db.user.find(user)
  LOG.debug(`${app.locals.user.query.length} user seeded`)

  db.category = new Datastore()
  db.category.loadDatabase()

  // insert the sample data into our data store
  db.category.insert(category)

  // initialize app.locals (these objects will be available to our controllers)
  app.locals.category = db.category.find(category)
  LOG.debug(`${app.locals.category.query.length} category seeded`)

  db.transaction = new Datastore()
  db.transaction.loadDatabase()

  // insert the sample data into our data store
  db.transaction.insert(transaction)

  // initialize app.locals (these objects will be available to our controllers)
  app.locals.transaction = db.transaction.find(transaction)
  LOG.debug(`${app.locals.transaction.query.length} category seeded`)


  
  LOG.info('END Seeder. Sample data read and verified.')
}
