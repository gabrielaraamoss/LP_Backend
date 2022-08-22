module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define(
    "Product",
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
        family: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            notNull: {
              msg: "Family is missing",
            },
            notEmpty: {
              msg: "Family must not be empty",
            },
            not: {
              args: /[`~,<>;':"/[\]|{}()=_+-\d]/,
              msg: "Family must only contain letters",
            },
          },
        },
        carbohydrates: {
          type: DataTypes.FLOAT,
          allowNull: false,
          validate: {
            notNull: {
              msg: "Carbohydrates is missing",
            },
            notEmpty: {
              msg: "Carbohydrates must not be empty",
            }
          },
        },
        protein: {
          type: DataTypes.FLOAT,
          allowNull: false,
          validate: {
            notNull: {
              msg: "Protein is missing",
            },
            notEmpty: {
              msg: "Protein must not be empty",
            }
          },
        },
        fat: {
          type: DataTypes.FLOAT,
          allowNull: false,
          validate: {
            notNull: {
              msg: "Fat is missing",
            },
            notEmpty: {
              msg: "Fat must not be empty",
            }
          },
        },
        calories: {
          type: DataTypes.FLOAT,
          allowNull: false,
          validate: {
            notNull: {
              msg: "Calories is missing",
            },
            notEmpty: {
              msg: "Calories must not be empty",
            }
          },
        },
        sugar: {
          type: DataTypes.FLOAT,
          allowNull: false,
          validate: {
            notNull: {
              msg: "Sugar is missing",
            },
            notEmpty: {
              msg: "Sugar must not be empty",
            }
          },
        },  
    },
    {
      tableName: "PRODUCT",
      underscored: false,
      name: {
        singular: "PRODUCT",
        plural: "PRODUCTS",
      },
      sequelize,
    }
  );
  Product.associate=(models) => {
  };
  return Product;
};