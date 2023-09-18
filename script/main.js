var back = document.getElementByid('back');
var text = document.getElementByid('blank');

text.addeventlistener("click",blur);

function blur() {
    back.classlist.blur('active');
 } 