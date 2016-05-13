import fetch from 'isomorphic-fetch';


export const changeView = (view) => {
  return {
    type: 'CHANGE_VIEW',
    view
  }
}

export const changeUser = (user) => {
  return {
    type: 'CHANGE_USER',
    user
  }
}

function requestUser(userid) {
  return {
    type: 'REQUEST_USER',
    userid
  }
}

function receiveUser(json) {
  return {
    type: 'RECEIVE_USER',
    user: json
  }
}

export function fetchUser(userid) {
  return dispatch => {
    dispatch(requestUser(userid));
    return fetch(`http://localhost:3000/api/Users/${userid}`)
      .then(response => response.json())
      .then(json => dispatch(receiveUser(json)))
  }
}

function loginSuccess(response) {
  return {
    type: 'LOGIN_SUCCESS',
    payload: response
  }
}

export function loginRequest(username, password) {
  return dispatch => {
    dispatch({
      type: 'LOGIN_REQUEST',
      payload: { username }
    })
    return fetch('http://localhost:3000/api/users/login',
      {
        method: 'POST',
        body: JSON.stringify({username, password}),
        headers: { 'Content-Type': 'application/json'}})
    .then(res => res.json())
    .then(res => dispatch(loginSuccess(res)));
  }
}

function requestFood() {
  return {
    type: 'REQUEST_FOOD'
  }
}

function receiveFood(json) {
  return {
    type: 'RECEIVE_FOOD',
    food: json
  }
}

export function fetchFood() {
  return dispatch => {
    dispatch(requestFood());
    return fetch(`http://localhost:3000/api/food`)
      .then(response => response.json())
      .then(json => dispatch(receiveFood(json)))
  }
}

/*
fetch('/api/users/login',
  {
    method: 'POST',
    body: JSON.stringify({username:"scottsmeester", password:"password123"}),
    headers: { 'Content-Type': 'application/json'}})
.then(res => res.json())
.then(res => console.log(res.id));
*/
