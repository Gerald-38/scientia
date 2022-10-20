# SCIENTIA

## Description du projet

Service de mise à disposition de documentaires video scientifiques.

## Technos utilisées
* Java Spring Boot
* Angular

## Lancement du projet
* Executer le script scientia.sql pour créer le schema au nom de scientia
* Lancer le back end sous ecplipse ou tout autre IDE Java
* Dans le dossier frontend : executer npm install puis ng serve
* Les screens des tables de la base et le Modele sont dans le dossier "screens" (fichier pdf)

## Pour créer un user admin
* Lancer le backend
* Dans Postman, se rendre sur le end point localhost:8080/register
* entrer une requete post avec l'objet JSON {"username": "nom_de_votre_choix", "password": "password_de_votre_choix", "role": "admin", "videos": []}
