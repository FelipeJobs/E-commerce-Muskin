import React, { useEffect, useState, ChangeEvent } from 'react'
import { Box, Button, Card, TextField, Typography } from '@material-ui/core'
import { Link, useNavigate, useParams } from 'react-router-dom'

import Produto from '../../model/Produto'
import { buscaId } from '../../service/Service'


import { useSelector } from 'react-redux'
import { TokenState } from '../../store/tokens/tokenReducer'
import { toast } from 'react-toastify'

function Carrinho() {

    let history = useNavigate()

    const { id } = useParams<{ id: string }>()

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    const [quantidadeFinal, setQuantidadeFinal] = useState(0)

    const [produto, setProduto] = useState<Produto>({
        id: 0,
        nome: "",
        descricao: "",
        quantidade:15,
        preco:0,
        tamanho: '',
    })

    

     useEffect(() => {
         if (id !== undefined) {
            findByIdProduto(id)
         }
     }, [id])

     async function findByIdProduto(id: string) {
     await buscaId(`produtos/${id}`, setProduto, {
            headers: {
                 'Authorization': token
            }
         })
     }

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        let valor = +e.target.value
        setQuantidadeFinal(valor);
    }

    function valorTotal() {
        return quantidadeFinal * produto.preco
    }

    function confirmSales() {
        toast.success('Compra confirmada, para os próximos passos confirme seu e-mail! ✔', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
        history("/listarProduto")
    }

    return (
        <>
            <Box m={2} display="flex" justifyContent="center">
                <Card variant="outlined" className='cardContainer'>

                    <div className='cardProduct'>
                        <img src='https://blog.horlle.com.br/wp-content/uploads/2017/06/79.moda-sustentavel.png' alt="Img" />

                        <div className='cardProductInfo'>
                            <Typography color="textSecondary" gutterBottom>
                                Informações do produto
                            </Typography>

                            <Typography variant="h5" component="h2">
                                Nome: {produto.nome}
                            </Typography>

                            <Typography variant="body2" component="p">
                                R$ {produto.preco}
                            </Typography>

                            <Typography variant="body2" component="p">
                                Quantidade Máx: {produto.quantidade}
                            </Typography>

                            <Typography variant="body2" component="p">
                                Descricao: {produto.descricao}
                            </Typography>

                            <Typography variant="body2" component="p">
                                Tamanho: {produto.tamanho}
                            </Typography>



                            <TextField
                                value={quantidadeFinal}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
                                InputProps={{ inputProps: { min: 1, max: produto.quantidade } }}
                                id="quantidade" label="quantidade" type="number" variant="outlined"
                                name="quantidade" margin="normal" fullWidth
                            />

                            <Typography variant="body2" component="p">
                                Total: R$ {valorTotal()}
                            </Typography>
                        </div>
                    </div>

                </Card>

                <Box display="flex" flexDirection="column" justifyContent="center" mb={1.5}>

                    <Box className="cardProductButton">
                        <Box mx={1} >
                            <Button onClick={confirmSales} variant="contained" size='small' color="primary" className='botaoCompra'>
                                Confimar Compra
                            </Button>
                        </Box>
                    </Box>

                    <Link to="/produtos" className="cardProductButton">
                        <Box mx={1}>
                            <Button variant="contained" size='small' color="secondary">
                                Cancelar
                            </Button>
                        </Box>
                    </Link>

                </Box>
            </Box>
        </>
    )
}

export default Carrinho