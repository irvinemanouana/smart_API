/**
 * Created by Christopher on 18/06/2016.
 */
module.exports = function (app) {
    return function (req, res, next) {
        var data = new app.model.data({
            temperature: req.body.temperature,
            liter: req.body.liter,
            bottle: req.body.bottle,
            date: new Date()
        });

        data.save(function (err,instance) {
            if (err)
                return res.status(500).send(err);
            else {
                var gcm = require('node-gcm');
                var message = new gcm.Message({
                    collapseKey: 'demo',
                    priority: 'high',
                    contentAvailable: true,
                    delayWhileIdle: true,
                    timeToLive: 3,
                    restrictedPackageName: "com.dev.christopher.smartjug",
                    dryRun: true,
                    data: {
                        key1: 'message1',
                        key2: 'message2'
                    },
                    notification: {
                        title: "Hello, World",
                        icon: "ic_launcher",
                        body: "This is a notification that will be displayed ASAP."
                    }
                });
                var sender =new gcm.Sender('AIzaSyDaOJh0aqPALeTV6mjRJekgBf637Y9SgRQ');
                var registrationTokens = [];
                registrationTokens.push('fH-kzNdKgQk:APA91bEQCtuwf1AdjcMCKR_g4n7eRSV5kVZjrDwLLFk4mFRG2UgqPtuxgntcH3o0ljoR9qaXtPs9bVVaX9RTcrcKFyubnvzZyg0tlDWlVHSdwtONaXb4dEvAU_RZsn4rbre4ax2xXeVY');
                sender.sendNoRetry(message, { registrationTokens: registrationTokens }, function(err, response) {
                    if(err) console.error(err);
                    else    console.log(response);
                });
                console.log('data inserted!');
                res.send(instance);
            }
        });

    }
}