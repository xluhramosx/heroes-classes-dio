class hero{

        constructor(type){
            this.type = type;
        }
        attack(){
            
            if (this.type == "mago"){
                console.log("O" + this.type + "atacou usando Magia.");     
            }
    
            else if (this.type == "guerreiro"){
                console.log("O" + this.type + "atacou usando Espada."); 
            }     
    
            else if (this.type == "monge"){
                console.log("O" + this.type + "atacou usando Artes Marciais.");
               } else {
    
                console.log("O" + this.type + "atacou usando Shuriken.");
            }
        }
    
    }
    const herotype = new hero("monge");
    
    herotype.attack();