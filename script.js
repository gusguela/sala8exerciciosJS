function somar(){
    var n1 = document.getElementById("sum_A").valueAsNumber
    var n2 = document.getElementById("sum_B").valueAsNumber
    var ans = document.getElementById("ans_sum")
    
    ans.textContent = n1 + n2
}

function subt(){
    var n1 = document.getElementById("sub_A").valueAsNumber
    var n2 = document.getElementById("sub_B").valueAsNumber
    var ans = document.getElementById("ans_sub")
    
    ans.textContent = n1 - n2
}

function mult(){
    var n1 = document.getElementById("mult_A").valueAsNumber
    var n2 = document.getElementById("mult_B").valueAsNumber
    var ans = document.getElementById("ans_mult")
    
    ans.textContent = n1 * n2
}

function divs(){
    var n1 = document.getElementById("divs_A").valueAsNumber
    var n2 = document.getElementById("divs_B").valueAsNumber
    var ans = document.getElementById("ans_divs")
    
    ans.textContent = n1 / n2
    
}