/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onclick = function() {
  //write your code here
  var pronoun = ["the", "our"];
  var adj = ["great", "big"];
  var noun = ["jogger", "racoon"];
  let ext = [".cat", ".com", ".net"];
  let message = [];

  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        for (let l = 0; l < ext.length; l++) {
          console.log(pronoun[i] + adj[j] + noun[k] + ext[l]);
          message.push(pronoun[i] + adj[j] + noun[k] + ext[l] + "</br>");
        }
      }
    }
  }

  document.getElementById("domainNameGenerator").innerHTML = message;
};
