
let tabs_block = document.querySelector('.tabs_block');

let tabs_block_one = document.querySelector('.tabs_block_one');
let tabs_block_two = document.querySelector('.tabs_block_two');
let tabs_block_three = document.querySelector('.tabs_block_three');

let border_item1 = document.querySelector('.border_item1');
let border_item2 = document.querySelector('.border_item2');
let border_item3 = document.querySelector('.border_item3');




tabs_block_one.classList.add('active');

border_item1.classList.add('active1');



button1.onclick = function() {
  tabs_block_one.classList.add('active');
  border_item1.classList.add('active1');

  tabs_block_two.classList.remove('active');
  tabs_block_three.classList.remove('active');
  border_item2.classList.remove('active1');
  border_item3.classList.remove('active1');
}

  button2.onclick = function() {
    tabs_block_two.classList.add('active');
    border_item2.classList.add('active1');

    tabs_block_one.classList.remove('active');
    tabs_block_three.classList.remove('active');
    border_item1.classList.remove('active1');
    border_item3.classList.remove('active1');
  }

  button3.onclick = function() {
    tabs_block_three.classList.add('active');
    border_item3.classList.add('active1');

    tabs_block_one.classList.remove('active');
    tabs_block_two.classList.remove('active');

    border_item1.classList.remove('active1');
    border_item2.classList.remove('active1');
  }
