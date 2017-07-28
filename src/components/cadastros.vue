<template>
    <div>
        <nav>
            <div class="nav-wrapper">
                <a href="#" class="brand-logo center">MATRIX</a>
                <ul id="nav-mobile" class="left hide-on-med-and-down">
                    <li><a href="http://cariocadev.com.br/">CariocaDev</a></li>
                </ul>
            </div>
        </nav>
        <div class="container">
            <h1 align="center">Cadastros Efetuados</h1>
        </div>
        <div class="container">
            <div class="row">
              <form action="#">
                <div class="col s4 cent er">
                  <input name="group1" type="radio" id="local" v-on:click="armazenamento(1)"/>
                  <label for="local">Somente localStorage</label>
                </div>
                <div class="col s4 center">
                  <input name="group1" type="radio" id="fire" v-on:click="armazenamento(2)"/>
                  <label for="fire">Somente Firebase</label>
                </div>
                <div class="col s4 center">
                  <input name="group1" type="radio" id="todos" v-on:click="armazenamento(3)"/>
                  <label for="todos">Todos</label>
                </div>
              </form>
            </div>
            <table class="highlight striped centered">
                <thead>
                  <th>Email</th>
                  <th>Nome</th>
                  <th>Sexo</th>                    
                  <th>Curso</th>
                  <th>Endereço</th>
                  <th>Complemento</th>
                  <th>CEP</th>
                  <th>Municipio</th>
                  <th>UF</th>
                </thead>
                <tbody>
                  <tr v-for="cadastro in cadastros">
                    <td>{{ cadastro.email }}</td>
                    <td>{{ cadastro.nome }}</td>
                    <td>{{ cadastro.sexo }}</td>
                    <td>{{ cadastro.curso }}</td>
                    <td>{{ cadastro.endereco }}</td>
                    <td>{{ cadastro.complemento }}</td>
                    <td>{{ cadastro.cep }}</td>
                    <td>{{ cadastro.municipio }}</td>
                    <td>{{ cadastro.uf }}</td>
                  </tr>
                </tbody>
            </table>
            <div class="row center">
            </div>
            <div class="row center">
                <a class="waves-effect waves-light btn-large indigo" href="form-cadastros.html">Voltar</a>
            </div>
        </div>
        <footer class="page-footer">
            <div class="footer-copyright">
                <div class="container">
                    © 2017 MATRIX
                </div>
            </div>
        </footer>
    </div>
</template>


<script>
  import db from '../../src/firebase.js'
  let inscritosRef = db.ref('inscritos');


  export default {
    name: 'app',
    firebase: {
        inscritos: inscritosRef
    },
    data () {
      return {
        cadastros: []
      }
    },
    methods: {
      armazenamento(tipo) {
        if (tipo === 1){
          this.cadastros = '';
          var getLocal = JSON.parse(localStorage.getItem("inscritos"));
          this.cadastros = getLocal;
        } else {
          if (tipo === 2){
              var inscritosFire = firebase.inscritosRef;
              this.cadastros = '';
              this.cadastros = inscritosFire;
          }
        }
      }
    }
  }
</script>