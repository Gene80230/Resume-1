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