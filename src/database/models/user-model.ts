import {Model, DataType, Table, Column} from "sequelize-typescript"

@Table({
    tableName: "users",
    modelName: "User",
    timestamps: true
})
class User extends Model{

     @Column({
        type: DataType.STRING,
        allowNull: false
    })
    declare username : string;


    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    declare email : string;

    @Column({
        type: DataType.STRING,
        allowNull : false
    })
    declare password: string;


    @Column({
        type: DataType.ENUM("institute-admin","super-admin", "teacher", "student"),
        allowNull: false,
        defaultValue: "student"
    })
    declare role : string;

}

export default User;
