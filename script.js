class Player{
    constructor(id,name,energy){
        this.id=id;
        this.name=name;
        this.energy=energy;
    }

    display=function(){
        console.log(this.name + " " + this.energy);

        document.getElementById(this.id).innerHTML=`
        <p> Energy: ${this.energy} </p>
        `;

    }
        
    attack=function(opponent){
        document.getElementById("console").innerHTML=`
        <p> ${this.name} is Attacking ${opponent.name}</p>
        
        `;

        let newEnergy=opponent.energy-10;
        opponent.energy=newEnergy;
        opponent.display();

        if(opponent.energy <= 0){
            document.getElementById("console").innerHTML=`
        <p> G A M E O V E R </p>
        
        `;
        document.getElementById(opponent.id).style.display="none";
        }
    }
        
    
}

const Sponge = new Player("Player1", "Sponge", 100);

const Plank = new Player("Player2", "Plank", 200);


Sponge.display();
Plank.display();

