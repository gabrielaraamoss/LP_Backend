module.exports = (sequelize, DataTypes) => {
  const Posts = sequelize.define(
    "Posts",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            notNull: {
              msg: "Name is missing",
            },
            notEmpty: {
              msg: "Name must not be empty",
            },
            not: {
              args: /[`~,<>;':"/[\]|{}()=_+-\d]/,
              msg: "Name must only contain letters",
            },
          },
        },
        publication: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            notNull: {
              msg: "Publication is missing",
            },
            notEmpty: {
              msg: "Publication must not be empty",
            },
          },
        },
    },
    {
      tableName: "POSTS",
      underscored: false,
      sequelize,
    }
  );
  Posts.associate=(models) => {
  };
  return Posts;
};