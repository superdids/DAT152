/*

var frukt = {
  init: function() {
    // Kode som legger lytter på knapp for å legge til frukt

	//MutationObserver lar oss reagere på endringer i DOM strukturen
    var observer = new MutationObserver(this.listeEndret.bind(this));

    this.ulElm = document.getElementsByTagName("ul")[0];
    
	//Observer alle elementer i ul!
    observer.observe(this.ulElm,{childList: true});
    // {childList: true} er property av this.ulElm (tror jeg!)
  },

  listeEndret: function(mutations) {
    mutations.forEach(this.visElement.bind(this));
  },

  visElement: function(mutation) {
    var nyeElm = mutation.addedNodes;
    for (var i=0;i<nyeElm.length;++i) {
      window.alert(nyeElm[i].textContent + " ble lagt til i listen.");
    }
  },

  // Kode for å legge til frukt ved klikk på knappen.

};

window.addEventListener('load',frukt.init.bind(frukt),false);

*/

//Event.prototype.stopPropagation 