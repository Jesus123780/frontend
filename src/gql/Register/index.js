import { gql } from '@apollo/client';

export const REGISTER = gql`
 mutation register($input: UserInput){
  register(input: $input){
    name
    username
    email
    lastName
    siteWeb
    description
    uPhoNum
    upLat
    upLon
    password
    avatar
  }
}
`