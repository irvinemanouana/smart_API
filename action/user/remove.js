/**
 * Created by Christopher on 03/07/2016.
 */
module.exports = function (app) {
    return function (req, res) {
        var user =  app.model.user;
        user.findOne({email:req.body.email},function (err,instance) {
            if(err)
                return res.status(500).send(instance);
            else{

                if (instance!=null) {
                    instance.remove({email:req.body.email},function (err) {
                        if (!err) {
                            res.send(JSON.stringify(
                                {
                                    'success': 'deleted',
                                    'message':'account '+req.body.email+' deleted'
                                }));
                        }
                        else {
                            res.send(JSON.stringify(
                                {
                                    'error': 'login error',
                                    'message':'invalid email or password'
                                }));
                        }
                    });
                    //res.send(instance);
                }
                else
                    res.send(JSON.stringify(
                        {
                            'error': 'login error',
                            'message':'invalid email or password'
                        }));
            }

        })
    }

}