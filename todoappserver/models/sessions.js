module.exports = (sequelize, DataTypes) => {
  const Sessions = sequelize.define(
    'Sessions',
    {
      session_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      token: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      deleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      user_id: {
        type: DataTypes.UUID,
        allowNull: false,
      },
    },
    {
      indexes: [
        {
          unique: true,
          fields: ['token'],
        },
      ],
    }
  );

  return Sessions;
};
