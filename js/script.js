function isOverflown(element) {
    return element.scrollHeight > element.clientHeight || element.scrollWidth > element.clientWidth;
}
let el = document.getElementsByClassName('.text-t')('el');
let fontSize = parseInt(el.style.fontSize);
for (let i = fontSize; i >= 0; i--) {
    let overflow = isOverflown(el);
    if (overflow) {
     fontSize--;
     el.style.fontSize = fontSize + "px";
    }
}
