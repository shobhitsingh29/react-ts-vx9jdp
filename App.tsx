import React, { useState } from 'react';

const APIURL = 'https://jsonplaceholder.typicode.com/users';
function App() {
  const [d, setD] = useState([]);
  const [od, setOD] = useState([]);
  const [s, setS] = useState(0);
  const getUsers = async () => {
    const data = await fetch(APIURL).then((data) => data.json());
    setD([...data]);
    setOD([...data]);
    //write code here
    //render the list of users
  };
  const sortList = () => {
    console.log(s, '[[[[[[[[[[[[[[[222');

    if (s % 3 === 0) {
      const newArr1 = d.sort(function (a, b) {
        var x = a['username'];
        var y = b['username'];
        return x < y ? -1 : x > y ? 1 : 0;
      });
      console.log(newArr1, '000');
      setD([...newArr1]);
      setS((p) => p + 1);

      return;
    } else if (s % 3 === 1) {
      const newArr = d.sort(function (a, b) {
        var x = a['username'];
        var y = b['username'];
        return x < y ? 1 : x > y ? -1 : 0;
      });
      console.log(newArr, '222');
      setD([...newArr]);
      setS((p) => p + 1);
    }
    if (s % 3 === 2) {
      setD([...od]);
      setS((p) => p + 1);

      return;
    }

    //write code here
    // sort the user list by name's length
    // on first click list will sorted in assending order
    // on second click list will be sorted in descending order
    // on third click default list will be rendered
    // on fourth click again start form step 1
  };

  return (
    <main>
      <h1>User List</h1>
      <div>
        <button onClick={getUsers}>Get Users</button>
        <button onClick={sortList}>Sort list by name's length</button>
      </div>
      <ul>
        {d?.map((i, index) => {
          return <li key={index}>{i.username}</li>;
        })}
      </ul>
    </main>
  );
}

export default App;
