const todo_div_container = document.querySelector('#todo-div-container')
const submit = document.querySelector('#input')
const js_img = document.querySelector('#js_theme')
const bgcolor = document.querySelector('.div-container')
const cabeca = document.querySelector('#cabeca')
const input_div = document.querySelector('#input-div')
const input_div_c = document.querySelector('.input-div')
const color_white = document.querySelector('.color-white')
const fraco = document.querySelectorAll('.fraco')
let v = 0
let x = 1
let classe = 'todo-div-color-black'
let cond = false
let numeros = 0
let numeros2 = 10
let numeros3 = 20
let numeros4 = 30
let itens = 0
let completed = 0
js_img.addEventListener('click', function () {
    ++x
    if (x % 2 == 0) {
        js_img.src = './images/icon-moon.svg'
        bgcolor.classList.replace('div-container-color-black', 'div-container-color-white')
        cabeca.classList.replace('cabeca-dark', 'cabeca-white')
        input_div.classList.replace('input-div-color-black', 'input-div-color-white')
        input_div_c.classList.replace('todo-div-color-black', 'todo-div-color-white')
        color_white.classList.replace('color-white', 'color-black')
        for (let i = 0; i < fraco.length; i++) {
            fraco[i].classList.replace('fraco', 'forte')
        }
        classe = 'todo-div-color-white'
        cond = false
        const div = document.querySelectorAll('.todo-div')
        for (let i = 0; i < numeros; i++) {
            div[i].classList.replace('todo-div-color-black', 'todo-div-color-white')
        }
    } else {
        js_img.src = './images/icon-sun.svg'
        bgcolor.classList.replace('div-container-color-white', 'div-container-color-black')
        cabeca.classList.replace('cabeca-white', 'cabeca-dark')
        input_div.classList.replace('input-div-color-white', 'input-div-color-black')
        input_div_c.classList.replace('todo-div-color-white', 'todo-div-color-black')
        color_white.classList.replace('color-black', 'color-white')
        for (let i = 0; i < fraco.length; i++) {
            fraco[i].classList.replace('forte', 'fraco')
        }
        classe = 'todo-div-color-black'
        cond = true
        const div = document.querySelectorAll('.todo-div')
        for (let i = 0; i < numeros; i++) {
            div[i].classList.replace('todo-div-color-white', 'todo-div-color-black')
        }
    }
})
submit.addEventListener('keypress', function (e) {
    if (e.keyCode == 13) {
        if (submit.value === '') {
            return
        }
        ++numeros
        ++numeros2
        ++numeros3
        ++numeros4
        ++itens
        $('#itens-left').html(itens)
        const div = document.createElement('div')
        div.classList.add('todo-div')
        div.classList.add('flex')
        div.id = numeros
        if (cond) {
            div.classList.add(classe)
        } else {
            div.classList.add(classe)
        }
        todo_div_container.append(div)
        const valor = submit.value
        let divc = document.createElement('div')
        divc.classList.add('todo-div-display')
        div.append(divc)
        divc.innerHTML = `<div class="first-div main-d1"> <div class="ball" id='${numeros3}'></div> </div> <div class="second-div main-d2"><p class="no-checked-p" id='${numeros4}'>
        ${valor} </p> </div> <div class="last-div main-d3"> <img src="./images/icon-cross.svg" class="fechar" id='${numeros2}'> </div> `
        submit.value = ''
        const fechar = document.getElementById(numeros2)
        fechar.addEventListener('click', function () {
            document.getElementById(div.id).remove()
            --itens
            $('#itens-left').html(itens)

        })
        const ball = document.getElementById(numeros3)
        const pa = document.getElementById(numeros4)
        ball.addEventListener('click', function () {
            document.getElementById(ball.id).classList.toggle('checked')
            document.getElementById(pa.id).classList.toggle('checked-p')
            document.getElementById(div.id).classList.toggle('finished')
            completed = document.getElementsByClassName('finished').length
        })
        const js_completed = document.querySelector('.js_completed').addEventListener('click', function () {
            div.classList.remove('flex')
            try {
                if (document.getElementById(div.id).classList.contains('finished')) {
                    document.getElementById(div.id).classList.remove('hide')
                    document.getElementById(div.id).classList.add('flex')
                }
            } catch (error) {
                console.warn('Ninguem viu..')
            }
        })
        const js_all = document.querySelector('.js_all').addEventListener('click', function () {
            try {
                document.getElementById(div.id).classList.add('flex')
            } catch (error) {
                console.warn('Ops..')
            }
        })
        const js_active = document.querySelector('.js_active').addEventListener('click', function () {
            try {
                if (document.getElementById(div.id).classList.contains('finished')) {
                    document.getElementById(div.id).classList.remove('flex')
                }
            } catch (error) {
                console.warn('Besteira')
            }

        })
        const js_completed_clear = document.querySelector('.js_completed_clear').addEventListener('click', function () {
            try {
                if (document.getElementById(div.id).classList.contains('finished')) {
                    document.getElementById(div.id).remove()
                    --itens
                    $('#itens-left').html(itens)

                }
            } catch (error) {
                console.warn('só Ignorar..')
            }

        })

    }
})
