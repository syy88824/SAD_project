var btnMainPage = document.getElementById("myButton");
btnMainPage.addEventListener("click", function(){
    window.location.href = "Add.html";
});

document.addEventListener("DOMContentLoaded", function(){
    var upload = document.getElementById("idBtnUploadO");
    upload.addEventListener("click", function(){
        var check = document.createElement("span");

        setTimeout(function(){
            var inputF = document.getElementById("inputFileO");           
            check.innerHTML = '<span class="finishWord3">Document checking</span>';
            inputF.parentNode.removeChild(inputF);
            upload.parentNode.replaceChild(check, upload);
        }, 1000)
        setTimeout(function(){
            check.innerHTML = '<span class="finishWord3 finish">Order complete</span>';
        }, 4000)
    })
})