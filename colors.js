function likeOrDislike(buttons) {
  let state = "Nothing";
  for (let i = 0; i < buttons.length; i++) {
    console.log(`buttons[i]: ${buttons[i]}, state: ${state}`)
    if (buttons[i] !== state) {
        state = buttons[i];
    } else {
        state = "Nothing";
    }
  }
  return state;
}

console.log(likeOrDislike(["Like", "Dislike", "Like", "Dislike", "Dislike", "Like", "Like", "Dislike"]));
