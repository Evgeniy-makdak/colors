function likeOrDislike(buttons) {
  let state = "Nothing";
  for (let button of buttons) {
    if (button !== state) {
        state = button;
    } else {
        state = "Nothing";
    }
  }
  return state;
}

console.log(likeOrDislike(["Like", "Dislike", "Like", "Dislike", "Dislike", "Like"]));
