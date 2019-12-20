'use strict';

module.exports = {
    getAll: getAll,
    getById: getById
};

function getAll (req, res) {
    res.json(200, [{
      todo_id: 100,
      description: 'Fazer as compras'
    }, {
      todo_id: 200,
      description: 'Fazer outra coisa qualquer'
    }]);
}
  
function getById(req, res) {
    res.json(200, {
      todo_id: req.swagger.params.id.value,
      description: "Quelque chose"
    });
}