/** 
*  Customer model
*  Describes the characteristics of each attribute in a customer resource.
*
* @author Midhun Kandakatla <s534637@nwmissouri.edu>
*
*/

// see <https://mongoosejs.com/> for more information
const mongoose = require('mongoose')

const categorySchema = new mongoose.Schema({
  _id: { type: Number, required: true },
  accountname: {type: String, required: true},
  accounttype:{type:Number,required: true, default: ' '},
  creditcardnumber:{type:Number,required: true, default: ' '},
  debitcardnumber:{type:Number,required: true},
  accountnumber:{type: Number, required: true},
  userId:{type:Number,required: true}
})

module.exports = mongoose.model('category', categorySchema)
