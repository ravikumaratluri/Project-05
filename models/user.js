/** 
*  Customer model
*  Describes the characteristics of each attribute in a customer resource.
*
* @author Ravi Kumar Atluri <s534734@nwmissouri.edu>
*
*/

// see <https://mongoosejs.com/> for more information
const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  _id: { type: Number, required: true },
  accountNumber: { type: Number, required: true },
  contact: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  firstname: { type: String, required: true, default: 'Given' },
  family: { type: String, required: true, default: 'Family' },
  gender: {type: String, required: true, default: ''},
  street1: { type: String, required: true, default: 'Street 1' },
  street2: { type: String, required: false, default: '' },
  city: { type: String, required: true, default: 'Maryville' },
  state: { type: String, required: true, default: 'MO' },
  zip: { type: String, required: true, default: '64468' },
  country: { type: String, required: true, default: 'USA' }
})

module.exports = mongoose.model('user', UserSchema)
