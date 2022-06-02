import { Box, Button, FormHelperText, Grid, TextField, Typography } from '@material-ui/core'
import React, { useState, useEffect, ChangeEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Usuario from '../../model/Usuario'
import { cadastroUsuario } from '../../service/Service'
import './CadastroUsuario.css'
import '../../components/toastify/Toastify.css';
import imgCad from "../../assets/MuSkinPeq.png";
import { toast } from 'react-toastify'


function CadastroUsuario() {
    let history = useNavigate()

    const [confirmarSenha, setConfirmarSenha] = useState<String>("")

    const [user, setUser] = useState<Usuario>({
        id: 0,
        nome: '',
        usuario: '',
        senha: '',
        foto: '',
        dataNascimento: '' 

    })

    const [userResult, setUserResult] = useState<Usuario>({
        id: 0,
        nome: '',
        usuario: '',
        senha: '',
        foto: '',
        dataNascimento: '' 
    })
     
    useEffect(() => {
        if (userResult.id !== 0) {
            history("/login")
        }
    }, [userResult])

    function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>) {
        setConfirmarSenha(e.target.value)
      
    }

    function updatedModel(e: ChangeEvent<HTMLInputElement>) {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    async function cadastrar(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()

       
        if (confirmarSenha === user.senha && user.senha.length >= 8) {

            
            try {
                cadastroUsuario(`/usuarios/cadastrar`, user, setUserResult)
                toast.success('Usuário cadastrado com sucesso', {
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
                console.log(`Error: ${error}`)
                toast.error('Dados do usuário inconsistentes', {
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
            toast.warn('Dados do usuário inconsistentes', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
                
            });

            setUser({ ...user, senha: "" }) 
        }
    }
    return (

       

        <Grid item xs={12}  container justifyContent='center' alignItems='center' direction="row" className="backPage">
            <Box className="linhasCadastro">
            
            <div className='linhaVertical'> <div className='linhaVertical2'><div className='linhaVertical3'></div></div></div>
            
            </Box>
            <Grid item xs={3}  alignItems='center' direction="column" className ="backgroundCadastro form1" >
               
                <Box padding={5}>
                    
                    <form onSubmit={cadastrar}>

        
                        <Typography
                            variant='h5'
                            gutterBottom
                            component='h5'
                            align='center'
                            className='tituloCadastro'
                        >
                         
                          INSIRA SEUS DADOS PARA  CADASTRO:

                        </Typography>

                        <Typography
                            variant='h5'
                            gutterBottom
                            component='h5'
                            align='center'
                            className='subTit'
                        >
                         
                         NOME

                        </Typography>


                        <TextField
                            id='nome'
                            variant='outlined'
                            name='nome'
                            margin='normal'
                            placeholder='Digite no mínimo 5 caracteres'                
                            required
                            fullWidth
                            value={user.nome}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            className="textField"
                        >
                            Nome

                        </TextField>


                        <Typography
                            variant='h5'
                            gutterBottom
                            component='h5'
                            align='center'
                            className='subTit'
                        >
                         
                          USUÁRIO

                        </Typography>                            


                        <TextField
                            id='usuario'
                            variant='outlined'
                            name='usuario'
                            margin='normal'
                            placeholder='Digite um e-mail válido'
                            required
                            fullWidth
                            value={user.usuario}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            className="textField"

                        >
                            Usuario
                        
                        </TextField>


                        <Typography
                            variant='h5'
                            gutterBottom
                            component='h5'
                            align='center'
                            className='subTit'
                        >
                         
                      SENHA

                        </Typography>                            
    




                        <TextField
                            id='senha'
                            variant='outlined'
                            name='senha'
                            margin='normal'
                            placeholder='Digite no mínimo 8 caracteres'
                            type='password'
                            required
                            fullWidth
                            value={user.senha}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            className="textField"

                        >
                            Senha
                       
                        </TextField>

                        <Typography
                            variant='h5'
                            gutterBottom
                            component='h5'
                            align='center'
                            className='subTit'
                        >
                         
                          CONFIRMAR SENHA

                        </Typography>  


                        <TextField
                            id='confirmarSenha'
                            variant='outlined'
                            name='confirmarSenha'
                            margin='normal'
                            placeholder='Confirme a senha'
                            type='password'
                            required
                            fullWidth
                            value={confirmarSenha}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)}
                            className="textField"

                        >
                            Confirmar Senha
                        </TextField>


                        <Typography
                            variant='h5'
                            gutterBottom
                            component='h5'
                            align='center'
                            className='subTit'
                        >
                         
                          DATA DE NASCIMENTO

                        </Typography>                                                      

                        <TextField
                            id='dataNascimento'
                            variant='outlined'
                            name='dataNascimento'
                            margin='normal'
                            type='date'
                            required
                            
                            value={user.dataNascimento}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            className="textField"
                        >
                            Data de nascimento
                        
                        </TextField>
                    
                    <Grid container justifyContent='flex-start' >      

                               
                                <FormHelperText >
                            
                                    *Apenas maiores de idade
                            
                                </FormHelperText>
                            
                         <Box>
                        
                            <Button
                              
                                type='submit'
                                variant='contained'
                                className='btnCadastrar'>
                            
                                    Cadastrar
                            
                            </Button>
                            
                            <Link to='/login' className='linkTexto'>

                                <Button
                            
                                    variant='contained' 
                                    className='btnCancelar'>
                                        
                                    Cancelar
                                    
                                 </Button>
                        
                            </Link>
                        
                        </Box>
                    </Grid>

                    </form>

                </Box>

        </Grid>

        </Grid>
    )
}
export default CadastroUsuario