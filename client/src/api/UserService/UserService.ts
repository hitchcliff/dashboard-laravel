import axios from 'axios';
import { AdminUsers } from '../../api';
import { addUsers } from '../../features/Users/Users.slice';
import Store from '../../Store';

export default class UsersService {
  async getUsers() {
    const { data } = await axios.get(AdminUsers);
    console.log(data);

    Store.dispatch(addUsers(data));
  }
}
