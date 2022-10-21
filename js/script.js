"use strict";

// FUNZIONI 

function stampaConsole(){

    for(let value of team){
        for(let key in value){
             console.log(key + ': ' +  value[key]);
        }
    }
}

function creaCard(){

    for(let i = 0; i < team.length; i++){

        let myCard = document.createElement('div');
        let cardImg = document.createElement('img');
        cardImg.src = 'img/' + team[i].image;
        let cardName = document.createElement('div');
        cardName.classList.add('mb-3', 'fw-bolder', 'text-white','fs-3');
        let cardRole = document.createElement('div');
        myCard.classList.add('css_card','col-lg-3','m-auto','my_flex', 'mb-5');
        myContainer.append(myCard);
        myCard.append(cardImg);
        myCard.append(cardName);
        myCard.append(cardRole);
        cardImg.append(team[i].image);
        cardName.append(team[i].nome);
        cardRole.append(team[i].ruolo);
    }
}

// VARIABILI 

const myContainer = document.getElementById('container');

const team = [
    {
        nome: 'Wayne Barnett',
        ruolo: 'Founder & CEO',
        image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
        nome: 'Angela Caroll',
        ruolo: 'Chief Editor',
        image: 'angela-caroll-chief-editor.jpg',

    },
    {
        nome: 'Walter Gordon',
        ruolo: 'Office Manager',
        image: 'walter-gordon-office-manager.jpg',
    },
    {
        nome: 'Angela Lopez',
        ruolo: 'Social Media Manager',
        image: 'angela-lopez-social-media-manager.jpg',
    },
    {
        nome: 'Scott Estrada',
        ruolo: 'Developer',
        image: 'scott-estrada-developer.jpg',
    },
    {
        nome: 'Barbara Ramos',
        ruolo: 'Graphic Designer',
        image: 'barbara-ramos-graphic-designer.jpg',
    }
];

// INVOCO LE FUNZIONI 
stampaConsole();
creaCard();
