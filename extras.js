//Add to Topbar

function addExtras(name) {
    //bar.appendChild(this.createDOM("li", {}, `<a href="${boardlink}" target="_blank">Board</a>`));
    let extra = document.createElement('li');
    extra.innerHTML = name;
    return extra;
}
// get the ul #bar ul 
const menu = document.querySelector("#bar ul");

function ToggleNodeSidebar(){
    console.log("LINK GEKLICKT");
}
//add menue item
menu.appendChild(addExtras('<li><a id="NotesExtra" title="Notiz-Bar an/aus" href="#">Notiz-Bar</a></li>'));

document.getElementById ("NotesExtra").addEventListener ("click", ToggleNodeSidebar, false);