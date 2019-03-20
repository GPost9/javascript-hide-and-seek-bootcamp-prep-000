function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.getElementById('nested').querySelector('.target');
}

function increaseRankBy(n) {
  var rank = document.getElementById('app').querySelectorAll('ul.ranked-list li');
  for (var i = 0; i < rank.length; i++) {
    rank[i].innerHTML = parseInt(rank[i].innerHTML) + n;
  }
}

function deepestChild() {
  var node = document.querySelector('#grand-node');
  var child = node.children[0];
  while (child) {
    node = child;
    child = node.children[0];
    
  }
  return node;
}
