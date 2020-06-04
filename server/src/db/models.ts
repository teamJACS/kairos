import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";

//users table
@Table({
  tableName: "users",
  defaultScope: {
    attributes: { exclude: ["deletedAt", "createdAt", "updatedAt"] }
  }
})
export class User extends Model<User> {
  @Column({
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataType.INTEGER,
  })
  id!: string;
  
  @Column({
    allowNull: false,
    type: DataType.STRING,
    unique: true
  })
  email!: string;

  @Column({
    allowNull: false,
    type: DataType.STRING,
  })
  password!: string;

  @HasMany(() => Job)
  jobs!: Job[];
}

//status table
@Table({
  tableName: "status",
  defaultScope: {
    attributes: { exclude: ["deletedAt", "createdAt", "updatedAt"] }
  }
})
export class Status extends Model<Status> {
  @Column({
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataType.INTEGER,
  })
  id!: string;
  
  @Column({
    allowNull: false,
    type: DataType.STRING,
    unique: true
  })
  name!: string;

  @HasMany(() => Job)
  jobs!: Job[];
}

//jobs table
@Table({
  tableName: "jobs",
  defaultScope: {
    attributes: { exclude: ["deletedAt", "createdAt", "updatedAt"] }
  }
})
export class Job extends Model<Job> {
  @Column({
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataType.INTEGER,
  })
  id!: string;

  @Column({
    allowNull: false,
    type: DataType.INTEGER,
  })
  @ForeignKey(() => User)
  userId!: string;

  @Column({
    allowNull: false,
    type: DataType.INTEGER,
  })
  @ForeignKey(() => Status)
  statusId!: string;

  @Column({
    allowNull: false,
    type: DataType.STRING,
  })
  company!: string;

  @Column({
    allowNull: true,
    type: DataType.STRING,
  })
  location!: string;

  @Column({
    allowNull: true,
    type: DataType.STRING,
  })
  notes!: string;

  @Column({
    allowNull: true,
    type: DataType.STRING,
  })
  jobTitle!: string;

  @Column({
    allowNull: true,
    type: DataType.DATE,
  })
  dateApplied!: string;

  @BelongsTo(() => User)
  user!: User
  
  @BelongsTo(() => Status)
  status!: Status
}

export default [User, Job, Status];
