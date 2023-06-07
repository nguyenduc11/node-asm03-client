import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { deleteSession } from '../Redux/Action/ActionSession';
import UserAPI from '../API/UserAPI';
import queryString from 'query-string';
function LoginLink(props) {
  const dispatch = useDispatch();
  const onRedirect = async () => {
    //
    const response = await UserAPI.postSignOut();
    console.log(response);

    localStorage.clear();

    const action = deleteSession('');
    dispatch(action);
  };

  return (
    <li
      className="nav-item"
      onClick={onRedirect}
    >
      <Link
        className="nav-link"
        to="/signin"
      >
        ( Logout )
      </Link>
    </li>
  );
}

export default LoginLink;
