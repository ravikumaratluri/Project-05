/** 
*  Customer model
*  Describes the characteristics of each attribute in a customer resource.
*
* @author Varun Goud Pulipalpula <s534848@nwmissouri.edu>
*
*/

// see <https://mongoosejs.com/> for more information
const mongoose = require('mongoose')

const accountSchema = new mongoose.Schema({
  _id: { type: Number, required: true },
  accountnumber:{type:Number,required: true, default: ' '},
  accountName : {type:String,required: true},
  userId:{type:Number,required: true},
  transactionId:{type: Number, required: true},
})

module.exports = mongoose.model('account', accountSchema)
