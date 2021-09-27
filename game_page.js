player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name ;   
document.getElementById("player2_name").innerHTML = player2_name ; 
document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;

document.getElementById("player_question").innerHTML = "question turn -" + player1_name;
document.getElementById("player_answer").innerHTML = "answer turn -" + player2_name;

function send() {
    getword = document.getElementById("word").value;
    word = getword.toLowerCase();
    console.log("word=" + word);

    charat1 = word.charAt(1);
    charat2 = word.charAt(3);
    charat3 = word.charAt(5);

    removecharat1 = word.replace(charat1, "_");
    removecharat2 = removecharat1.replace(charat2, "_");
    removecharat3 = removecharat2.replace(charat3, "_");
    console.log("question word is = " + removecharat3);

    question_word = "<h4 id='word_display'> Q. " + removecharat3 + "</h4>";

    input_box = "<br>Answer : <input type='text' id='input_check_box'>";

    check_button = "<br><button class='btn btn-info' onclick='check()'>CHECK</button>"
    row = question_word + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";

}

question_turn = "player1";
answer_turn = "player2";
function check() {
    get_answer = document.getElementById("input_check_box").value;
    answer = get_answer.toLowerCase();

    if (answer == word) {
        if (answer_turn == "player1") {
            player1_score = player1_score + 1;
            document.getElementById("player1_score").innerHTML = player1_score;
        } else {
            player2_score = player2_score + 1;
            document.getElementById("player2_score").innerHTML = player2_score;
        }
    }

    if (question_turn == "player1") {
        question_turn = "player2";
        document.getElementById("player_question").innerHTML = "Question Turn:" + player2_name;
    } else {
        question_turn = "player1";
        document.getElementById("player_question").innerHTML = "Question Turn:" + player1_name;

    }
    if (answer_turn == "player1") {
        answer_turn = "player2";
        document.getElementById("player_answer").innerHTML = "Answer Turn:" + player2_name;
    } else {
        answer_turn = "player1";
        document.getElementById("player_answer").innerHTML = "Answer Turn:" + player1_name;

    }
    document.getElementById("output").innerHTML="";

}