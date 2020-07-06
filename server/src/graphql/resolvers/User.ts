import { User, Job, Status } from "../../db/models";

const resolvers = {
  jobs: (user: User) => {
    return Job.findAll({
      include: [
        {
          model: User,
          where: { id: user.id }
        }
      ],
      order: ["dateApplied"]
    })
  },
}

export default resolvers;