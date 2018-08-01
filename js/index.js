// 轮播
var banner = document.getElementsByClassName('banner')[0];
var ul = banner.children[0];
var ol = banner.children[1];
var ulArr = ul.children;
var olArr = ol.children;
var imgWidth = ulArr[0].offsetWidth;
var timer = null;
var s = 0;
console.log(imgWidth);
var q = 0;
olArr[q].className = 'current';
setInterval(function(){
    s++;
    if(s>ulArr.length-1){
        ul.style.left = 0;
        s = 0;
    }
    animate(ul,-imgWidth*s);
    q++;
    for(var i=0;i<olArr.length;i++){
        olArr[i].className = 'none';
    }
    if(s===3 || s===0){
        q = 0;
    }
    olArr[q].className = 'current';
},3000);
// 缓动封装
function animate(ele,target) {
    clearInterval(ele.timer);
    ele.timer = setInterval(function () {
        var step = (target-ele.offsetLeft)/10;
        step = step>0?Math.ceil(step):Math.floor(step);
        ele.style.left = ele.offsetLeft + step + "px";
        // console.log(1);
        if(Math.abs(target-ele.offsetLeft)<=Math.abs(step)){
            ele.style.left = target + "px";
            clearInterval(ele.timer);
        }
    },30);
}
// 搜索界面
var searchInp = document.getElementsByClassName('search-inp')[0];
var searchBox = document.getElementsByClassName('search-box')[0];
var backToIndex = document.getElementById("back");
searchInp.onclick = function(){
    indexPage.style.display = 'none';
    searchBox.style.display = 'block';
}
backToIndex.onclick = function(){
    indexPage.style.display = 'block';
    searchBox.style.display = 'none';
}

// 我的界面
var indexPage = document.getElementsByClassName("index-page")[0];
var my = document.getElementsByClassName("search-sub")[0];
var users = document.getElementsByClassName('user')[0];
var usersBack = document.getElementsByClassName("user-h-back")[0];
my.onclick = function(){
    indexPage.style.display = 'none';
    users.style.display = 'block';
}
usersBack.onclick = function(){
    indexPage.style.display = 'block';
    users.style.display = 'none';
}




// language界面
var mask = document.getElementsByClassName('mask')[0];
var adress = document.getElementsByClassName('adress')[0];
var a = adress.children[1];
a.onclick = function(event){
    mask.style.display = 'block';
    // 阻止冒泡
    event = event || window.event;
    if(event && event.stopPropagation){
        event.stopPropagation();
    }else{
        event.cancelBubble = true;
    }
}

mask.onclick = function(enent){
    event = event || window.event;
    var aaa = event.target || event.srcElement;
    if(aaa.id !== "country"){
        mask.style.display = 'none';
    }
}




