import { useEffect, useState } from "react";

const UserPage = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [shouldFetch, setShouldFetch] = useState(false);

  useEffect(() => {
    if (!shouldFetch) return;

    const fetchUsers = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch("https://dummyjson.com/users");

        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }
        const data = await response.json();
        setUsers(data.users);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchUsers();

  }, [shouldFetch]);

  return (
    <div className="min-h-screen bg-slate-900 text-white px-6 py-10">
      <div className="max-w-6xl mx-auto">
       
        <h1 className="text-3xl font-bold text-center mb-8">
          User Directory 
        </h1>

        <div className="flex justify-center mb-6">
          <button
            onClick={() => setShouldFetch(true)}
            disabled={loading}
            className="px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700  disabled:opacity-50"
          >
            Fetch Users
          </button>
        </div>

        {loading && (
          <p className="text-center text-indigo-300">
            Loading users...
          </p>
        )}

        {error && (
          <p className="text-center text-red-400">
            {error}
          </p>
        )}

        <div className="grid gap-6 mt-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
          {users.map(user => (
            <div
              key={user.id}
              className="bg-slate-800 rounded-xl p-5 shadow-lg hover:scale-105 "
            >
              <img
                src={user.image}
                alt={user.firstName}
                className="w-20 h-20 rounded-full mx-auto mb-4"
              />

              <h3 className="text-lg font-semibold text-center">
                {user.firstName} {user.lastName}
              </h3>

              <p className="text-sm text-slate-400 text-center">
                {user.email}
              </p>

              <p className="text-xs text-slate-500 text-center mt-1">
                {user.company.title}
              </p>
              <p className="text-xs text-slate-500 text-center mt-1">
                {user.role}
              </p>
            </div>
          ))}
        </div>

        {shouldFetch && !loading && users.length === 0 && !error && (
          <p className="text-center text-slate-400 mt-8">
            No users found.
          </p>
        )}
      </div>
    </div>
  );
};

export default UserPage;
