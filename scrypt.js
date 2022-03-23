// Retorne a soma da largura de todas as imagens



// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)
// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu



const dados = document.querySelectorAll ('a')
console.log (dados);

dados.forEach ((google) => {
  const linkWidth = google.offsetWidth
  const linkHeight = google.offsetHeight
  if (linkHeight >= 48 && linkWidth >= 48) {
    console.log (google,'ok google')
  } else {
    console.log (google,'nao ok google')
  }
})

