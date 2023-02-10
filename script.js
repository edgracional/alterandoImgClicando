/* Elemento que se quer selecionar: 
    - primeira lista de imagens;
*/
/* selecionando as imagens que esta apenas dentro da galeria */
const imagens = document.querySelectorAll('#galeria li img');
console.log(imagens);

/* criando a função para galeria trocar */
function galeriaTrocar(e) {
  /* para modificar o item temso que seleciona lo */
  const principal = document.querySelector('#imagem-principal');


  /* colocando o evento dentro de uma variável */
  const clicada = e.currentTarget;

  /* para mudar o soucer coloca principal.src que é o elemento que se deseja mudar 
  e coloca o da clicada : */
  principal.src = clicada.src;
  /* fazer a mesma coisa para o alt: */
  principal.alt = clicada.alt;

  /* para simplificar  - usar direto*/
  //console.log(clicada.src);//para ter acesso pegar a informação do item clicado coloca .src

  /* exemplos: 
  console.log(clicada.alt);//mostra o alt
  console.log(clicada.getAtribute('src'));//mostrando o atributo source
  console.log(clicada.getAtribute('alt'));//mostrando o atributo alt
  console.log(clicada.getAtribute('alt'));//mostrando o atributo alt*/


}

/* Criando um função dentro do forEach */
function galeriaClick(imagem) { //dentro de galeriaClick vc terá acesso a cada uma das imagens...
  imagem.addEventListener('click', galeriaTrocar); //passando o evento de click e despois a função que irá ocorrer quando clicar em cima da imagem para trocar o item da galeria...



}


/* adicionando um evento a cada uma das imagens */
/* utilizando um loop - forEach */
imagens.forEach(galeriaClick);//galeriaClick será ativado para fazer a troca das imagens