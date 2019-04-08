
export const COMMENT_FRAGMENT = `
          id
          text
          user {
               ${USER_FRAGMENT}
          }
`

export const USER_FRAGMENT = `
          id
          username
`

export const FILE_FRAGMENT = `
          id
          url
`

export const FULL_POST_FRAGMENT = `
     fragment PostParts on Post{ 
          id
          location
          caption
          files{
               id
               url
          }
          comments{
               id
               text
               user{
                    id
                    username
               }
          }
          user{
               id
               username
          }
     }
`

// 이렇게 텍스트형식으로 fragment문 작성
// export const USER_FRAGMENT = `
//      fragment UserParts on User{
//           id
//           username
//           email
//           firstName
//           lastName
//           bio
//           following{
//                id
//                username
//           }
//           posts {
//                id
//                caption
//           }
//      }
// `;