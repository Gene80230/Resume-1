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
        window.scrollTo(0, top - 70)
    }
}