/**
 * Created by Christopher on 22/07/2016.
 */
module.exports  = function (app) {

    return function (req, res) {
        var user = app.model.user;
        user.remove({
            'email':req.body.email
        },function (err,instance) {
            if(err)
                return res.status(500).send(instance);
            else{

                if (instance!=null) {
                    res.send(instance);
                    console.log("user removed");
                }
                else
                    return res.status(500).send(err);
            }
        });

    }
}