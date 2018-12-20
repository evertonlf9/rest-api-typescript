import * as SequelizeStatic from "sequelize";
import {DataTypes, Sequelize} from "sequelize";
import {UserRoleAttributes, UserRoleInstance} from "./interfaces/user_role";
import {SequelizeModels} from './index';

export default (sequelize: Sequelize, dataTypes: DataTypes):
  SequelizeStatic.Model<UserRoleInstance, UserRoleAttributes> => {
    const UserRole = sequelize.define<UserRoleInstance, UserRoleAttributes>("UserRole", 
    {
        user_id: dataTypes.INTEGER,
        role_id: dataTypes.INTEGER,
        deleted_at: dataTypes.DATE
    }, 
    {
        tableName: 'user_role',
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        paranoid: true,
        underscored: true
    });

    return UserRole;
    }