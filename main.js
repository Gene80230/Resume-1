 // Setup the animation loop.
function animate(time) {
    requestAnimationFrame(animate);
    TWEEN.update(time);
}
requestAnimationFrame(animate);

 //滚动导航栏贴住顶部
 window.onscroll = function(x){
    if(window.scrollY > 0){
        topNavBar.classList.add('sticky')
    }else{
        topNavBar.classList.remove('sticky')
    }
}
//找到节点的写一个兄弟元素
let liTags = document.querySelectorAll('nav.menu > ul > li')
for(let i=0; i<liTags.length; i++){
    liTags[i].onmouseenter = function(x){ 
        let li = x.currentTarget
        li.classList.add('active')
    }
    liTags[i].onmouseleave = function(x){
        let li = x.currentTarget
        li.classList.remove('active')  
    }
}

//找到导航栏中的a标签
let aTag = document.querySelectorAll('nav.menu > ul > li > a')
for(let i=0; i<aTag.length; i++){
    aTag[i].onclick = function(x){
        x.preventDefault()  //点击a标签不会跳转
        let a = x.currentTarget
        let href = a.getAttribute('href')
        let element = document.querySelector(href)
        let top = element.offsetTop
        
        let currentTop = window.scrollY //  当前位置
        let targetTop = top - 70
        let s = targetTop - currentTop
        let t = Math.abs((s/100) * 300)
        if(t > 500){t = 500}
        var coords = { y: currentTop}; 
        var tween = new TWEEN.Tween(coords) 
        .to({ y: targetTop}, t) 
        .easing(TWEEN.Easing.Quadratic.InOut) 
        .onUpdate(function(){ 
            window.scrollTo(0, coords.y)
        })
        .start(); 
    }
}



//