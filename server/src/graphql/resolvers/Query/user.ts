import { User } from "../../../db/models";

const usersResolver = (context: any, {userId}: {userId: string}) => {
  return User.findOne({
    where: {
      id: userId,
    },
});
}

export default usersResolver