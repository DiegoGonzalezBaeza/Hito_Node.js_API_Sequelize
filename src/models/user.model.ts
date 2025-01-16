import bcrypt from "bcryptjs";
import { Review } from "./review.model";

import {
  AllowNull,
  Column,
  DataType,
  Default,
  IsEmail,
  IsUUID,
  Model,
  PrimaryKey,
  Table,
  Unique,
  HasMany,
} from "sequelize-typescript";

interface UserAttributes {
  uid?: string;
  email: string;
  password:string;
}

@Table({
  tableName: "users",
})
export class User extends Model<UserAttributes> {
  @IsUUID(4)
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column(DataType.UUID)
  declare uid: string;

  @AllowNull(false)
  @IsEmail
  @Unique
  @Column(DataType.STRING)
  declare email: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  declare password: string;

  @HasMany(() => Review)
  declare reviews: Review[]; // Relación con Review
}