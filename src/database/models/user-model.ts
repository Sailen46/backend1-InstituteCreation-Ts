import {Model, DataType, Table, Column} from "sequelize-typescript"



@Table({
    tableName: "Users",
    modelName: "User",
    timestamps: true
})
class User extends Model{

   @Column({
    primaryKey : true,
    type : DataType.UUID,
    defaultValue : DataType.UUIDV4

   })
   declare id : string;

     @Column({
        type: DataType.STRING,
        allowNull: false,
        unique : true
    
    })
    declare username : string;


    @Column({
        type: DataType.STRING,
        allowNull: false,
        unique : true
       
    })
    declare email : string;

    @Column({
        type: DataType.STRING,
        allowNull : false,
        
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
