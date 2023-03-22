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
    let pronoun = ["the", "our"];
    let adj = ["great", "big"];
    let noun = ["jogger", "racoon"];

    let pronounAdj = [];
    let pronAdjWithNouns = [];
    let pronAdjWithNounsAndDotCom = [];

    function mixPronounAdj() {
      for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 2; j++) {
          let temporalVariable = pronoun[i] + adj[j];
          pronounAdj.push(temporalVariable);
        }
      }
      console.log("Hello Rigo from the console!");
      return pronounAdj;
    }

    console.log(mixPronounAdj()); //Devuelve Array 4 elements

    function mixPronounAdjectivesWithNoun() {
      //Cambiar 'arr' por la funcion al final
      for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 2; j++) {
          pronAdjWithNouns.push(pronounAdj[i] + noun[j]);
        }
      }

      return pronAdjWithNouns;
    }

    console.log(mixPronounAdjectivesWithNoun()); //Devuelve 8 Arrays

    function addingDotCom() {
      for (let i = 0; i < pronAdjWithNouns.length; i++) {
        pronAdjWithNounsAndDotCom[i] = pronAdjWithNouns[i] + ".com";
      }

      return pronAdjWithNounsAndDotCom;
    }

    console.log(addingDotCom());
  }
  domainNameGenerator();
};

//Trabajo finalizado debo refactorizarlo porque se que puede estar mejor el codigo
