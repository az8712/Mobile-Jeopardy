import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, Dimensions, TextInput, TouchableHighlight, ScrollView, Button } from 'react-native';
import Constants from 'expo-constants';
import { AuthContext } from "./context";



let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;
// Jack Pec, Zaid Ahmed, Misho, Daniel Ko


const ScreenContainer = ({ children }) => (
    <View style={styles.container}>{children}</View>
);

export const firstPage = ({ navigation }) => (
        <ScreenContainer>
            <Button title="Start" onPress={() => navigation.push("startPage")} />
        </ScreenContainer>
    
);

export const startPage = ({ navigation }) => (
    <ScreenContainer>
        <View style={styles.titleContainer}>
                        <Text style={styles.titleText}>
                            Unknown Trivia
                        </Text>
        </View>
                    
                    {/*Asking user(s) to give their player names*/}
        <View style={styles.descContainer}>
            <Text style={styles.descText}>
                Player Names
            </Text>
        </View>
        <View style={styles.inputContainer}>
            <View style={styles.inputRow}>
                <TextInput
                    clearTextOnFocus={true}
                    value={this.state.player1}
                    style={styles.inputStyle}
                    onChangeText={(player1) => this.setState({player1})}
                />
                <TextInput
                    clearTextOnFocus={true}
                    value={this.state.player2}
                    style={styles.inputStyle}
                    onChangeText={(player2) => this.setState({player2})}
                />
            </View>
            <TouchableHighlight
                onPress = {this.handleMainPress}
                underlayColor='none'
            >
                <View style={styles.startButton}>
                    <Text style={styles.startButtonText}>
                        Start
                    </Text>
                    </View>
            </TouchableHighlight>
        </View>
    </ScreenContainer>
);

export const mainPage = ({ navigation }) => (
    <ScreenContainer>
        <View style={styles.titleContainer}>
            <Text style={styles.titleText}>
                Unknown Trivia
            </Text>
        </View>
        <View style={styles.scoreContainer}>
            <View style={styles.individualScoreContainer}>
                <Text style={styles.descText}>
                    {this.state.player1}
                </Text>
                <Text style={styles.scoreText}>
                    {this.state.player1Score}
                </Text>
            </View>
            <View style={styles.individualScoreContainer}>
                <Text style={styles.descText}>
                    {this.state.player2}
                </Text>
                <Text style={styles.scoreText}>
                    {this.state.player2Score}
                </Text>
            </View>
        </View>
        <View style={styles.pricePointContainer}>
                <View style={styles.buttonRowContainer}>
                    <TouchableHighlight
                        onPress={() => this.displayQuestionandUpdate(400)}
                        underlayColor='none'
                    >   
                        <View style={styles.priceButton}>
                            <Text style={styles.buttonText}>
                                $400
                            </Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight
                            onPress={() => this.displayQuestionandUpdate(300)}
                            underlayColor='none'
                    >   
                        <View style={styles.priceButton}>
                            <Text style={styles.buttonText}>
                                $300
                            </Text>
                        </View>
                    </TouchableHighlight>
                </View>
                <View style={styles.buttonRowContainer}>
                    <TouchableHighlight
                        onPress={() => this.displayQuestionandUpdate(200)}
                        underlayColor='none'
                    >   
                        <View style={styles.priceButton}>
                            <Text style={styles.buttonText}>
                                $200
                            </Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight
                            onPress={() => this.displayQuestionandUpdate(100)}
                            underlayColor='none'
                    >   
                        <View style={styles.priceButton}>
                            <Text style={styles.buttonText}>
                                $100
                            </Text>
                        </View>
                    </TouchableHighlight>
                </View>
            </View>
            <View style={styles.buttonRowContainer}>
                <TouchableHighlight
                        onPress={() => this.handleShopPress()}
                        underlayColor='none'
                >
                    <View style={styles.priceButton}>
                        <Text style={styles.buttonText}>
                            SHOP
                        </Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight
                    onPress= {this.handleCustomPress}
                    style={styles.priceButton}
                    underlayColor='none'
                >
                    <Text style={styles.buttonText}>
                        Add Questions
                    </Text>
                </TouchableHighlight>
            </View>
    </ScreenContainer>
)




























const styles = StyleSheet.create({
    container: {
        height: deviceHeight,
        width: deviceWidth,
    },
    startButton: {
        height: deviceHeight/12,
        width: deviceWidth/3,
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: deviceWidth/100,
        borderColor: '#151880',
        borderRadius: deviceWidth/100,
    },
    startButtonText: {
        fontFamily: 'Helvetica',
        color: '#f6e3df',
        fontSize: deviceWidth/13,
    },
	titleContainer: {
        width: deviceWidth,
        height: deviceHeight/5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'blue',
        borderBottomWidth: deviceWidth/50,
        borderColor: '#f6e3df',
    },
    titleText: {
        fontSize: deviceWidth/9,
        fontFamily: 'Helvetica',
        fontWeight: 'bold',
        color: '#f6e3df',
    },
    descContainer: {
        width: deviceWidth,
        height: deviceHeight*2/5,
        backgroundColor: '#151880',
        alignItems: 'center',
        borderBottomWidth: deviceWidth/50,
        borderColor: '#f6e3df',
    },
    descText: {
        marginTop: deviceHeight/50,
        fontSize: deviceWidth/12,
        fontFamily: 'Helvetica',
        color: '#f6e3df',
    },
    inputContainer: {
        width: deviceWidth,
        height: deviceHeight*2/5,
        backgroundColor: '#4d4cff',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    inputRow: {
        width: deviceWidth,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    inputStyle: {
        width: deviceWidth/2.25,
        height: 50,
        padding: 8,
        backgroundColor: '#ffbf7a',
        borderWidth: deviceWidth/50,
        borderColor: '#151880',
        borderRadius: deviceWidth/50,
    },
    scoreContainer: {
        width: deviceWidth,
        height: deviceHeight*1/5,
        backgroundColor: '#151880',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        borderBottomWidth: deviceWidth/50,
        borderColor: '#f6e3df',
    },
    individualScoreContainer: {
        width: deviceWidth*1/2,
        height: deviceHeight*1/5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    scoreText: {
        marginTop: deviceHeight/50,
        fontSize: deviceWidth/12,
        fontFamily: 'Helvetica',
        color: 'gold',
    },
    pricePointContainer: {
        width: deviceWidth,
        height: deviceHeight*3/5,
        backgroundColor: '#151880',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    buttonRowContainer: {
        width: deviceWidth,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    priceButton: {
        width: deviceWidth*1/3,
        height: deviceHeight*1/6,
        backgroundColor: 'yellow',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    buttonText: {
        
    },
});

displayQuestionandUpdate = (price) => {
    var rightpriceArray = [];
  //  let oldQuestArray = [...this.state.QuestionArray];
        
         for(let i=0; i<this.state.questionArray.length; i++){
           if(this.state.questionArray[i].price == price){
              rightpriceArray.push(this.state.questionArray[i]);
           }
        }
     var randomNumber = Math.floor(Math.random() * (rightpriceArray.length-1)) + 0;
    //  var randomNumber = 0;

    this.state.displayQuestion = rightpriceArray[randomNumber].questionText;
    this.state.opA = rightpriceArray[randomNumber].a;
  	this.state.opB = rightpriceArray[randomNumber].b;
  	this.state.opC= rightpriceArray[randomNumber].c;
    this.state.opD = rightpriceArray[randomNumber].d;
    this.state.answer = rightpriceArray[randomNumber].answer;
    this.state.questionPrice = Number(rightpriceArray[randomNumber].price);
    this.handleQuestionPress();
    
};
                                                         
changePlayer = () =>{
    if(this.state.isPlayer1true == true){
        this.state.isPlayer1true = false;
        this.setState({playerTurn: this.state.player2});
    }
    else if(this.state.isPlayer1true == false){
        this.state.isPlayer1true = true;
        this.setState({playerTurn: this.state.player1});
    }
};
checkWinner = () =>{
    if(this.state.player1Score >= 2000) {
        this.state.winnerMessage = 'Congrats ' + this.state.player1 + ", you are the winner!" ;
        this.handleWinnerPress();
    }
    if(this.state.player2Score >= 2000) {
        this.state.winnerMessage = 'Congrats ' + this.state.player2 + ", you are the winner!" ;
        this.handleWinnerPress();
    }
};
	startNewGame = () =>{
        this.handleStartPress();
        this.state.continueMessage = "";
        this.state.winnerMessage = "";
        this.state.displayQuestion= "";
        this.state.answer= "";
        this.state.opA= "";
        this.state.opB= "";
        this.state.opC= "";
        this.state.opD= "";
        this.state.player1Score = 0;
        this.state.player2Score = 0;
        this.state.isPlayer1true = true;
        this.state.questionPrice = 0;
    };

addquestion = () =>{
    var newObj = {
        questionText: this.state.displayQuestion,
        a: this.state.opA,
        b: this.state.opB,
        c: this.state.opC,
        d: this.state.opD,
        answer: this.state.answer,
        price: this.state.questionPrice,
    }
    this.state.questionArray.push(newObj);
    this.handleMainPress();
};
upgradeBoost = (cost) =>{
    if(this.state.isPlayer1true == true){
        if(this.state.player1Score>=cost){
         this.state.player1Score = this.state.player1Score - Number(cost);
         this.state.costmulti1 =  2+(cost/100);
         this.setState({ shopMessage: "Thank you for your purchase " + this.state.playerTurn + "!"});
       }
       else {
           this.setState({ shopMessage: "Sorry " + this.state.playerTurn + ", you don't have enough money \n to afford that." });
       }
    }
   else if(this.state.isPlayer1true == false){
       if(this.state.player2Score>=cost){
        this.state.player2Score = this.state.player2Score - Number(cost);
        this.state.costmulti2 =  2+(cost/100);
        this.setState({ shopMessage: "Thank you for your purchase " + this.state.playerTurn + "!"});
       }
       else {
           this.setState({ shopMessage: "Sorry " + this.state.playerTurn + ", you don't have enough money \n to afford that." });
       }
   }
   
};
upgradeSab = (cost) =>{
    if(this.state.isPlayer1true == true){
      if(this.state.player1Score>=cost){
       this.state.player1Score = this.state.player1Score - Number(cost);
       this.state.costmulti2 =  0.5*(100/cost);
       this.setState({ shopMessage: "Thank you for your purchase " + this.state.playerTurn + "!" });
     }
     else {
         this.setState({ shopMessage: "Sorry " + this.state.playerTurn + ", you don't have enough money \n to afford that." });
     }
  }
 else if(this.state.isPlayer1true == false){
     if(this.state.player2Score>=cost){
      this.state.player2Score = this.state.player2Score - Number(cost);
      this.state.costmulti1 =  0.5*(100/cost);
      this.setState({ shopMessage: "Thank you for your purchase " + this.state.playerTurn + "!"});
     }
     else {
         this.setState({ shopMessage: "Sorry " + this.state.playerTurn + ", you don't have enough money \n to afford that." });
     }
 }
 
};


getAns = (answer) => {
 if(answer==this.state.answer){
     
     if(this.state.isPlayer1true == true){
       this.state.continueMessage = 'That is Correct!, ' + this.state.player1 + " Now it is " +  this.state.player2 + "'s turn." ;
       this.state.player1Score = this.state.player1Score + Number(this.state.questionPrice*this.state.costmulti1);
     }
     else if(this.state.isPlayer1true == false){
     this.state.continueMessage = 'That is Correct!, ' + this.state.player2 + " Now it is " +  this.state.player1 + "'s turn." ;
      this.state.player2Score = this.state.player2Score + Number(this.state.questionPrice*this.state.costmulti2);
     }
     
 }
 else{
     this.state.continueMessage = "Sorry that was incorrect!, it is the other player's turn now";
 }
 this.handleContinuePress();
 this.checkWinner();
 this.changePlayer();
 this.resetQuestion();
};

resetQuestion = () => this.setState(state => ({
    displayQuestion: "Question",
    answer: "Correct Answer",
    opA: "Answer a",
    opB: "Answer b",
    opC: "Answer c",
    opD: "Answer d",
}));
handleHBPagePress = (index) => {
let newArray = [...this.state.hotbarDisplayStatus];
for(let i = 0; i < newArray.length;i++) {
    newArray[i] = 'none';
    
}
newArray[index] = 'block';
this.setState({hotbarDisplayStatus: newArray});
};

updateName = (index, newName) => {
       let newPlayerArray = [...this.state.playerArray];
       newPlayerArray[index] = {...newPlayerArray[index], teamName: newName}
       this.setState({playerArray: newPlayerArray});
};
handleStartPress = () => this.setState(state => ({
    startPage: 'block',
    mainPage: 'none',
    questionPage: 'none',
    continuePage: 'none',
    winnerPage: 'none',
    shopPage: 'none',
    customPage:'none',
}));

state = {
    startPage: 'block',
mainPage: 'none',
questionPage: 'none',
continuePage: 'none',
winnerPage: 'none',
shopPage: 'none',
customPage:'none',

continueMessage: '',
winnerMessage: '',
shopMessage: '',

displayQuestion: "Question",
answer: "Correct Answer Lowercase Letter",
opA: "Answer a",
opB: "Answer b",
opC: "Answer c",
opD: "Answer d",
questionPrice: 0,
costmulti1: 1,
costmulti2: 1,

player1: 'Player 1',
player2: 'Player 2',
player1Score: 0,
player2Score: 0,
isPlayer1true: true,
playerTurn: 'Player 1',

questionArray:[
{
questionText: "Who assassinated John F Kennedy?",
     a: "a. Fidel Castro",
     b: "b. Lee Harvey Oswald",
     c: "c. John Wilkes Booth",
   d: "d. Charles J. Guiteau",
     price: 100,
     answer:"b",
},
{
    questionText: "Which of the following president's administration was most focused on human rights?",
    a: "a. Reagan",
      b: "b. LBJ",
      c: "c. Carter",
      d: "d. Nixon",
      price: 300,
      answer:"c",
  },
  {
  questionText: "What was the first ever video game?",
      a: "a. Pong",
          b: "b. Space Travel",
          c: "c. Spacewar!",
          d: "d. Pac-Man",
          price: 100,
          answer:"a",
  },
  {
  questionText: "What did Nintendo sell at the start of the company?",
      a: "a. Video games",
          b: "b. Board games",
          c: "c. Playing cards",
          d: "d. Japanese food",
          price: 200,
          answer:"c",
  },
  {
  questionText: "What is the only video game franchise originating in the 1970s which has so far generated over $1B in revenue?",
      a: "a. Super Smash Bros",
          b: "b. Pac Man",
          c: "c. Super Mario Bros",
          d: "d. Space Invaders",
          price: 300,
          answer:"d",
  },
  {
 questionText: "In which video game did Mario first appear?",
      a: "a. Super Mario Bros",
          b: "b. Donkey Kong",
          c: "c. Super Smash Bros",
          d: "d. Super Mario World",
          price: 400,
          answer:"b",
  },
  {
  questionText: "Syntax, logic & runtime are the 3 basic types of programming boos-boos called what?",
      a: "a. Boos-boos",
          b: "b. Errors",
          c: "c. Oofers",
          d: "d. Var crash",
          price: 100,
          answer:"b",
  },
  {
  questionText: "What programing language did the game Minecraft first use?",
      a: "a. Java",
          b: "b. C++",
          c: "c. Python",
          d: "d. basic",
          price: 200,
          answer:"a",
  },
  {
  questionText: "The generic term for the mechanical, electircal, and electronic components of a computer are called what?",
      a: "a. Software",
          b: "b. Ram",
          c: "c. Circuit board",
          d: "d. Hardware",
          price: 300,
          answer:"d",
  },
  {
  questionText: "The translation of data into secret code",
      a: "a. cubit",
          b: "b. hashing",
          c: "c. firewall",
          d: "d. encryption",
          price: 400,
          answer:"d",
  },
  {
  questionText: "When was the game Half-Life released?",
      a: "a. 1995",
          b: "b. 1996",
          c: "c. 1997",
          d: "d. 1998",
          price: 100,
          answer:"d",
  },
  {
  questionText: "How many countries are there in the world?",
      a: "a. 165",
          b: "b. 120",
          c: "c. 195",
          d: "d. 200",
          price: 200,
          answer:"c",
  },
  {
  questionText: "When did Germany surrender in WW2?",
      a: "a. May 7, 1945",
          b: "b. April 9, 1945",
          c: "c. March 3, 1945",
          d: "d. June 2, 1944",
          price: 300,
          answer:"a",
  },
  {
  questionText: "How many bones are in the human body?",
      a: "a. 200",
          b: "b. 206",
          c: "c. 197",
          d: "d. 178",
          price: 400,
          answer:"b",
  },
],
}
