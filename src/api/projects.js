import request from "./instance";

export async function getProjects() {
  return await request.get("/api/project");
}