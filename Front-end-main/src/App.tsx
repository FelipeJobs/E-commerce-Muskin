import React from 'react';
import './App.css';
import Home from './pages/home/Home'
import Navbar from './components/static/navbar/Navbar'
import Footer from './components/static/footer/Footer'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/login/Login'
import CadastroUsuario from './pages/cadastroUsuario/CadastroUsuario';
import CadastroCategoria from './components/categorias/cadastroCategoria/CadastroCategoria';
import ListaCategoria from './components/categorias/listaCategoria/ListaCategoria';
import { Provider } from 'react-redux';
import store from './store/store'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DeletarCategoria from './components/categorias/deletarCategoria/DeletarCategoria';
import CadastroProduto from './components/produtos/cadastrarProdutos/CadastroProduto';
import DeletarProduto from './components/produtos/deletarProduto/DeletarProduto';
import ListaProduto from './components/produtos/listaProduto/ListaProduto';
import Contato from './pages/contato/Contato';
import Carrinho from './components/carrinho/Carrinho'


function App() {
  return(
    <Provider store={store}>
      <ToastContainer />
      <Router>
        <Navbar />
        <div style={{ minHeight: '100vh' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cadastrar" element={<CadastroUsuario />} />
            <Route path="/categorias" element={<ListaCategoria />} />
            <Route path="/criarCategoria" element={<CadastroCategoria />} />
            <Route path="/criarCategoria/:id" element={<CadastroCategoria />} />
            <Route path="/deletar-categoria/:id" element={<DeletarCategoria />} />
            <Route path="/criarProduto" element={<CadastroProduto />} />
            <Route path="/criarProduto/:id" element={<CadastroProduto />} />
            <Route path="/deletarProduto/:id" element={<DeletarProduto />} />
            <Route path="/produtos" element={<ListaProduto />} />
            <Route path="/sobre" element={<Contato />} />
            <Route path="/carrinho" element={<Carrinho />} />

            
            {/* <Route path="/deletar-produto/:id" element={<DeletarProduto />} /> */}
          </Routes>
        </div>
        <Footer />
      </Router>
    </Provider>
    );
    
}

export default App;
