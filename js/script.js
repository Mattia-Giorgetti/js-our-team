"use strict";

function stampaConsole(){

    for(let value of team){
        for(let key in value){
             console.log(key + ': ' +  value[key]);
        }
    }

}

function creaCard(){
    for(let i = 0; i < membersNum; i++){
        let myCard = document.createElement('div');
        let cardImg = document.createElement('div');
        let cardName = document.createElement('div');
        let cardRole = document.createElement('div');
        myCard.classList.add('css_card', 'col-lg-3','m-auto','my_flex', 'mb-5');
        myContainer.append(myCard);
            myCard.append(cardImg)
            myCard.append(cardName)
            myCard.append(cardRole)
            cardImg.append(team[i].image)
            cardName.append(team[i].nome)
            cardRole.append(team[i].ruolo)
    }
}



const myContainer = document.getElementById('container');
const membersNum = 6;

const team = [
    {
        nome: 'Wayne Barnett',
        ruolo: 'Founder & CEO',
        image: 'wayne-barnett-founder-ceo.jpeg',
    },
    {
        nome: 'Angela Caroll',
        ruolo: 'Chief Editor',
        image: 'angela-caroll-chief-editor.jpeg',

    },
    {
        nome: 'Walter Gordon',
        ruolo: 'Office Manager',
        image: 'walter-gordon-office-manager.jpeg',
    },
    {
        nome: 'Angela Lopez',
        ruolo: 'Social Media Manager',
        image: 'angela-lopez-social-media-manager.jpeg',
    },
    {
        nome: 'Scott Estrada',
        ruolo: 'Developer',
        image: 'scott-estrada-developer.jpeg',
    },
    {
        nome: 'Barbara Ramos',
        ruolo: 'Graphic Designer',
        image: 'barbara-ramos-graphic-designer.jpeg',
    }
];
stampaConsole();
creaCard();
