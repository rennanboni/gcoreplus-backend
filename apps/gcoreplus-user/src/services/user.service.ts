import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

import { CONNECTION } from '../gcoreplus-user.contants';
import { User } from '../entities';

@Injectable()
export class UserService extends TypeOrmCrudService<User> {

  constructor(
    @InjectRepository(User, CONNECTION) repository: Repository<User>
  ) {
    super(repository);
  }

}
