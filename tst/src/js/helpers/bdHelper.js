var assert = require("assert");

import Author from "../models/author";
import Serie from "../models/serie";
import Title from "../models/title";

var db = require('../database/database');

export default class BdHelper {

  /*
   * Traitement de l'ensemble des données pour transformer les entrées
   * auteur de la base de donnée en suite d'objet Author
   */
  static getAuthors(json) {
    var arr = [];
    var len = json["authors"].length;
    for (var i = 0; i < len; i++) {
        arr.push(BdHelper.getAuthor(json["authors"][i], i));
    }
    return arr;
  }

  /*
   * A partir des données d'un auteur, on crée un objet Author.
   * Chaque objet Serie est crée et ajouté à l'Author.
   */
  static getAuthor(json, id) {
    var series = [];
    for (var i=0 ; i < json["series"].length ; i++)
    {
      series.push(BdHelper.getSerie(json["series"][i]));
    }
    return new Author(id, json["first_name"], json["last_name"], series);
  }

  /*
   * Traitement de l'ensemble des données pour transformer les entrées
   * series de la base de donnée en suite d'objet Serie
   */
  static getSeries(json) {
    var arr = [];
    var len = json["series"].length;
    for (var i = 0; i < len; i++) {
        arr.push(BdHelper.getSerie(json["series"][i]));
    }
    return arr;
  }

  /*
   * A partir des données d'une série, on crée un objet Serie.
   */
  static getSerie(json) {
    return new Serie(json["id"], json["name"], json["author"]);
  }



  /*
   * Traitement de l'ensemble des données pour transformer les entrées
   * titres de la base de donnée en suite d'objet Titre
   */
  static getTitles(json) {
    var arr = [];
    var len = json["titles"].length;
    for (var i = 0; i < len; i++) {
        arr.push(BdHelper.getTitle(json["titles"][i], i));
    }
    return arr;
  }

  /*
   * A partir des données d'un titre, on crée un objet Title.
   */
  static getTitle(json, id) {
    return new Title(id, json["name"], json["author"]);
  }

  /*
   * Renvoie l'objet json correspondant à la catégorie, au critère voulue
   */
  static searchParams(json, categoryField, searchField, searchVal) {
    for (var i=0 ; i < json[categoryField].length ; i++)
    {
      if (json[categoryField][i][searchField] == searchVal) {
        return json[categoryField][i]
      }
    }
  }
}
