var app = new Vue({
    el: '#app',
    data: {
        products:[
          {name: "MOLOSroto",
           info: [
            {link: "../doc/MOLOSroto/MOLOSroto DF.pdf",text: "Каталог MOLOSrotoDF"},
            {link: "../doc/MOLOSroto/РЭ DF21.pdf",text: "Руководство по эксплуатации MOLOSrotoDF21"}
           ],
           img: "../img/products/3.png"
         },
          {name: "MOLOSvibro",
           info: [
             {link: "../doc/MOLOSvibro/MOLOSvibro VF.pdf",text: "Каталог MOLOSvibroVF"}
           ],
           img: "../img/products/6.png"
         },
          {name: "MOLOSmembran",
           info: [
             {link: "../doc/MOLOSmembran/MOLOSmembran MF.pdf",text: "Каталог MOLOSmembranMF"}
           ],
           img: "../img/products/5.png"
         },
          {name: "MOLOSpendu",
           info: [
             {link: "../doc/MOLOSpendu/MOLOSpendu PF.pdf",text: "Каталог MOLOSpenduPF"},
             {link: "../doc/MOLOSpendu/Ex.pdf",text: "Брошюра по взрывозащите"}
           ],
           img: "../img/products/4.png"
         },
          {name: "MOLOSwave",
           info: [
             {link: "../doc/MOLOSwave/MOLOSwave MWF.pdf",text: "Каталог MOLOSwaveMWF"},
             {link: "../doc/MOLOSwave/Ex.pdf",text: "Брошюра по взрывозащите"},
             {link: "../doc/MOLOSwave/РЭ MWF.pdf",text: "Руководство по эксплуатации MOLOSwaveMWF"},
             {link: "../doc/MOLOSwave/Info.pdf",text: "Информационная брошюра"}
           ],
           img: "../img/products/1.png"
         },
          {name: "MOLOSbob",
           info: [
             {link: "../doc/MOLOSbob/MOLOSищи LF.pdf",text: "Каталог MOLOSbobLF"},
             {link: "../doc/MOLOSbob/Ex.pdf",text: "Брошюра по взрывозащите"},
             {link: "../doc/MOLOSbob/РЭ LF20.pdf",text: "Руководство по эксплуатации MOLOSwaveMWF"},
             {link: "../doc/MOLOSbob/ИП LF20.pdf",text: "Инструкция по эксплуатации"}
           ],
           img: "../img/products/2.png"
         }
        ],
        selectedGroup:'',
      },
      computed: {
        setImg: function() {
          var source = "";
          switch(this.selectedGroup) {
            case "MOLOSroto":
              source = "../img/products/3.png";
              break;
            case "MOLOSvibro":
              source = "../img/products/6.png";
              break;
            case "MOLOSmembran":
              source = "../img/products/5.png";
              break;
            case "MOLOSpendu":
              source = "../img/products/4.png";
              break;
            case "MOLOSwave":
              source = "../img/products/1.png";
              break;
            case "MOLOSbob":
              source = "../img/products/2.png";
              break;
          }
          return source;
        }
      }
});
