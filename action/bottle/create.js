/**
 * Created by Christopher on 16/06/2016.
 */

module.exports = function (app) {
    return function (req, res, next) {
        var bottle = new app.model.bottle({
            owner: req.body.owner,
            date: new Date()
        });

        var gcm = require('node-gcm');

        var message = new gcm.Message({
            data: { key1: 'msg1' }
        });

        var sender = new gcm.Sender('AIzaSyDCXppM-L3r4qaQ17Yvi5fJ_oMLRwdk5vA');
        var regTokens = ['189065235440'];

        sender.send(message, { registrationTokens: regTokens }, function (err, response) {
            if(err){
                console.log("error")
                console.error(err);
            }
            else    console.log(response);
        });
        bottle.save(function (err,instance) {
            if (err)
                return res.status(500).send(err);
            console.log('Bottle added!');
            res.send(instance);
        });

    }
}