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
      <h1 align="center">Cadastro</h1>
    </div>
    <div class="row">
      <div class="container">
        <h4 align="center" id="aviso"></h4>
      </div>
    </div>
    <div class="container"> 
      <div class="row">
        <form class="col s12" v-on:submit.prevent="cadastrar">
          <div class="row">
            <div class="input-field col s6">
              <i class="material-icons prefix">email</i>
              <input type="email" id="mail" v-model="novoCadastro.email">  
              <label data-error="E-mail inválido">Endereço de e-mail:</label>
            </div>
            <div class="input-field col s6">
              <i class="material-icons prefix">perm_identity</i>
              <input type="text" id="nome" v-model="novoCadastro.nome">
              <label>Nome:</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s4">
              <select id="sexo" class="browser-default">
                <option disabled selected>Sexo:</option>
                <option v-for="sexo in novoCadastro.sexos" v-bind:value="sexo.value">
                  {{ sexo.text }}
                </option>
              </select>
            </div>
            <div class="input-field col s8">
              <select id="curso" class="browser-default">
                <option disabled selected>Cursos:</option>
                <option v-for="curso in novoCadastro.cursos" v-bind:value="curso.value">
                  {{ curso.text }}
                </option>
              </select>
            </div>
          </div>
          <div class="row">
            <div class="input-field">
              <input type="text" id="endereco" v-model="novoCadastro.endereco">
              <label>Endereço para correspondência:</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s8">
              <input type="text" id="complemento" v-model="novoCadastro.complemento">
              <label>Complemento do Endereço:</label>
            </div>
            <div class="input-field col s4">
              <input type="text" id="cep" v-model="novoCadastro.cep">
              <label>CEP:</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s10">
              <input type="text" id="municipio" v-model="novoCadastro.municipio">
              <label>Município:</label>
            </div>
            <div class="input-field col s2">
              <select id="uf" class="browser-default" >
                <option disabled selected>UF:</option>
                <option v-for="uf in novoCadastro.ufs" v-bind:value="uf.value">
                  {{ uf.text }}
                </option>
              </select>
            </div>
          </div>
          <div class="row">
            <div class="col s6 center-align">
              <div class="row center-align">
                <div class="button">
                  <button class="btn waves-effect waves-light indigo" type="submit" name="action">Enviar
                    <i class="material-icons right">send</i>
                  </button>
                </div>
              </div>             
              <div class="row center-align">
                <input type="checkbox" class="filled-in" id="checkbox" v-model="checked" />
                <label for="checkbox">Gravar no Firebase</label>
              </div>
            </div>
            <div class="col s6 center-align">
              <a class="waves-effect waves-light btn indigo" href="cadastros.html">Ver Todos</a>
            </div>
          </div>       
        </form>
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
/*
  import Firebase from 'firebase'
  let config = {
    apiKey: "AIzaSyCA0lVGbPYTNxqZDJH9rM_1X0-KdPS7gMc",
    authDomain: "matrix-9fe37.firebaseapp.com",
    databaseURL: "https://matrix-9fe37.firebaseio.com",
    projectId: "matrix-9fe37",
    storageBucket: "matrix-9fe37.appspot.com",
    messagingSenderId: "536206031808"
  }
  */
  import db from '../../src/firebase.js'
  /*
  let app = Firebase.initializeApp(config);
  let db = app.database();
  */
  let inscritosRef = db.ref('inscritos');

  export default {
    name: 'app',
    firebase: {
      inscritos: inscritosRef
    },
    data () {
      return {
        novoCadastro: {
          email: '',
          nome: '',
          sexos: [
            {text: "Masculino", value:"1"},
            {text: "Feminino", value:"2"}
          ],
          cursos: [
            {text: "Tecnico em Informática", value:"1"},
            {text: "Tecnico em Alimentos", value:"2"},
            {text: "Tecnico em Agropecuária", value:"3"}
          ],
          endereco: '',
          complemento: '',
          cep: '',
          municipio: '',
          ufs: [
            {text: "AC", value:"AC"},
            {text: "AL", value:"AL"},
            {text: "AM", value:"AM"},
            {text: "AP", value:"AP"},
            {text: "BA", value:"BA"},
            {text: "CE", value:"CE"},
            {text: "DF", value:"DF"},
            {text: "ES", value:"ES"},
            {text: "GO", value:"GO"},
            {text: "MA", value:"MA"},
            {text: "MG", value:"MG"},
            {text: "MS", value:"MS"},
            {text: "MT", value:"MT"},
            {text: "PA", value:"PA"},
            {text: "PB", value:"PB"},
            {text: "PE", value:"PE"},
            {text: "PI", value:"PI"},
            {text: "PR", value:"PR"},
            {text: "RJ", value:"RJ"},
            {text: "RN", value:"RN"},
            {text: "RS", value:"RS"},
            {text: "RO", value:"RO"},
            {text: "RR", value:"RR"},
            {text: "SC", value:"SC"},
            {text: "SE", value:"SE"},
            {text: "SP", value:"SP"},
            {text: "TO", value:"TO"}
          ]
        },
        checked: false 
      }
    },
    methods: {
      cadastrar: function(){
        var objCadastro = {
          email: this.novoCadastro.email,
          nome: this.novoCadastro.nome,
          sexo: this.novoCadastro.sexos[0].text,
          curso: this.novoCadastro.cursos[0].text,
          endereco: this.novoCadastro.endereco,
          complemento: this.novoCadastro.complemento,
          cep: this.novoCadastro.cep,
          municipio: this.novoCadastro.municipio,
          uf: this.novoCadastro.ufs[0].text
        }
        if (this.checked === true) {
          inscritosRef.push(objCadastro);
        } 
        else {
          if (localStorage.getItem("inscritos") === null) {
            var arrayCadastro = [objCadastro];
            localStorage.setItem("inscritos",JSON.stringify(arrayCadastro));
          }
          else {
            var cadastro = JSON.parse(localStorage.getItem("inscritos"));
            var tamanho = Object.keys(cadastro).length;
            for ( var i = 0 ; i < tamanho ; i++) {
              var emailPesquisado = cadastro[i].email;
              if (emailPesquisado === this.email){
                var duplicidade = true;
                break;
              }
            }
            if (duplicidade != true) {
              cadastro.push(objCadastro);
              localStorage.setItem("inscritos",JSON.stringify(cadastro));
            }
            else {
              alert ("O e-mail " + this.email + " já está cadastrado.");
            }
          }
        }
      }
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

label {
	color: black !important;    
}

.waves-effect.waves-light.btn.indigo {
    width: 149.5px;
    height: 36px;
}

.button { 
	text-align: center;
}

.nav-wrapper {
	background-color: #3949ab;
}

.page-footer {
	background-color: #3f51b5 !important;
}

.footer-copyright {
	background-color: #3949ab !important;
}

table.highlight.striped.centered tbody tr:hover {
    background-color:#8c9eff !important;
}

#cbfirebase[type="checkbox"] + label:after {
  background: indigo;
  border: 2px solid indigo;
}

.checkbox-indigo.filled-in[type="checkbox"] + label:after{
  border: 2px solid white;
  background: transparent;
}
</style>
