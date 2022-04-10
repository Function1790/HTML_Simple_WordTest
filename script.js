//Class
class Word{
    element_word=null;
    element_eng=null;
    element_kor=null;
    constructor(eng, kor){
        this.eng=eng;
        this.kor=kor;
    }
    Set_ElementsByWord(word){
        this.element_word=word;
        this.element_eng=word.getElementsByClassName("eng")[0];
        this.element_kor=word.getElementsByClassName("kor")[0];
    }
    Check(){
        if(this.element_kor.value==this.kor){
            this.element_eng.className="eng word_right";
            return true;
        }
        else{
            this.element_eng.className="eng word_wrong";
            return false;
        }
    }
    Clear(){
        this.element_eng.className="eng word_none";
        this.element_kor.value="";
    }
}

//Constant
const Count_Text=document.getElementById("right_count")

//Variable
Words=[new Word("apple","사과"), new Word("language","언어"), new Word("gravity","중력"), new Word("head","머리"), new Word("script","대본")];
isCheck=false;

//Function
function WordForm(eng){
    return '<div class="word"><div class="eng">'+eng+'</div><input class="kor" type="text" onmousemove="if(isCheck==true){Check();}"></input></div>';
}

function Clear_Input(){
    for(var i=0; i<Words.length; i++){
        Words[i].Clear();
    }
    isCheck=false;
}

function Check(){
    count=0;
    for(var i=0; i<Words.length; i++){
        if(Words[i].Check()==true){
            count++;
        }
    }
    isCheck=true;
    Count_Text.innerText=count+"/"+Words.length;
}

function Main(){
    for(var i=0; i<Words.length; i++){
        document.write(WordForm(Words[i].eng));
    }
    element_word=document.getElementsByClassName("word");
    for(var i=0; i<Words.length; i++){
        Words[i].Set_ElementsByWord(element_word[i]);
    }
    Count_Text.innerText=0+"/"+Words.length;
}

//Entry Point
Main();