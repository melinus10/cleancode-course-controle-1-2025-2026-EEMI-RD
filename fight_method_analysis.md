 
- la fonction fight() fait trop de choses à la fois -> faire des sous fonctions appart 

- la fonction fight() a trop d'arguments 

- des switch cases qui ne respectent pas le open/closed principal -> utiliser le polymorphisme 

- if else imbriqués -> à remplacer par du failfast -> on vérifie les cas ou ça échoue sinon return succées ( pas de else ) (if (condition) alors échec)

- du code répété pour le switch -> faire une sous fonction appart et l'appeler dans fight()