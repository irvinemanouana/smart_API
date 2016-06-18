/**
 * Created by Christopher on 14/05/2016.
 */



module.exports = function (app) {
    return function (req, res, next) {
        var user = new app.model.user({
            sex:req.body.sex,
            name:req.body.name,
            lastname:req.body.lastname,
            password:req.body.password,
            email:req.body.email,
            created_at:new Date(),
            update_at:new Date(),
            phone: req.body.phone,
            birth_day:req.body.birth_day,
            height : req.body.height,
            weight : req.body.weight
        });
        user.save(function (err,instance) {
            if (err)
                return res.status(500).send(err);

            console.log('User created!');
            res.send(instance);
        });
    }

}