import { User } from "../../../db/models";

const createUserResolver = (context: any, {email, password}: {email: string, password: string}) => {
  return User.create({email, password})
}

export default createUserResolver;