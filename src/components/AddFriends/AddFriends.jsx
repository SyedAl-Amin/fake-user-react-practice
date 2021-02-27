import React, { useEffect, useState } from 'react';
import Friend from '../Friend/Friend';
import './AddFriends.css';
import userData from '../../user.json';

const AddFriends = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers(userData);
  }, []);

  return (
    <div className="AddFriends container">
      <div className="friend-content">
        {users.map((user) => (
          <Friend user={user} key={user.id} />
        ))}
      </div>
      <div className="friend-count">
        llll Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni
        reprehenderit exercitationem animi. Quasi aperiam maiores similique,
        iusto ut impedit accusamus voluptate ratione labore, inventore, odio
        porro totam mollitia? Amet, similique.
      </div>
    </div>
  );
};

export default AddFriends;
