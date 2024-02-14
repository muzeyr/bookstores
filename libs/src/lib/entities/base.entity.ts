import {
  BeforeInsert,
  Column,
  CreateDateColumn,
  DeepPartial,
  DeleteDateColumn,
  Index,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Exclude, Expose } from 'class-transformer';
import { ApiHideProperty } from '@nestjs/swagger';
import { ObjectId } from 'bson';

export abstract class BaseEntity {
  constructor(input?: DeepPartial<any>) {
    if (input) {
      for (const [key, value] of Object.entries(input)) {
        (this as any)[key] = value;
      }
    }
  }

  @PrimaryGeneratedColumn()
  id!: string;

  @Column({ nullable: true })
  uuid!: string;

  @Expose()
  @CreateDateColumn()
  created_at!: Date;

  @Expose()
  @UpdateDateColumn()
  updated_at!: Date;

  @ApiHideProperty()
  @Exclude()
  @DeleteDateColumn({ nullable: true })
  @Index({ unique: false })
  deleted_at?: Date;

  @BeforeInsert()
  async beforeInsert() {
    this.uuid = new ObjectId(ObjectId.generate()).toHexString();
  }
}
