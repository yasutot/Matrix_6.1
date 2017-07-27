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
                    <tr v-for="inscrito in inscritos">
                        <td>{{ inscritos.email }}</td>
                        <td>{{ inscritos.nome }}</td>
                        <td>{{ inscritos.sexo }}</td>
                        <td>{{ inscritos.curso }}</td>
                        <td>{{ inscritos.endereco }}</td>
                        <td>{{ inscritos.complemento }}</td>
                        <td>{{ inscritos.cep }}</td>
                        <td>{{ inscritos.municipio }}</td>
                        <td>{{ inscritos.uf }}</td>
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
  let app = Firebase.initializeApp(config);
  let db = app.database();
  let inscritosRef = db.ref('inscritos');

  export default {
    name: 'app',
    firebase: {
        inscritos: inscritosRef
    },
  }
  */
</script>