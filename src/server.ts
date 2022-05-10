import express from 'express';


const app = express();

const port = 3000
/**
 * GET      => Buscar info
 * POST     => Criar info
 * PUT      => Alterar info criada
 * DELETE   => Remover dado
 * PATCH    => Alterar informação específica
 */

/**
 * Tipos de parametros:
 * GET
 * -----------------------------------------------------------------------------
 * Route Params =>  http://localhost:3000/produtos/7898aec22-45612345-asdf5456
 * Query Params =>  http://localhost:3000/produtos?name=teclado&price=350
 * =============================================================================
 * POST, PUT PACTH
 * -----------------------------------------------------------------------------
 * Body Params =>   {"name": "teclado", "price": 1500}   
 */
app.get('/auth', (req, res) => {
  return res.send('An authentication is required. Resources denied!')
})

app.post('/test-post', (req, res) => {
  return res.send({"req": "req.body"});
})

app.listen(port, () => {console.log(`Server is running at http://localhost:${port}`)})