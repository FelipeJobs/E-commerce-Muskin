import { Button, Container, FormHelperText, Grid, TextField, Typography } from '@material-ui/core';
import React, { ChangeEvent, useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import Categoria from '../../../model/Categoria'
import { buscaId, post, put } from '../../../service/Service';
import { TokenState } from '../../../store/tokens/tokenReducer';

import './CadastroCategoria.css';

function CadastroCategoria() {

    let history = useNavigate();
    const { id } = useParams<{ id: string }>();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    )
    const [categoria, setCategoria] = useState<Categoria>({
        id: 0,
        descricao: '',
        categoria: ''
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
        if (id !== undefined) {
            findById(id)
        }
    }, [id])

    async function findById(id: string) {
        buscaId(`/categorias/${id}`, setCategoria, {
            headers: {
                'Authorization': token
            }
        })
    }

    function updatedCategoria(e: ChangeEvent<HTMLInputElement>) {

        setCategoria({
            ...categoria,
            [e.target.name]: e.target.value
        })
    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        console.log("category " + JSON.stringify(categoria))

        if (id !== undefined) {
            console.log(categoria)
            put(`/categorias`, categoria, setCategoria, {
                headers: {
                    'Authorization': token
                }
            })
            toast.success('Categoria atualizada com sucesso', {
                position: "top-right",
                autoClose: 2500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } else {
            post(`/categorias`, categoria, setCategoria, {
                headers: {
                    'Authorization': token
                }
            })
            toast.success('Categoria criada com sucesso', {
                position: "top-right",
                autoClose: 2500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
        back()
    }

    function back() {
        history('/categorias')
    }

    return (
        <Grid container className="containerCategoria">
            <Typography variant="h3" className="tituloCategoria" component="h1" align="center" >Cadastrar Categoria</Typography>
            <form className="caixaCategoria" onSubmit={onSubmit}>
                <Typography variant="h3" className="subtituloCategoria" component="h3" >Nome Categoria</Typography>
                <TextField className="nomeCategoria" value={categoria.categoria} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedCategoria(e)} id="categoria" placeholder="Digite no máximo 50 caracteres" variant="outlined" name="categoria" required />
                <Typography variant="h3" className="subtituloCategoria2" component="h3" >Descrição</Typography>
                <TextField className="descricaoCategoria" value={categoria.descricao} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedCategoria(e)} id="descricao" placeholder="Digite no máximo 500 caracteres" variant="outlined" name="descricao" multiline rows={5} maxRows={5} />
                <Button type="submit" variant="contained" className='btnCategoria'>
                    Cadastrar
                </Button>
            </form>
        </Grid>
    )
}
export default CadastroCategoria