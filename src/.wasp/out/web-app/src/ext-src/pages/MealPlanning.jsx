import React from 'react';
import { useQuery } from '../../queries';
import { useAction } from '../../actions';

export function MealPlanning() {
  const { data: users, isLoading, error } = useQuery(getUsers);
  const deleteUserFn = useAction(deleteUser);

  if (isLoading) return 'Loading...';
  if (error) return 'Error: ' + error;

  return (
    <div className='p-4'>
      {users.map((user) => (
        <div
          key={user.id}
          className='flex items-center justify-between bg-gray-100 p-4 mb-4 rounded-lg'
        >
          <div>{user.username}</div>
          <div>{user.role}</div>
          <div>
            <button
              onClick={() => deleteUserFn({ userId: user.id })}
              className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'
            >
              Delete
            </button>
            <Link
              to={`/user/${user.id}`}
              className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-2'
            >
              Details
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}