let imageContainer = document.querySelector('.photos-layot')


let buttons  = document.querySelectorAll('.photos__button');

let arr = [1,7]

buttons.forEach((el) => el.addEventListener('click', ()=> {
    buttons[0].classList.remove('active')
    buttons[1].classList.remove('active')
    buttons[2].classList.remove('active')
    el.classList.add('active')

     if  (buttons[0].classList.contains('active')){ arr = [1,7]
        createGAllery()
    }
     if   (buttons[1].classList.contains('active')){ arr = [8,14]
        createGAllery()
    }
     if   (buttons[2].classList.contains('active')){ arr = [13,19]
        createGAllery()
    }
}))

class Image {
    constructor(container, src) {
      this.container = container;
      this.src = src;
      this.item = this.createNewItem() 
      
      this.item.addEventListener('click', ()=> this.createPopUp())

      this.render ()
    }

    render () {
        this.container.append(this.item)
    }

    createPopUp() {
        
        const photosModal = document.createElement('div')
        photosModal.classList.add('photo-modal')
        const image = document.createElement('img')
        image.classList.add('photo-modal__image')
        image.src = this.src;

        photosModal.append(image);
        document.body.prepend(photosModal);

        photosModal.classList.add('open')


    }

    createNewItem () {
        
        let item = document.createElement('a')
        let image = document.createElement('img')
        item.classList.add('photos-layout__card')
        image.classList.add('photos-layout__img')

      

        image.src = this.src
        item.append(image)

        return item
    }
}


function createGAllery() {
    let  layout = document.querySelector('.photos-layot')
    layout.innerHTML = '';
  for (let i = arr[0]; i <arr[1]; i++) {
    let imageSrc = `../assets/site-images/${i}.jpg`;
    let image = new Image(imageContainer, imageSrc)
  }
}

    
  document.body.addEventListener('click', function (e) {
   if (e.target.classList.contains('photo-modal')) {
     document.querySelector('.photo-modal').remove()
   }
})


createGAllery()