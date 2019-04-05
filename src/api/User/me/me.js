import { prisma } from "../../../../generated/prisma-client";
import { USER_FRAGMENT } from "../../../fragments"

export default {
     Query : {
          me: async(_, args , {request, isAuthenticated}) => {
               isAuthenticated(request);
               const { user } = request;
               //return prisma.user({id: user.id}).$fragment(USER_FRAGMENT);
               const userProfile = await prisma.user({id: user.id});
               const posts = await prisma.user({id: user.id}).posts();

               // graphql 이 prisma 구문을 이해하지 못하기 때문에 
               // fragments 에 쿼리문을 작성해서 하는방법이 있고
               // 해당 모델을 추가로 적어주는 방법이 있다.
               return {
                    user:userProfile, 
                    posts
               };
          }
     }
};