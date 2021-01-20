import { useSelector } from 'react-redux';
import { selectAllUserSelector } from '../../features/Users/Users.selector';
import { UsersTypes } from '../../features/Users/Users.slice';

export default function Users() {
  const users = useSelector(selectAllUserSelector);

  const mapUsers = users.map((user: UsersTypes) => {
    return (
      <tr key={user.id}>
        <td className="py-2">{user.id}</td>
        <td>{user.name}</td>
        <td>{user.username}</td>
        <td>{user.email}</td>
        <td>{new Date(user.email_verified_at).toLocaleDateString()}</td>
        <td>{new Date(user.created_at).toLocaleDateString()}</td>
        <td>{user.role?.name}</td>
        <td>{user.is_active}</td>
      </tr>
    );
  });

  return (
    <div className="w-full bg-gray-100 p-10">
      <h1 className="text-3xl text-black font-bold">List of users</h1>
      <div className="bg-white rounded-md shadow-sm px-5 pb-5 pt-1 mt-10">
        <table className="mt-5 table-auto text-left w-full">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Email Verified</th>
              <th>Created At</th>
              <th>Role</th>
              <th>Active</th>
            </tr>
          </thead>
          <div className="p-1"></div>
          <tbody>{mapUsers}</tbody>
        </table>
      </div>
    </div>
  );
}
