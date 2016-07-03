/**
 * Created by Christopher on 14/05/2016.
 */
'use strict';
module.exports = function (app) {
    var userSchema = app.mongoose.Schema({
        sex: {
            type:String,
            required:true,
            enum:['men','women']
        },
        name:{
            type:String,
            required:true
        },
        lastname:{
            type:String,
            required:true
        },
        password:{
            type:String,
            required:true,
            select:false
        },
        email:{
            type:String,
            required:true,
            unique: true
        },
        pathPicture:String,
        created_at:Date,
        update_at:Date,
        birth_day: String,
        phone:String,
        height: Number,
        weight:Number
        });

    var user = app.mongoose.model('User',userSchema);
    return user;
};