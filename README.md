# agcon-sensorsApi
API de présentation des données récupérés par les capteurs de l'agence connecté.

## Installation
git clone puis npm install

## Utilisation
npm start
Les API disponibles sont :

* **sensors/** Liste des capteurs
* **sensors/:id** Descriptif d'un capteur (pagination ou embedded ?)
* **sensors/:id/measures** Liste de l'ensemble des mesures du capteur (pagination)
* **rooms/** Liste des lieux contenant des capteurs - Paramétrage pour avoir le type de capteur
* **rooms/:id** Descriptif d'une salle contenant au moins un capteur
