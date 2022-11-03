// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import renderMatrix from "../../models/Matrix";


export default function handler(req, res) {
  // res.status(200).json({ name: 'John Doe' })
  const matrix = renderMatrix(16, 6);
  // console.log(matrix);
  return res.json(matrix);
}
