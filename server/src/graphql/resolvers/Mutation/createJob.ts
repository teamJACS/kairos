import { Job } from "../../../db/models";

//
const createJobResolver = (context: any, {
  userId, 
  statusId, 
  company,
  location,
  notes,
  jobTitle,
  dateApplied,
  }: 
 {
  userId: string, 
  statusId: string, 
  company: string,
  location: string,
  notes: string,
  jobTitle: string,
  dateApplied: string, 
}) => {
  return Job.create({
    userId, 
    statusId, 
    company,
    location,
    notes,
    jobTitle,
    dateApplied,
  })
}

export default createJobResolver