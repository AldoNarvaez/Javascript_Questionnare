//Program of the classical two player game: Rock, Paper, Scissors


//We create a class with the program that is going to receive the moves of every player
class RockPaperScissors{

		constructor(){
			let moves=[]; //We are going to save the moves in this private variable

			//In this function we are going to add the posible moves and giving the result
			this.match=function (arg) {
				moves.push(arg);
				let posibleMoves=["scissors","rock","paper"];
				if(!posibleMoves.includes(arg)){
					moves=[];
					console.log( "not a valid move. Play again")
				}
				else if (moves.length==2) {
					console.log(this.result(moves))
					moves=[];
				}
			};

			//This function is going to evaluate the movements and give the winner
			this.result=function (movs) {


				if (movs[0]==movs[1]) {
					return ("you are even. Play again.")
				}
				else{
					if(movs[0]=="scissors" && movs[1]=="paper"){
						return player1.name+" wins"
					}
					if(movs[0]=="paper" && movs[1]=="rock"){
						return player1.name+" wins"
					}
					if(movs[0]=="rock" && movs[1]=="scissors"){
						return player1.name+" wins"
					}
					else{return player2.name+" wins"}

				}

			}

		}

		

		


}

let game=new RockPaperScissors();

//TWe define a Player class for every particular player
class Player {
	//In the constructor we add the name of the player to make it public to the other players
	constructor(name){
		this.name=name;
		//Also, this method will be private and we will call the previous class to compare the move
		this.play=function(move){
		game.match(move)
		}
	}
	
}

let player1= new Player("Aldo");
let player2= new Player("Carlos");

player1.play("scissors");
player2.play("paper");

player1.play("rock");
player2.play("paper");

player1.play("paper");
player2.play("paper");

player1.play("hola");
player2.play("paper");