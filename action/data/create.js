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

            console.log('data inserted!');
            res.send(instance);
        });

    }
}