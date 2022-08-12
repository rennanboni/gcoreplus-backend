import datasource from '../gcoreplus-user.db.datasource';
import { User } from '../entities';

datasource.getRepository(User).extend({});
