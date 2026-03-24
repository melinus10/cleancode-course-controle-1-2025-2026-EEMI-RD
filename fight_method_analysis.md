 
- la fonction fight() fait trop de choses à la fois -> faire des sous fonctions appart 

- la fonction fight() a trop d'arguments 

- des switch cases qui ne respectent pas le open/closed principal -> utiliser le polymorphisme -> création d'une classe weapon 

- if else imbriqués -> à remplacer par du failfast -> on vérifie les cas ou ça échoue sinon return succées ( pas de else ) (if (condition) alors échec)

- du code répété pour le switch -> faire une fonction dans la classe et l'appeler depuis fight()

- weaponsList initlaisé deux fois ? -> aucun interet 

- commentaires inutiles -> on supprime les commentaires qui expliquent le code , si c'est bien écrit le code est self explanatory 