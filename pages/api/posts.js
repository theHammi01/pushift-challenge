
import prisma from "/utils/prisma";
import fetchwrapper from "/utils/fetchwrapper";

const { post } = prisma;

export default async function handler(req, res) {

   const {
      id,
      user,
      title,
      link,
      thumb,
      comm,
      score,
      time,
   } = req.body;

   if (req.method === 'GET') {
      const dataSaved = await post.findMany({
         orderBy: { created_utc: "asc" }
      })
      res.status(200).json({data:dataSaved})
      return;
   }

   if (req.method === 'POST') {
      await post.create({
         data: {
            id,
            author: user,
            title,
            full_link: link,
            thumbnail: thumb,
            num_comments: comm,
            score,
            created_utc: time,
         }
      })
      res.status(200).send({ message: 'Post Saved: ' + title})
      return;
   }

   res.status(405).send({ message: 'Method not allowed ' + req.method})
}
