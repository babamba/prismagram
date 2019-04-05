export const USER_FRAGMENT = `
     fragment UserParts on User{
          id
          username
          email
          firstName
          lastName
          bio
          following{
               id
               username
          }
          posts {
               id
               caption
          }
     }
`;