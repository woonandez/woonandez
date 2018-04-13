const commentsService = require('../services/commentsService.js');

module.exports = {
  findAll: function(req, res) {
    commentsService.findAll(req, res)
      .then(result => res.json(result));
  },
  persist: function(req, res) {
    commentsService.persist(req, res)
      .then(response => res.json(response.rowCount))
      .catch(error => res.json(error));
  }
}