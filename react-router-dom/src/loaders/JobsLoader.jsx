export const jobsLoader = async () => {
  const res = await fetch("http://localhost:3000/jobs");
  if (!res.ok) {
    throw new Error("Failed to fetch jobs");
  }
  return res.json();
};

export const jobDetailaLoader = async({params}) =>{
  const {id} = params;
  const res = await fetch("http://localhost:3000/jobs/"+id);
   if (!res.ok) {
     throw new Error("Failed to fetch jobs");
   }
   return res.json();
}