let options = document.querySelectorAll('.dashBoards .DWM p')

let work = document.querySelector('.work')
let play = document.querySelector('.play')
let  study= document.querySelector('.study')
let exercise = document.querySelector('.exercise')
let social = document.querySelector('.social')
let selfCare = document.querySelector('.self-care')

for (let p = 0 ; p <= options.length - 1; p++){

    options[p].onclick = function(){

        for(let i = 0; i <= options.length - 1; i++){
            options[i].classList.remove('select')

            if(i == p){
                options[p].classList.add('select')
            }

        }
    }

}

let infos = document.querySelectorAll('.card .info')
let dots = document.querySelectorAll('.card .info .dotsAndLasts .dots')

for(let i = 0; i <= infos.length - 1; i++){

    infos[i].onclick = function(){     
        
        for(let o = 0; o <= infos.length - 1; o++){
            infos[o].style.backgroundColor = 'var(--dark-blue)'

            if(o == i){
                console.log(infos[i])
                infos[i].style.backgroundColor = 'var(--desaturated-blue)'
            }
        }
    }

}

