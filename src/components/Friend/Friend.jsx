import React from 'react';
import './Friend.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';

const Friend = (props) => {
  const { name, username, email, phone, img } = props.user;

  return (
    <div className="Friend">
      <div className="image">
        <img src={img} alt="user-img" />
      </div>
      <div className="details">
        <h2>{name}</h2>
        <p>@{username}</p>
        <p>email: {email}</p>
        <p>{phone}</p>
        <div className="selery-btn">
          <span>$12586</span>
          <button>
            <FontAwesomeIcon icon={faUserPlus} /> Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default Friend;
