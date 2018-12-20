import * as SequelizeStatic from "sequelize";
import {DataTypes, Sequelize} from "sequelize";
import {CommentAttributes, CommentInstance} from "./interfaces/comment";
import {SequelizeModels} from './index';

export default (sequelize: Sequelize, dataTypes: DataTypes):
    SequelizeStatic.Model<CommentInstance, CommentAttributes> => {
        const Comment = sequelize.define<CommentInstance, CommentAttributes>("Comment", 
        {
            post_id: dataTypes.INTEGER,
            user_id: dataTypes.INTEGER,
            body: dataTypes.STRING,
            deleted_at: dataTypes.DATE
        }, 
        {
            tableName: 'comments',
            createdAt: 'created_at',
            updatedAt: 'updated_at',
            indexes: [],
            paranoid: true,
            underscored: true
        });

        return Comment;
    }