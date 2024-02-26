

// 전역변수 선언은 여기서 해주세요
    const items = document.querySelectorAll('.question');
    items.forEach(item => item.addEventListener('click', openCloseAnswer));

  // 아래코드는 펼침,접음 코드입니다.
function openCloseAnswer() {
  const answerId = this.id.replace('que', 'ans');

  if(document.getElementById(answerId).style.display === 'block') {
    document.getElementById(answerId).style.display = 'none';
    document.getElementById(this.id + '-toggle').textContent = '+';
  } else {
    document.getElementById(answerId).style.display = 'block';
    document.getElementById(this.id + '-toggle').textContent = '-';
  }
}

//임시로 만들어놓은 더하기 함수입니다.
function test01() {
  document.getElementById("txtBox3").value = parseInt($("#txtBox1").val())+parseInt($("#txtBox2").val())
}
          

// bmi 계산기

function bmi(){
     var h = parseFloat(document.getElementById("height").value);
     var w = parseFloat(document.getElementById("weight").value);
     var bmi = document.getElementById("bmi");
     bmi.innerHTML = (w/((h*h)/10000)).toFixed(1);
}


// 날짜 계산기
function input(){
  var now = new Date();
    var dday = new Date(document.getElementById("input_date").value);
    var passedTime = now.getTime()-dday.getTime();
    var passedDay = Math.round(passedTime/(-24*60*60*1000)+1);
    document.getElementById("accent").innerHTML = passedDay+"일";
}


//단위변환 계산기
function size(){

var btn = document.getElementById("goBtn");
btn.addEventListener("click", convert);

function convert() {
  var inSelect = document.getElementById("inSelect");
  var outSelect = document.getElementById("outSelect");
  var inIndex = inSelect.selectedIndex;
  var outIndex = outSelect.selectedIndex;
  var inUnit = inSelect[inIndex].value;
  var outUnit = outSelect[outIndex].value;
  var inNum = Number(document.getElementById("inBox").value);
  var outNum = document.getElementById("outBox");
  outNum.value = "";

    if (inUnit == "m") {
      if (outUnit == "m") outNum.value = inNum;
      if (outUnit == "cm") outNum.value = inNum * 100;
      if (outUnit == "mm") outNum.value = inNum * 1000;
      if (outUnit == "inch") outNum.value = inNum * 39.3701;
    } else if (inUnit == "cm") {
      if (outUnit == "cm") outNum.value = inNum;
      if (outUnit == "m") outNum.value = inNum * 0.01;
      if (outUnit == "mm") outNum.value = inNum * 10;
      if (outUnit == "inch") outNum.value = inNum * 0.393701;   
    } else if (inUnit == "mm") {
      if (outUnit == "mm") outNum.value = inNum;
      if (outUnit == "m") outNum.value = inNum * 0.001;
      if (outUnit == "cm") outNum.value = inNum * 0.1;
      if (outUnit == "inch") outNum.value = inNum * 0.03937;
    } else if (inUnit == "inch") {
      if (outUnit == "inch") outNum.value = inNum;
      if (outUnit == "m") outNum.value = inNum * 0.0254;
      if (outUnit == "cm") outNum.value = inNum * 2.54;
      if (outUnit == "mm") outNum.value = inNum * 25.4; 
    }
  }
}
