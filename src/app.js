/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  function random() {
    return Math.floor(Math.random() * 2);
  }

  function domainNameGenerator() {
    let pronounAdjRandomized = [];
    let fullyRandomizedVariable = [];
    let pronounAdjRandomizedFiltered = [];
    let pronoun = ["the", "our"];
    let adj = ["great", "big"];
    let noun = ["jogger", "racoon"];

    console.log(random());

    function pronounAdjPermuts() {
      for (let i = 0; i < 4; i++) {
        pronounAdjRandomized.push(pronoun[random()] + adj[random()]);

        // pronounAdjRandomized.push(pronoun[1] + adj[0]);
        // pronounAdjRandomized.push(pronoun[1] + adj[1]);
        // pronounAdjRandomized.push(pronoun[0] + adj[0]);
      }

      pronounAdjRandomizedFiltered = pronounAdjRandomized.filter(() => {
        for (let i = 0; i < pronounAdjRandomized.length; i++) {
          pronounAdjRandomized[i] != pronounAdjRandomized;
        }
      });

      return pronounAdjRandomizedFiltered;
    }

    pronounAdjPermuts();

    function fullyRandomized() {
      for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
          let content = pronounAdjRandomizedFiltered[i] + noun[random];
          fullyRandomizedVariable.push(content);
        }
      }
      return fullyRandomizedVariable; //Hasta aca todo bien
    }

    fullyRandomized();

    // function deleteRepeateds(fullyRandomizedVariable) {
    //   for () {}
    // }

    console.log(pronounAdjPermuts(pronounAdjRandomizedFiltered));

    console.log(fullyRandomizedVariable);

    console.log("Hello Rigo from the console!");
  }

  domainNameGenerator();
};
