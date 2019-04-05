
export const COMMENT_FRAGMENT = `
     fragment CommentPars on Comment{
          id
          text
          user {
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