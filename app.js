// Script Vue Slider //

var app = new Vue({
   el: "#app",
   data: {
      hover: false,
      slidesArray: [
         {
            item: "img/01.jpg",
            title: "Svezia",
            message: "Qui è nato Ibra. Onore ad Ibra. Ibrahimovic ole ole ole, segna per noi.",
            active: true
         },
         {
            item: "img/02.jpg",
            title: "Svizzera",
            message: "La svizzera è dove vado a mettere tutti i soldi che guadagno per tenerli al sicuro, paradiso fiscale is the way",
            active: false
         },
         {
            item: "img/03.jpg",
            title: "Gran Bretagna",
            message: "Qui è dove risiede il premier che detiene il record per il maggior numero di giorni senza pettinarsi, ammesso che ce ne sia mai stato uno. Onore a Boris.",
            active: false
         },
         {
            item: "img/04.jpg",
            title: "Germania",
            message: "Sono andato a Berlino ma sembrano tutti molto arrabbiati, quasi quasi imparerò il tedesco anche io per rispondere a dovere",
            active: false
         },
         {
            item: "img/05.jpg",
            title: "Paradise",
            message: "La vista che ho dal balcone della mia villa da 50 milioni di euro, garage capienza per 5 bugatti e piscina...nei miei sogni",
            active: false
         }
      ]
   },

   methods: {
      searchActiveImage: function() {
         let activeIndex;      
         this.slidesArray.forEach(({active},i) => {
            if(active) {
               activeIndex = i;
            }
         });
         return activeIndex;
      },

      changeImage: function(directionUp) {

         let activeIndex = this.searchActiveImage();
         this.slidesArray[activeIndex].active = false;
         if(directionUp) {
            if (activeIndex <= 0) {
               activeIndex = this.slidesArray.length - 1;
            } else {
               activeIndex--;
            }
         } else {
            if (activeIndex >= this.slidesArray.length - 1) {
               activeIndex = 0;
            } else {
               activeIndex++;
            }
         } this.slidesArray[activeIndex].active = true;
      },
      goToImage: function(i) { 

         let activeIndex = this.findActiveSlide();
         this.slidesArray[activeIndex].active = false;
         this.slidesArray[i].active = true;

      },
      
      startInterval: function() {
         this.hover = false;
         const clock = setInterval(() => {
            if(this.hover) {
               clearInterval(clock);
            } else {
               this.changeImage(false);
            }
         }, 4000);
      }
   },
   created: function() {
      this.startInterval();
   }
});