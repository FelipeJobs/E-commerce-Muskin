import { Button, Container, FormControl, FormHelperText, InputLabel, Select, MenuItem, TextField, Typography, FormLabel, RadioGroup, FormControlLabel, Radio, Grid } from '@material-ui/core';
import React, { ChangeEvent, useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import Categoria from '../../../model/Categoria';
import Produto from '../../../model/Produto'
import { buscaId, post, put, busca } from '../../../service/Service';
import { TokenState } from '../../../store/tokens/tokenReducer';

import './CadastroProduto.css'

function CadastroProduto() {

    let history = useNavigate();
    const { id } = useParams<{ id: string }>();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    )

    const [categoria, setCategoria] = useState<Categoria>({
        id: 0,
        categoria: '',
        descricao: ''
    })

    const [categorias, setCategorias] = useState<Categoria[]>([])

    const [produto, setProduto] = useState<Produto>({
        id: 0,
        nome: '',
        quantidade: 0,
        preco: 0,
        descricao: '',
        tamanho: '',
        categoria: null
    })

    useEffect(() => {
        if (token == "") {
            toast.warn('Você precisa estar logado', {
                position: "top-right",
                autoClose: 2500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            history("/login")
        }
    }, [token])

    useEffect(() => {
        setProduto({
            ...produto,
            categoria: categoria
        })
    }, [categoria])

    useEffect(() => {
        getCategorias()
        if (id !== undefined) {
            findById(id)
        }
    }, [id])

    async function findById(id: string) {
        buscaId(`/produtos/${id}`, setProduto, {
            headers: {
                'Authorization': token
            }
        })
    }

    async function getCategorias() {
        await busca("/categorias/todos", setCategorias, {
            headers: {
                'Authorization': token
            }
        })
    }

    function updatedProduto(e: ChangeEvent<HTMLInputElement>) {
        setProduto({
            ...produto,
            [e.target.name]: e.target.value,
            categoria: categoria
        })
        console.log(categoria)
    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        console.log("product " + JSON.stringify(produto.tamanho))

        if (id !== undefined) {
            try {
                await put(`/produtos`, produto, setProduto, {
                    headers: {
                        'Authorization': token
                    }
                })
                toast.success('Produto atualizado com sucesso', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    theme: "colored",
                    progress: undefined,
                });
            } catch (error) {
                toast.error('Erro ao atualizar, verifique os campos', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    theme: "colored",
                    progress: undefined,
                });
            }

        } else {
            try {
                await post(`/produtos`, produto, setProduto, {
                    headers: {
                        'Authorization': token
                    }
                })
                toast.success('Produto cadastrado com sucesso', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    theme: "colored",
                    progress: undefined,
                });
            } catch (error) {
                toast.error('Erro ao cadastrar, verifique os campos', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    theme: "colored",
                    progress: undefined,
                });
            }
        }
        back()
    }

    function back() {
        history('/produtos')
    }

    return (
        <Grid container className="containerProduto">
            <Container >
                <Typography className="tituloProduto" variant="h3" component="h1" align="center" >Cadastrar Produto</Typography>
                <form className="caixaProduto" onSubmit={onSubmit}>
                    <div className="titulos1">
                    <Typography className="subtituloProduto" variant="h3" component="h1" >Nome</Typography>
                    <Typography className="subtituloProduto2" variant="h3" component="h1" >Tamanho</Typography>
                    </div>
                    <div className="teste2">
                        <TextField value={produto.nome} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)} id="nome" variant="outlined" name="nome" margin="normal" className="nomeProduto" label="Nome" placeholder="Digite o nome do produto" required />
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="female"
                            name="radio-buttons-group"
                            className="tamanhoProduto"
                            row
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)}

                        >
                            <FormControlLabel value="PP" name='tamanho' control={<Radio />} label="PP" />
                            <FormControlLabel value="P" name='tamanho' control={<Radio />} label="P" />
                            <FormControlLabel value="M" name='tamanho' control={<Radio />} label="M" />
                            <FormControlLabel value="G" name='tamanho' control={<Radio />} label="G" />
                            <FormControlLabel value="GG" name='tamanho' control={<Radio />} label="GG" />
                        </RadioGroup>
                    </div>
                   
                    <TextField value={produto.quantidade} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)} id="quantidade" variant="outlined" name="quantidade" margin="normal" label="Quantidade" placeholder="Quantidade em estoque" className="quantidadeProduto" />
                    <TextField value={produto.preco} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)} id="preco" label="Preço" variant="outlined" name="preco" required margin="normal" placeholder="Digite o preço do produto" className="precoProduto" />

                    <FormControl>
                        <InputLabel className="selecaoCategoria" id="demo-simple-select-helper-label"> Categoria </InputLabel>
                        <Select
                            labelId="demo-simple-select-helper-label"
                            id="demo-simple-select-helper"
                            className="categoriaProduto"
                            onChange={(e) => buscaId(`/categorias/${e.target.value}`, setCategoria, {
                                headers: {
                                    'Authorization': token
                                }
                            })}>

                            {
                                categorias.map(categoria => (
                                    <MenuItem value={categoria.id}>{categoria.categoria}</MenuItem>
                                ))
                            }
                        </Select>
                        <FormHelperText>Escolha uma categoria para a postagem</FormHelperText>
                    </FormControl>
                    <TextField value={produto.descricao} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)} id="descricao" placeholder='Máximo de 1000 caracteres' label="Descrição" variant="outlined" name="descricao" margin="normal" className="descricaoProduto" multiline rows={6} maxRows={6} />
                        <Button type="submit" variant="contained" className="btnProduto" >
                            Cadastrar
                        </Button>
                </form>
            </Container>
        </Grid>
    )
}

export default CadastroProduto