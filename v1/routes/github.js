const controller = require('../../v1/controllers/github.js');


module.exports = (router) => {
    router.route('/get_commits/:username/:repo')
        .get(controller.getCommits);

    return router;
}