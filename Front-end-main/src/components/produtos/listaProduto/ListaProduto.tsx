import { Box, Button, Card, CardActions, CardContent, Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import Produto from "../../../model/Produto";
import { busca, buscaProduto } from "../../../service/Service";
import { TokenState } from "../../../store/tokens/tokenReducer";

import './ListaProduto.css';

function ListaProduto() {

  let history = useNavigate()

  const [produtos, setProdutos] = useState<Produto[]>([])

  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );

  async function getProduto() {
    await buscaProduto("/produtos/todos", setProdutos, {
      headers: {
        'Authorization': token
      }
    })
    
  }

  useEffect(() => {
    getProduto()
  }, [produtos.length])

  return (
    <>
      {
        produtos.map(produto => (
          <Box m={2} >
            <Card variant="outlined">
              <CardContent>

                <Typography color="textSecondary" gutterBottom>
                  Produto
                </Typography>

                <Typography variant="h5" component="h2">
                  {produto.nome}<br/>
                  {produto.descricao}<br/>
                tamanho: {produto.tamanho}<br/>
                R$: {produto.preco}
                </Typography>

              </CardContent>

              <CardActions>
                <Box display="flex" justifyContent="center" mb={1.5} >

                  <Link className="text-decoration-none" to={`/deletarProduto/${produto.id}`}>
                    <Box mx={1}>
                      <Button variant="contained" size='small' >
                        Deletar
                      </Button>
                    </Box>
                  </Link>

                  <Link className="text-decoration-none" to={`/criarProduto/${produto.id}`} >
                    <Box mx={1}>
                      <Button variant="contained" size='small' >
                        Atualizar
                      </Button>
                    </Box>
                  </Link>
                </Box>
              </CardActions>

            </Card>
          </Box>
        ))}
    </>
  )
}

export default ListaProduto;