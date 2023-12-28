var aspect = document.getElementById("aspectChange");
var preValue = "";

aspect.addEventListener("mousedown", function(){
    preValue = aspect.value;
});

aspect.addEventListener("change", function(){
    if(preValue === "brand" && aspect.value==="outlet"){
        window.location.href = "SuppliertoO.html";
    }else if(preValue === "outlet" && aspect.value==="brand"){
        window.location.href = "SuppliertoB.html";
    }
});

document.addEventListener("DOMContentLoaded", function(){
    var complete = document.getElementById("btnComplete");
    complete.addEventListener('click', function(){
        setTimeout(function(){
            var finishWord = document.createElement("span");
            finishWord.innerText = "Order complete";
            finishWord.classList.add("finishWord");
            complete.parentNode.replaceChild(finishWord, complete);
        }, 1000)
        
    })    
})

document.addEventListener("DOMContentLoaded", function(){
    var upload = document.getElementById("idBtnUpload");
    upload.addEventListener("click", function(){
        var check = document.createElement("span");

        setTimeout(function(){
            var inputF = document.getElementById("inputFile");           
            check.innerHTML = '<span class="finishWord2">Document checking</span>';
            inputF.parentNode.removeChild(inputF);
            upload.parentNode.replaceChild(check, upload);
        }, 1000)
        setTimeout(function(){
            check.innerHTML = '<span class="finishWord2 finish">Order complete</span>';
        }, 4000)
    })
})

var wrong = document.getElementById("spanWrong");
var reason = document.getElementById("btnReason");
reason.addEventListener("click", function(){
    var rsonInput = prompt("Enter the reason：");
    if(rsonInput!=null){
        wrong.innerText = 'Reason checking...'
        wrong.classList.remove("problem");
        reason.parentNode.removeChild(reason);
    }
})