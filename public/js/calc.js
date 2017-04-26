var num = 0;
var saver = undefined;
var operating = false;
var operationType = undefined;
var firstOp = true;
var secondOp = false;
document.getElementById('score').value = 0;

function addNum(x){

  if(operating){
    document.getElementById('score').value = x;
    operating = false;
  }else if(x !== 0 && document.getElementById('score').value !== '0'){
    document.getElementById('score').value += x;
  }else if(x !== 0 && document.getElementById('score').value === '0'){
    document.getElementById('score').value = x;
  }
  num = Number(document.getElementById('score').value);

}

function sum(){
  if(operationType !== 'sum' && !firstOp){
    if(!secondOp){
      result();
      secondOp = false;
    }
  }else if(saver || saver === 0){
    saver = saver+num;
    secondOp = true;
  }else if(saver === undefined){
    saver = num;
    secondOp = true;
  }
operationType = 'sum';
operating = true;
document.getElementById('score').value =saver;
firstOp = false;

}


function res(){
  if(operationType !== 'res'  && !firstOp){
    if(!secondOp){
      result();
      secondOp = false;
    }
  }else if(saver || saver === 0){
    saver = saver-num;
    secondOp = true;
  }else if(saver === undefined){
    saver = num;
    secondOp = true;
  }
document.getElementById('score').value =saver;
operationType = 'res';
operating = true;
firstOp = false;

}

function mul(){
  if(operationType !== 'mul'  && !firstOp){
    if(!secondOp){
      result();
      secondOp = false;
    }
  }else if(saver){
    saver = num*saver;
    secondOp = true;
  }else{
    saver = num;
    secondOp = true;
  }
document.getElementById('score').value = saver;
operating = true;
operationType = 'mul';
firstOp = false;
}

function div(){

  if(operationType !== 'div'  && !firstOp){
    if(!secondOp){
      result();
      secondOp = false;
    }
  }else if(saver  || saver === 0){
    saver = saver/num;
    secondOp = true;
  }else{
    saver = num;
    secondOp = true;
  }

document.getElementById('score').value = saver;
operating = true;
operationType = 'div';
firstOp = false;
}

function reset(){
  saver = undefined;
  num = 0;
  operating = false;
  operationType = undefined;
  saver = undefined;
  operationType = undefined;
  firstOp = true;
  secondOp = false;
  document.getElementById('score').value = 0;
  }

function result(){
  if(!saver){ saver = 0};

  switch(operationType){
    case 'sum':
     saver = saver+num;
     document.getElementById('score').value = saver;
    break;

    case 'res':
      saver = saver-num;
      document.getElementById('score').value = saver;
    break;

    case 'mul':
      saver = num*saver;
      document.getElementById('score').value = saver;
    break;

    case 'div':
      saver = saver/num;
      document.getElementById('score').value = saver;
    break;

    default:
      reset();
      document.getElementById('score').value = 0;

    break;
  }

  operationType = undefined;
}
