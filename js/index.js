let bnt = document.getElementById("btn");
let arrAlunos = [];

function cadastro() {
  criarTable00();
  let nome = document.getElementById("nome").value;
  let curso = document.getElementById("curso").value;
  let nota01 = document.getElementById("nota01").value;
  let nota02 = document.getElementById("nota02").value;
  let nota03 = document.getElementById("nota03").value;
  let mediaAluno =
    (parseFloat(nota01) + parseFloat(nota02) + parseFloat(nota03)) / 3;

  console.log(nome, curso, nota01, nota02, nota03, mediaAluno);
  if (
    curso !== "invalido" &&
    nota01 >= 0 &&
    nota01 <= 10 &&
    nota02 >= 0 &&
    nota02 <= 10 &&
    nota03 >= 0 &&
    nota03 <= 10
  ) {
    let aluno = {
      nome: nome,
      curso: curso,
      nota01: nota01,
      nota02: nota02,
      nota03: nota03,
      media: mediaAluno,
    };
    arrAlunos.push(aluno);
    console.log(arrAlunos);
    console.log(arrAlunos.length);
    criarTable01();
    limparForm();
  } else {
  
    alert("Verifique se todas as informações estão corretas");
    document.getElementById("curso").focus();
  }
}

function limparForm() {
  document.getElementById("nome").value = "";
  document.getElementById("nome").focus();
  document.getElementById("curso").value = "invalido";
  document.getElementById("nota01").value = "";
  document.getElementById("nota02").value = "";
  document.getElementById("nota03").value = "";
}
function criarTable00() {
  let table00 = document.getElementById("table00");
  table00.innerHTML = `
    <thead class="text-center text-nowrap">
        <tr>
            <th>Nome</th>
            <th>Curso</th>
            <th>Nota 01</th>
            <th>Nota 02</th>
            <th>Nota 03</th>
            <th>Media do Aluno</th>
        </tr>
    </thead>

    <tbody id="table01"></tbody>
    <thead>
        <tr>
            <th class="col">Quantidade De Alunos Cadatrado</th>
            <th class="col">Medias De Todas os Alunos</th>
            <th class="col" colspan="2">Alunos com a media maior ou igual a media geral</th>
            <th></th>
            <th class="col">Alunos com a media menor que a media geral</th>
        </tr>
    </thead>

    <tbody id="table02"></tbody>
    
    `;
}
function criarTable01() {
  let table01 = document.getElementById("table01");
  table01.innerHTML = "";
  for (i = 0; i < arrAlunos.length; i++) {
    table01.innerHTML += `
        <tr> 
          <td> ${arrAlunos[i].nome}</td>
          <td> ${arrAlunos[i].curso}</td>
          <td> ${arrAlunos[i].nota01}</td>
          <td> ${arrAlunos[i].nota02}</td>
          <td> ${arrAlunos[i].nota03}</td>
          <td> ${arrAlunos[i].media.toFixed(1)} </td>
        </tr>
       `;
  }
  criarTable02();
}
function criarTable02() {
  let table02 = document.getElementById("table02");
  let mediaGeral = 0;
  for (i = 0; i < arrAlunos.length; i++) {
    mediaGeral += arrAlunos[i].media;
  }
  mediaGeral /= arrAlunos.length;
  let mediaAcima = 0;
  let mediaAbaixo = 0;
  for (i = 0; i < arrAlunos.length; i++) {
    if (arrAlunos[i].media >= mediaGeral) {
      mediaAcima++;
    } else {
      mediaAbaixo++;
    }
  }
  console.log(mediaGeral);

  table02.innerHTML = `
      <tr>
       <td> ${arrAlunos.length} </td>
       <td> ${mediaGeral.toFixed(1)}</td>
       <td colspan="2"> ${mediaAcima}</td>
       <td></td>
       <td>${mediaAbaixo}</td>
      </tr>
    `;
}
bnt.addEventListener("click", cadastro);
