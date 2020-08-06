const proffys = [
    { 
      name: "Johnny Carvalho", 
      avatar: "https://avatars1.githubusercontent.com/u/34754632?s=460&u=254c0fdfe9da7c6ce85d0b92773c8763046c186a&v=4",
      whatsapp: "+55993026479",
      bio: "Xonadão no Fleetwood Mac, Beatles, The Cure e Angra.<br><br>Curto muito estudar tecnologia, dá aquele feeling de que podemos criar algo, sabe? Se quiser, posso te ensinar algumas coisas aí, é só chamar, precinho bacana.<br> Dêem uma lida em Clarice Lispector",
      subject: "Programming", 
      cost: "10", 
      weekday: [
          0
      ] , 
      time_from: [720], 
      time_to: [1220] 
    },
    { 
    name: "Vitor 'Vitu' Piovezan ", 
    avatar: "https://avatars1.githubusercontent.com/u/34754632?s=460&u=254c0fdfe9da7c6ce85d0b92773c8763046c186a&v=4",
    whatsapp: "+55993026479",
    bio: "Xonadão no Fleetwood Mac, Beatles, The Cure e Angra.<br><br>Curto muito estudar tecnologia, dá aquele feeling de que podemos criar algo, sabe? Se quiser, posso te ensinar algumas coisas aí, é só chamar, precinho bacana.<br> Dêem uma lida em Clarice Lispector",
    subject: "Programming", 
    cost: "10", 
    weekday: [
        0
    ] , 
    time_from: [720], 
    time_to: [1220] 
  }
];

const subjects = [
        "Artes",
        "Biologia",
        "Ciencias",
        "Educacao Fisica",
        "Fisica",
        "Geografia",
        "Historia",
        "Matematica",
        "Portugues",
        "Quimica",
]

const weekdays = [
        "Domingo",
        "Segunda-feira",
        "Terca-feira",
        "Quarta-feira",
        "Quinta-feira",
        "Sexta-feira",
        "Sabado",
]

function getSubject(subjectNumber) {
    return subjects[+subjectNumber - 1]
}

function pageLanding(req, res) {
    return res.render("index.html");
}

function pageStudy(req, res) {
    const filters = req.query
    return res.render("study.html", { proffys, filters, subjects, weekdays });
}

function pageGiveClasses(req, res) {
    const data = req.query;
    
    const isNotEmpty = Object.keys(data).length != 0

    if (isNotEmpty) {

        data.subject = getSubject(data.subject);

        proffys.push(data);

        return res.redirect("/study")
    }

    return res.render("give-classes.html", {subjects, weekdays});
}


const express = require('express');
const server = express();
const nunjucks = require('nunjucks');

//configurar nunjucks

nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})



//configurar arquivos estaticos
server.use(express.static("public"))
//rotas
.get('/', pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.listen(5500);