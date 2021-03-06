/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('spell_script_target', {
    entry: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: false
    },
    type: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    targetEntry: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'spell_script_target'
  });
};
