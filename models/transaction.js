/** 
*  Customer model
*  Describes the characteristics of each attribute in a customer resource.
*
* @author Bala Gopi Krishna Sabbineni <s534801@nwmissouri.edu>
*
*/

// see <https://mongoosejs.com/> for more information
const mongoose = require('mongoose')

const transactionSchema = new mongoose.Schema({
  _id: { type: Number, required: true },
  transactionId:{type: Number, required: true},
  transactiondate:{type:String,required: true},
  transactionamount:{type:Number,required: true},
  userId:{type:Number, required: true}

})

module.exports = mongoose.model('transaction', transactionSchema)