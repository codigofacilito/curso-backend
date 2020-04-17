'use strict';
const socket = require('../realtime/client');

module.exports = (sequelize, DataTypes) => {

  var Task = sequelize.define('Task', {
    description: DataTypes.TEXT
  }, {});

  Task.associate = function(models){
    Task.belongsTo(models.User,{
      as: 'user',
      foreignKey: 'userId'
    });

    Task.belongsToMany(models.Category,{
      through: 'TaskCategories',
      as: 'categories',
      foreignKey: 'categoryId'
    })
  };

  Task.afterCreate(function(task,options){
    socket.emit('new_task',task);
  })
  return Task;
};
