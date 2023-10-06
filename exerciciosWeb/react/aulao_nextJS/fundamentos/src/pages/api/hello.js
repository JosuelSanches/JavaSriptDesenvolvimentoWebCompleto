// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
      name: 'John Doe',
      age: +30,
      nome: req.query.nome,
      idade: +req.query.idade  
    })
}
