import * as SequelizeStatic from "sequelize";
import {DataTypes, Sequelize} from "sequelize";
import {RolePermissionAttributes, RolePermissionInstance} from "./interfaces/role_permission";
import {SequelizeModels} from './index';

export default (sequelize: Sequelize, dataTypes: DataTypes):
    SequelizeStatic.Model<RolePermissionInstance, RolePermissionAttributes> => {
        const RolePermission = sequelize.define<RolePermissionInstance, RolePermissionAttributes>("RolePermission", 
        {
            role_id: dataTypes.INTEGER,
            permission_id: dataTypes.INTEGER,
            deleted_at: dataTypes.DATE
        }, 
        {
            tableName: 'role_permission',
            createdAt: 'created_at',
            updatedAt: 'updated_at',
            paranoid: true,
            underscored: true
        });

        return RolePermission;
    }