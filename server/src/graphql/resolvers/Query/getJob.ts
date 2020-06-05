import { Job } from "../../../db/models";

const getJabResolver = (context: any, { userId, jobId }: { userId: string, jobId: string }) => {
  return Job.findOne({
    where: {
      id: jobId,
      userId
    },
  });
}

export default getJabResolver