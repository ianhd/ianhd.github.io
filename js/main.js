window.onload = () => {
  'use strict';

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
             .register('./sw.js');
  }

  // load recently added/updated questions
  setTimeout(() => {
    var questionsDomEl = document.getElementById("recentQuestions");
    var questions = [
      {id:1,q:"What are we doing for the Christmas party this year?",a:"Morton's!"},
      {id:2,q:"Who won the pong tourney?",a:"Probably not Angel"}
    ];
    questions.forEach(q => {
      questionsDomEl.insertAdjacentHTML('beforeEnd',`<div>${q.q} - ${q.a}</div>`);
    });
  });

  // load people
  fetch('https://randomuser.me/api?results=5')
    .then(res => res.json())
    .then(json => {
        var randomPeopleDomEl = document.getElementById("randomPeople");
        json.results.forEach(p => { 
          randomPeopleDomEl.insertAdjacentHTML('beforeEnd',`<div>${p.email}</div>`);
        });
    });
}

