/**
 * Created by Christopher on 15/05/2016.
 */
module.exports = function (app) {
    return function (req, res) {
        var user =  app.model.user;
        user.findOne({
            email:req.body.email,
            password:req.body.password
        },function (err,instance) {
            if(err)
                return res.status(500).send(instance);
            else{
                
                if (instance!=null)
                    res.send(instance);
                else
                    res.send(JSON.stringify(
                        {
                            'error': 'login error',
                        'message':'invalid email or password'
                    }));
            }
        });

    }
};