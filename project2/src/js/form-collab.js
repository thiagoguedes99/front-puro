'use restric'

console.log('foi')

const $form = document.querySelector('.form-collab');
const $label = document.querySelector('.label');
const $input = document.querySelector('.input');

// $input.addEventListener('focus', () => {
//   $label.classList.add('font-italic');
// });
// $input.addEventListener('blur', () => {
//   $label.classList.remove('font-italic');
// });

$input.addEventListener('focus', changeFont);
$input.addEventListener('blur', changeFont);

function changeFont () {
  $label.classList.toggle('font-italic');
};






console.log(label)