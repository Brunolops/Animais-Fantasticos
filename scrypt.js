// Adicione a classe ativo a todos os itens do menu
// Remove a classe ativo de todos os itens do menu e mantenha ape
// Verifique se as imagens possuem o atributo alt
// Modifique o href do link externo no menu

const menu = document.querySelector ('.menu');
console.log (menu);

menu.setAttribute ('href', 'ativo');

const img = document.querySelector('img');

img.hasAttribute ('alt')