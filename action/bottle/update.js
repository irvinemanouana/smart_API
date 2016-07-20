/**
 * Created by Christopher on 03/07/2016.
 */
module.exports  = function (app) {
    
    return function (req, res) {
        var bottle = app.model.bottle;
        bottle.findOne({
            '_id':req.body.id
        },function (err,instance) {
            if(err)
                return res.status(500).send(instance);
            else{

                if (instance!=null) {
                    instance.owner = req.body.owner;
                    instance.save();
                    res.send(instance);
                    console.log("bottle updated");
                }
                else
                    return res.status(500).send(err);
            }
        });

    }
}