import { projects } from '@portfolio/data/projects'
export default async function handler (req, res) {
  res.status(200).json(projects)
}
