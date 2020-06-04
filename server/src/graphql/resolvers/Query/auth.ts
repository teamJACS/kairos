import { User } from "../../../db/models";

const authResolver = (context: any, {email, password}: {email: string, password: string}) => {
  return User.findOne({
    where: {
      email,
      password
    },
});
}

export default authResolver