'use restric'

const KEY_ENTER = 13;

const $app = document.getElementById('app');
const $form = document.querySelector('.form-collab');
const $label = document.querySelector('.label');
const $input = document.querySelector('.input');

const newTag = value => {
  // assim que funciona o <Fragement> do React.
  const $wrap = document.createElement('div');

  const template = `
    <div class="tag">
      <input class="input" type="checkbox" name="${value}" id="${value}" checked>
      <label class="label" for="${value}">${value}</label>
      <span class="remove">x</span>
    </div>
  `

  $wrap.innerHTML = template;

  return $wrap;
}

$form.addEventListener('submit', e => e.preventDefault());

$input.addEventListener('focus', changeFont);
$input.addEventListener('blur', changeFont);

function changeFont () {
  $label.classList.toggle('font-italic');
};

$input.addEventListener('keyup', e => {
  if (e.keyCode == KEY_ENTER) {
    const { value } = $input;


  // add atrás
  $app.appendChild(newTag(value));

  // add na frente
  // $app.prepend($wrap);


    $input.value = '';
  }
});

$app.addEventListener('click', e => {
  const { target } = e;

  if (target.classList.contains('remove')) {
    const tag = target.closest('.tag');
    tag.classList.add('delete');

    tag.addEventListener('transitionend', () => tag.remove());
  }
})