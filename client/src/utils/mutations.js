import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const UPDATE_PROFILE = gql`
  mutation updateProfile($userData: ProfileData) {
    updateProfile(userData: $userData) {
      _id
      username
      email
      name
      role
      url
      about_me
    }
  }
`;

export const REMOVE_PROFILE = gql`
  mutation updateProfile($userData: ProfileData) {
    updateProfile(userData: $userData) {
      name
      role
      url
      about_me
    }
  }
`;


