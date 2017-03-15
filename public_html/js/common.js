/**
 * Création de l'objet data
 * 
 * @type json
 * 
 * @bareme : 1 point respect des attributs (en anglais !)
 * @bareme : 1 point si tableaux utilisés à bon escient
 * @bareme : 1 point si objet est correct en général
 */
var data = {};


/*
 * Fabrication de la partie description
 * 
 * @description : Faites une simple liste des informations, en sautant des lignes parfois pour aérer,
 * si possible sans point à chq item de la liste 
 * 
 * @param {json} data
 * @param {String} idDiv
 * 
 * @bareme : 1 point création architecture de la liste
 * @bareme : 2 points si pas de points à chq item de la liste
 * @bareme : 2 points pour respect des informations à afficher
 * @bareme : 1 point si description aérée
 */
function create_description(data, idDiv){
  
}

/*
 * Fabrication de la partie technical Skills 
 * @description : Faites une liste de chq compétence et représenter la valeur par une progressBar, n'affichez pas la valeur dans le CV 
 * 
 * @param {json} data
 * @param {String} idDiv
 * 
 * @bareme : 1 point pour l'affichage des compétences
 * @bareme : 3 points pour l'utilisation correcte de la progressBar
 */
function create_technicalSkills(data, idDiv){

}

/**
 * Fabrication de la partie exp, form, hobbies
 * Même méthode car même attributs pour expériences, formations & hobbies
 * 
 * @description : Ecrivez le titre puis pour chq expérience ou autre, faites une liste de ce qui est attendu
 * 
 * @param {json} data
 * @param {String} titleName
 * @param {String} idDiv
 * 
 * @bareme : 1 point écriture du bon titre
 * @bareme : 2 points affichage des bonnes informations & dans la bonne div
 */
function create_exp_form_hobbies(data, titleName, idDiv){
 
}

/**
 * @bareme : 2 points pour rendre triable la colonne contenant les expériences, hobbies, formations
 * Chq bloc (exp, form, ou hobbie) doit bouger. Ce n'est pas un élément du bloc qui doit bouger de manière indépendante.
 * 
 * @bareme : 2 points pour le design général
 */
create_description(data, "description");
create_technicalSkills(data.technicalSkills, "technicalSkills");
create_exp_form_hobbies(data.formations, "Formations", "form");
create_exp_form_hobbies(data.experiences, "Expériences", "exp");
create_exp_form_hobbies(data.hobbies, "Loisirs", "hobbies");