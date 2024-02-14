import { Column, Entity } from 'typeorm';

@Entity()
export class User {
  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  role: string;
}
