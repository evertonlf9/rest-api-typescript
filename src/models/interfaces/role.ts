import {Instance} from 'sequelize';

export interface RoleAttributes {
    id: number,
    name: string,
    description: string,
    created_at: string,
    updated_at: string,
    deleted_at: string
}

export interface RoleInstance extends Instance {
    dataValues: RoleAttributes;
}