let myImage = document.querySelector('img')

myImage.onclick = function(){
    let mySrc = myImage.getAttribute('src')
    if(mySrc === 'images/firfox.jpg'){
        myImage.setAttribute('src','images/firfox2.jpeg');
    }else{
        myImage.setAttribute('src','images/firfox.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUsername(){
    let myName = prompt('请输入你的名字');
    if(!myName || myName === null){
        setUsername();
    }else{
        localStorage.setItem('name',myName);
        myHeading.innerHTML = '大西王酷毙了, ' + myName;
    }
}

if(!localStorage.getItem('name')){
    setUsername();
}else{
    let storedName = localStorage.getItem('name');
    myHeading.textContent = '大西王酷毙了, ' + storedName;
}

myButton.onclick = function(){
    setUsername();
}
