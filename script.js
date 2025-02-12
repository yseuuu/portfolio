function hamburg(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform  = "translateY(0px)"
}
function cancel(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform  = "translateY(-500px)"
}



const texts = [
    "ILLUSTRATOR",
    "3D ARTIST",
    "GRAPHIC DESIGNER"
]

let speed = 200;

const textElements = document.querySelector(".typewriter-text")

let textIndex = 0;
let charcterIndex = 0;

function typeWriter() {
    if(charcterIndex < texts[textIndex].length){
        textElements.innerHTML += texts[textIndex].charAt(charcterIndex);
        charcterIndex++;
        setTimeout(typeWriter, speed); 
    }
    else{
        setTimeout(eraseText, 1000)
    }
}

function eraseText() {
    if(textElements.innerHTML.length > 0){
        textElements.innerHTML = textElements.innerHTML.slice(0,-1)
        setTimeout(eraseText, 50)
    }
    else{
        textIndex = (textIndex + 1) % texts.length;
        charcterIndex = 0;
        setTimeout(typeWriter,500)
    }
}

window.onload = typeWriter;


const dialog = document.querySelector('#dialog');
const images = document.querySelectorAll('.imageGallery button');
const closeDialogBtn = document.querySelector('#closeDialogBtn');

function openDialog(index) {
  if (!document.startViewTransition) {
    dialog.showModal();
    document.querySelectorAll('#carousel img')[index].scrollIntoView();
  } else handleTransition(index);
}

// Wait until the transition finished and the dialog opens before scrolling into view.
async function handleTransition(index) {
  const transition = document.startViewTransition(() => dialog.showModal());
  try {
    await transition.finished;
  } finally {
    document.querySelectorAll('#carousel img')[index].scrollIntoView();
  }
}

const closeDialog = () => {
  if (!document.startViewTransition) dialog.close();
  else document.startViewTransition(() => dialog.close());
};

images.forEach((img, index) => {
  console.log(index);
  img.addEventListener('click', () => openDialog(index));
});

closeDialogBtn.addEventListener('click', () => closeDialog());




