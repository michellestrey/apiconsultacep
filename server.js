const express = require('express');
const fetch = require('node-fetch');


const app = express()
const PORT = 4000


app.use(express.static('public'))

app.get('/api/cep/:cep', async (req, res) =>{
    const {cep} = req.params

   try{
    const response = await fetch(`https://brasilapi.com.br/api/cep/v1/${cep}`)
      if(!response.ok){
        
        return res.status(response.status).json({ error : 'CEP não encontrado!'})

      }
      const data = await response.json()
      res.json(data)
   } catch (error){
      res.status(500).json({error : 'Erro no servidor'})
   }
} )

app.listen(PORT, () =>{
    console.log(`servidor rodando em http://localhost:${PORT}`)
})
app.get('/teste', (req, res) => {
  res.send('Servidor OK!');
});
