/*
 * This file contains the Map of word --> emoji substitutions.
 */

/* exported sortedEmojiMap */

let dictionary = new Map();
/* dictionary.set(' ', ' '); 
*/
/*
 * Menü-Überschriften
dictionary.set('Statistics', 'Statistik');
dictionary.set('Expeditions', 'Expeditionen'); 
dictionary.set('Overview', 'Übersicht'); 
dictionary.set('Manage data', 'Dateneinstellungen'); 
dictionary.set('Planets overview', 'Planetenübersicht');
dictionary.set('Economy', 'Ökonomie');
dictionary.set('Research', 'Forschung');
dictionary.set('Military', 'Militär');
dictionary.set('Defense', 'Verteidigung');
dictionary.set('Fleet', 'Flotte'); 
dictionary.set('Energy', 'Energie');
dictionary.set('Production', 'Produktion');
dictionary.set('Combats', 'Kämpfe');
dictionary.set('Combat', 'Kampf');  
*/ 
dictionary.set('Arrival', 'Ankunft:');
dictionary.set('Duration', 'Flugzeit:');
dictionary.set('Return', 'Rückkehr:');
dictionary.set('Consumption', 'Verbrauch:');
dictionary.set('No missions...', 'Keine Missionen...');
dictionary.set('Fret', 'Ladekapazität');
dictionary.set('Speed', 'Geschwindigkeit');
dictionary.set('Conso', 'Verbrauch');
dictionary.set('Missing', 'Fehlend'); 
dictionary.set('Resources to keep on planets', 'Ressourcen, die auf dem Planet bleiben sollen'); 
dictionary.set('Ships to keep on planets', 'Schiffe, die auf dem Planet bleiben sollen ');
dictionary.set('Open targets list', 'Ziel-Liste öffnen'); 
dictionary.set('Player search', 'Spielersuche'); 
dictionary.set('Historic', 'Verlauf');
dictionary.set('pts', 'Pkt.');
dictionary.set('ships', 'Schiffe'); 
dictionary.set('Empty', 'Leer'); 
dictionary.set('Crystal', 'Kristall'); 
dictionary.set('Found', 'Gefunden');
dictionary.set('Losses', 'Verluste');
dictionary.set('Fuel', 'Verbrauch');
dictionary.set('Adjust', 'Anpassen');
dictionary.set('Loot', 'Beute');
dictionary.set('Win', 'Siege');
dictionary.set('Best combats', 'Beste Kämpfe');
dictionary.set('Damages', 'Schäden');
dictionary.set('Debris', 'Trümmer');
dictionary.set('Ratio', 'Rate');
dictionary.set('Hour', 'Stunde');
dictionary.set('Day', 'Tag');
dictionary.set('Week', 'Woche');
dictionary.set('Mines', 'Minen');
dictionary.set('planet(s)', 'Planet(en)');
dictionary.set('Flying', 'Flugauslastung');
dictionary.set('Player', 'Spieler');
//Test
/*
 * After all the dictionary entries have been set, sort them by length.
 *
 * Because iteration over Maps happens by insertion order, this avoids
 * scenarios where words that are substrings of other words get substituted
 * first, leading to the longer word's substitution never triggering.
 * 
 * For example, the 'woman' substitution would never get triggered
 * if the 'man' substitution happens first because the input term 'woman'
 * would become 'wo👨', and the search for 'woman' would not find any matches.
 */
let tempArray = Array.from(dictionary);
tempArray.sort((pair1, pair2) => {
  // Each pair is an array with two entries: a word, and its emoji.
  // Ex: ['woman', '👩']
  const firstWord = pair1[0];
  const secondWord = pair2[0];

  if (firstWord.length > secondWord.length) {
    // The first word should come before the second word.
    return -1;
  }
  if (secondWord.length > firstWord.length) {
    // The second word should come before the first word.
    return 1;
  }

  // The words have the same length, it doesn't matter which comes first.
  return 0;
});

// Now that the entries are sorted, put them back into a Map.
let sortedLangMap = new Map(tempArray);
