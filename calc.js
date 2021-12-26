function getVal(num){
var data = document.getElementById("display1")
data.value += num
}
function del(num){
    var data = document.getElementById("display1")
    var data2 = document.getElementById("display2")

    data.value = ""
    data2.value = ""

    }
function ce(){
    var data = document.getElementById("display1")
    data.value = data.value.slice(0,data.value.length-1)
}
function result(){
    var display2=  document.getElementById("display2")
    var display1 = document.getElementById("display1")
    var result = eval(display1.value)
    display2.value = result
    var history = document.getElementById("hist")
    history.innerHTML+=`<div class="now">${display1.value}</div>`
  

}
function rmHistory(){
    var history = document.getElementById("hist")
    history.innerHTML = ""
}

