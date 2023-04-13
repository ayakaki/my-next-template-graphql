import apolloClient from '@/utils/ApolloClient';
import { gql } from '@apollo/client';

export const LoginAPICall = async (email, password) => {
  const GQL_SCRIPT_LOGIN_USER = gql`
    mutation LoginUser($email: String!, $password: String!) {
      loginUser(email: $email, password: $password) {
        userName
        email
      }
    }
  `;

  const response = await apolloClient
    .mutate({
      mutation: GQL_SCRIPT_LOGIN_USER,
      variables: {
        email: email,
        password: password,
      },
    })
    .then((response) => {
      return response.data.loginUser;
    })
    .catch((error) => {
      console.log(error);
    });

  return response;
};
