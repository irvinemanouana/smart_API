/**
 * Created by Christopher on 22/07/2016.
 */
module.exports  = function (app) {

    return function (req, res) {
        var data = app.model.data;
        data.remove({
            'bottle':req.body.bottle
        },function (err,instance) {
            if(err)
                return res.status(500).send(instance);
            else{

                if (instance!=null) {
                    res.send(instance);
                    console.log("data removed");
                }
                else
                    return res.status(500).send(err);
            }
        });

    }
}