AFRAME.registerComponent("comics-posters", {
  init: function() {
    this.postersContainer = this.el;
    this.posters();
    this.handleMouseEnterEvents();
    this.handleMouseLeaveEvents();
  },

  update: function() {
    const fadeBackgroundEl = document.querySelector("#fadeBackground");
    //check if the infoBanner plane already has comic texet info child entity
    //if so remove teh child to avoid the overlapping of the text
    c = fadeBackgroundEl.children;
    if (c.length > 0) {
      var i; 
      for (i=0; i<= c.length; i++){
        fadeBackgroundEl.removeChild(c[i]);
      }
    }
  }, 
  else { 
    this.handleMouseClickEvents()
  }, 

  posters: function() {
    const postersRef = [
      {
        id: "superman",
        url: "./assets/posters/superman-poster.jpg"
      },
      {
        id: "spiderman",
        url: "./assets/posters/spiderman-poster.jpg"
      },

      {
        id: "captain-aero",
        url: "./assets/posters/captain-aero-poster.jpg"
      },
      {
        id: "outer-space",
        url: "./assets/posters/outer-space-poster.jpg"
      }
    ];
    let prevoiusXPosition = -60;

    for (var item of postersRef) {
      const posX = prevoiusXPosition + 25;
      const posY = 10;
      const posZ = -40;
      const position = { x: posX, y: posY, z: posZ };
      prevoiusXPosition = posX;

      // Border Element
      const borderEl = this.createBorder(position, item.id);

      // Poster Element
      const poster = this.createPoster(item);
      borderEl.appendChild(poster);

      this.postersContainer.appendChild(borderEl);
    }
  },
  createBorder: function(position, id) {
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("id", id);
    entityEl.setAttribute("visible", true);
    entityEl.setAttribute("geometry", {
      primitive: "plane",
      width: 22,
      height: 40
    });

    entityEl.setAttribute("position", position);
    entityEl.setAttribute("material", { color: "#fff" });

    return entityEl;
  },
  createPoster: function(item) {
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("visible", true);
    entityEl.setAttribute("geometry", {
      primitive: "plane",
      width: 20,
      height: 28
    });

    entityEl.setAttribute("position", { x: 0, y: 5, z: 0.1 });
    entityEl.setAttribute("material", { src: item.url });

    return entityEl;
  }, 
  handleMouseEnterEvents: function(){
    this.el.addEventListener("mouseenter", ()=> {
      const id = this.el.getAttribute("id");
      constpostersId = [
        "superman", 
        "spiderman", 
        "captain-aero", 
        "outer-space", 
      ];
      if (postersId.includes(id)){
        const postersContainer = document.querySelector("#posters-container"); 
        postersContainer.setAttribute("cursor-listener", {
          selectedItemId: id, 
        }); 
        this.el.setAttribute("material", {color: "#1565c0"})
      }
    }); 
  }, 
  handleMouseLeaveEvents: function(){
    this.el.addEventListener("mouseenter", ()=> {
      const id = this.el.getAttribute("id");
      constpostersId = [
        "superman", 
        "spiderman", 
        "captain-aero", 
        "outer-space", 
      ];
      if (postersId.includes(id)){
        const postersContainer = document.querySelector("#posters-container"); 
        postersContainer.setAttribute("cursor-listener", {
          selectedItemId: id, 
        }); 
        this.el.setAttribute("material", {color: "#1565c0"})
      }
    }); 
  }, 

  handleMouseClickEvents: function(){
    //check the selected item to set the "info-banner" component on the plane
    if (selectedItemId) {
      fadeBackgroundEl.setAttribute("visible", true);
      fadeBackgroundEl.setAttribute("info-banner", {
        itemId: selectedItemId,
      }); 
      titleEl.setAttribute("visible", false);
      cursorEl.setAttribute("position", {x: 0, y: 0, z: -1});
      cursorEl.setAttribute("geometry", {
        radiusInner: 0.03, 
        radiusOuter: 0.04,
      });
    } else {
      //else make the plane invisible
      fadeBackgroundEl.setAttribute("visible", false);
      titleEl.setAttribute("visible", true);
      cursorEl.setAttribute("position", {x: 0, y: 0, z: -3});
      cursorEl.setAttribute("geometry", {
        radiusInner: 0.08, 
        radiusOuter: 0.12,
      });
    }
  }
});
