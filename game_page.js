player1_name=localStorage.getItem("player_1")
player2_name=localStorage.getItem("player_2")
document.getElementById("player1_name").innerHTML=player1_name
document.getElementById("player2_name").innerHTML=player2_name
document.getElementById("player_question").innerHTML="Question turn= "+player1_name
document.getElementById("player_answer").innerHTML="Answer turn= "+player2_name
player1_score=0
player2_score=0
document.getElementById("player1_score").innerHTML=player1_score
document.getElementById("player2_score").innerHTML=player2_score
function send(){
    word=document.getElementById("word").value
    question=word.toLowerCase()
    charat1=question.charAt(1)
    len=Math.floor(question.length/2)
    charat2=question.charAt(len)
    lenminusone=question.length-1
    charat3=question.charAt(lenminusone)
    removecharat1=question.replace(charat1,"_")
    removecharat2=removecharat1.replace(charat2,"_")
    removecharat3=removecharat2.replace(charat3,"_")
    questionword="<h4 id='word_display'>"+removecharat3+"</h4>"
    inputbox="<br>answer=<input id='inputcheckbox'>"
    checkbutton="<br><br><button onclick='Check()' class='btn btn-info'>Check</button>"
    row=questionword+inputbox+checkbutton
    document.getElementById("output").innerHTML=row
    document.getElementById("word").value=""
}