import { User } from "../../../db/models";

const usersResolver = () => {
  return User.findOne({
    where: {
        id: 1,
    },
});
}

export default usersResolver