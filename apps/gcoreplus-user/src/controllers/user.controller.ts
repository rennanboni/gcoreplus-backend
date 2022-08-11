import { Crud, CrudController } from '@nestjsx/crud';
import { Controller } from '@nestjs/common';

import { UserService } from '../services';
import { User } from '../entities';
import { UserCreateDto, UserDto } from './dtos';

@Crud({
  model: {
    type: UserDto
  },
  dto: {
    create: UserCreateDto,
    update: UserCreateDto,
  },
  query: {
    softDelete: true
  }
})
@Controller('products')
export class UserController implements CrudController<User> {
  constructor(public service: UserService) {}
}
