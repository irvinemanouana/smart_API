/**
 * Created by Christopher on 16/06/2016.
 */
'use strict';

module.exports = function (app) {
    var bottleSchema = app.mongoose.Schema(
        {
            owner :{type:String, ref:'User'},
            date:{type:Date, default:Date.now}
        }
    );
    //type:app.mongoose.Schema.Types.ObjectId, ref:'user'

    var bottle = app.mongoose.model('Bottle',bottleSchema);
    return bottle;

}