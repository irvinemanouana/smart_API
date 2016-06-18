/**
 * Created by Christopher on 16/06/2016.
 */

module.exports = function (app) {
    return function (req, res, next) {
        var bottle = new app.model.bottle({
            owner: req.body.owner,
            date: new Date()
        });

        bottle.save(function (err,instance) {
            if (err)
                return res.status(500).send(err);

            console.log('Bottle added!');
            res.send(instance);
        });

    }
}