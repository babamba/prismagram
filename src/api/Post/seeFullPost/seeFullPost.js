import { prisma } from "../../../../generated/prisma-client"
import { COMMENT_FRAGMENT } from "../../../fragments"

export default{
     Query:{
          seeFullPost : async(_, args) => {
               const { id } = args;
               const post = await prisma.post({id});
               const comments = await prisma.post({id}).comments().$fragment(COMMENT_FRAGMENT);
               const likeCount = await prisma
               .likesConnection({
                    where:{ post :{ id } }
               }).aggregate().count();

               return {
                    post,
                    comments,
                    likeCount
               }
          }
          
          // prisma.posts({
          //      where:{
          //           OR:[
          //                {caption_starts_with:args.term},
          //                {location_starts_with:args.term}
          //                // {username_contains:args.term} ,
          //                // {firstName_contains:args.term},
          //                // {lastName_contains:args.term}
          //           ]
          //      }
          // })
     }
}