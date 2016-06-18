/**
 * Created by Christopher on 18/06/2016.
 */
'use strict';
module.exports = function (app) {
    var dataSchema = app.mongoose.Schema(
        {
            date:{type:Date,default:Date.now},
            temperature: {type:Number, require:true},
            liter: {type:Number, require:true},
            bottle:{type:Number, ref:'Bottle',required:true}
        }
    );
    var data = app.mongoose.model('Bottle',dataSchema);
    return data;

}