import { gql } from '@apollo/client'

// Cambia la contraseña del usuario
export const CHANGE_DATA_USER = gql`
	mutation UpdateUser($input: UserUpdateInput){
    UpdateUser(input: $input)	
  }  		
`