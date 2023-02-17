const search = document.querySelector('.search');
const btn = document.querySelector('.btn');
const input = document.querySelector('.input');

btn.addEventListener('click', () => {
  search.classList.toggle('active');
  input.focus();
});

function builder(x, y) {
  this.xCap = x;
  this.yCap = y;

  this.electro = function () {
    console.log(this.xCap);
  };
}

const fo = new builder('abc', 'bom');

const myObj = {
  first: 'test',
  fun() {
    console.log(this.first);
  },
};

console.log();
