//verificar se o e mail foi preenchido
const verificaCampoPreenchido = (evento) => {
    if (evento.target.value == '') {
        evento.target.style.outline = "2px solid #789636";
        evento.target.setAttribute('placeholder', `Campo ${evento.target.name} vazio`)
    } else {
        evento.target.style.outline = 'none';
        evento.target.setAttribute('placeholder', '')
    }
}
const onFileChange = evento => {
    let img = document.getElementById('output');
    img.src = URL.createObjectURL(evento.target.files[0])
}
//1-capturar imput do email
let inputEmail = document.querySelector("#registro > form input[type=email]");
let inputSenha = document.querySelector("#registro > form input[type=password]");
let inputFile = document.querySelector("#registro > form input[type=file]");
let form = document.getElementById('formularioCadastro');




//2 - Associar o evento a uma função
// inputEmail.addEventListener('nomedoevente',()=>{codigo a ser executado});
inputEmail.addEventListener('blur', verificaCampoPreenchido);
inputSenha.addEventListener('blur', verificaCampoPreenchido);
inputFile.addEventListener('change', onFileChange);
form.addEventListener('submit',
    (evt) => {
        evt.preventDefault();
        let formData = new FormData(form);
        fetch("http://localhost:3000/api/v1/usuarios",
        {
            method: 'POST',
            body: formData,
            headers:{'Content-Type': 'aplication/json'}

        })
    });














































let amigos = [{
        id: 1,
        nome: "Wendel Cultrim",
        email: "wendel@digitalhouse.com",
        foto: `http://lorempixel.com.br/500/500`
    },
    {
        id: 2,
        nome: "Sérgio Moura",
        email: "ssiqueira@digitalhouse.com",
        foto: `http://lorempixel.com.br/500/500/?2`
    },
    {
        id: 3,
        nome: "Silvia Fiacador",
        email: "silvia@digitalhouse.com",
        foto: `http://lorempixel.com.br/500/500/?3`
    }
];

let listaDeAmigos = document.getElementById("listaDeAmigos");
console.log(listaDeAmigos);

let string = '';
for (let i = 0; i < amigos.length; i++) {
    const amigo = amigos[i];
    string += `
    <article>
        <img src="${amigo.foto}" alt="Foto de ${amigo.nome}">
        <span>${amigo.nome}</span>
        <a href="mailto:${amigo.email}">${amigo.email}</a>
    </article>
    `
}
console.log(string);
listaDeAmigos.innerHTML = string