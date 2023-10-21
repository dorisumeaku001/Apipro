import React, { useEffect, useState } from "react";
import axios from "axios";

const UserList = () =&gt; {
  const [userList, setUserList] = useState([]);

  useEffect(() =&gt; {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then(res =&gt; {
        setUserList(res.data);
      })
      .catch(err =&gt; {
        console.log(err);
      });
  }, []);

  return (
    <div>
      {userList.map(user =&gt; (
        <div key="{user.id}">
          <h2>{user.name}</h2>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
        </div>
      ))}
    </div>
  );
};

export default UserList;