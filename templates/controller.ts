import {modelName} from {modelPath};

/**
 * {controllerName}.ts
 *
 * @description :: Server-side logic for managing {pluralName}.
 */
export = {

    /**
     * {controllerName}.list()
     */
    list: function (req, res) {
        {modelName}.find(function (err, {pluralName}) {
            if (err) {
                return res.sendError({
                    message: 'Error when getting {name}.',
                    error: err
                });
            }
            return res.sendOk({pluralName});
        });
    },

    /**
     * {controllerName}.show()
     */
    show: function (req, res) {
        const id = req.params.id;
        {modelName}.findOne({_id: id}, function (err, {name}) {
            if (err) {
                return res.sendError({
                    message: 'Error when getting {name}.',
                    error: err
                });
            }
            if (!{name}) {
                return res.sendNotFound({
                    message: 'No such {name}'
                });
            }
            return res.sendOk({name});
        });
    },

    /**
     * {controllerName}.create()
     */
    create: function (req, res) {
        const {name} = new {modelName}({{createFields}
        });

        {name}.save(function (err, {name}) {
            if (err) {
                return res.sendError({
                    message: 'Error when creating {name}',
                    error: err
                });
            }
            return res.sendOk({name});
        });
    },

    /**
     * {controllerName}.update()
     */
    update: function (req, res) {
        const id = req.params.id;
        {modelName}.findOne({_id: id}, function (err, {name}) {
            if (err) {
                return res.sendError({
                    message: 'Error when getting {name}',
                    error: err
                });
            }
            if (!{name}) {
                return res.sendNotFound({
                    message: 'No such {name}'
                });
            }

            {updateFields}
            {name}.save(function (err, {name}) {
                if (err) {
                    return res.sendError({
                        message: 'Error when updating {name}.',
                        error: err
                    });
                }

                return res.sendOk({name});
            });
        });
    },

    /**
     * {controllerName}.remove()
     */
    remove: function (req, res) {
        const id = req.params.id;
        {modelName}.findByIdAndRemove(id, function (err, {name}) {
            if (err) {
                return res.sendError({
                    message: 'Error when deleting the {name}.',
                    error: err
                });
            }
            return res.sendOk();
        });
    }
};
