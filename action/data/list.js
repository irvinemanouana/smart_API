/**
 * Created by Christopher on 18/06/2016.
 */
module.exports = function (app) {
    return function (req,res) {
        var data = app.model.data;
        data.find({
          'bottle':req.body.bottle
        },function (err,instance) {
            if(err)
                return res.status(500).send(instance);
            else{

                if (instance!=null) {
                    res.send(instance);
                }
                else
                    res.send(JSON.stringify(
                        {
                            'error': 'data',
                            'message':'nothing to show'
                        }));
            }
        });
    }
}