import { useState, useEffect } from 'react';
import axios from 'axios';

import UserItem from './components/userItem/UserItem';
import Spinner from './components/spinner/Spinner';
import './App.css';
import { IUser } from './types/user';

function App() {
  const [data, setData] = useState<IUser[]>([]);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(`https://reqres.in/api/users?page=${page}&per_page=3`);
        setData((prev) => [...prev, ...data.data]);
        setLoading(false);
        setTotalPages(data.total_pages);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUsers();
  }, [page]);

  return (
    <main>
      <section>
        {data.length &&
          data.map((user) => {
            return <UserItem user={user} key={user.id} />;
          })}
        {loading && <Spinner />}
        <button onClick={() => setPage(page + 1)}>Load more</button>
      </section>
    </main>
  );
}

export default App;
