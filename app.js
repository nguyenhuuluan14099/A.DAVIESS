const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const costCoin = $(".costCoin");
var prompt = prompt("Enter your current myClub Coins!");
var prompt01 = Number(prompt);
const getMore = $(".getMore a");
const textGetCoin = "Get more 2000 myClub Coins. Proceed?";
const textConfirm = "Pay 100 myClub Coins. Proceed?";
const device = $(".device");
const btnHundred = $(".end .hundred");
const video = $(".video");
const videoScreen  = $(".video .screenVideo");
const btnNext = $(".video .btnNext");
function handleEvents(){
    var currentCoin = 0;
    //enter coin
    if(prompt != null){
        currentCoin += prompt01;
        costCoin.textContent  = prompt01;
    }else{
        device.style.display = "none";
    }
    //get more coin
    getMore.onclick = function(){    
          if(confirm(textGetCoin) == true){
            currentCoin += 2000;
            costCoin.textContent = currentCoin;
          }
    }
    // btnHundred
    btnHundred.onclick = function(){
        console.log(321321);
        if(confirm(textConfirm) == true){
            if(currentCoin >= 100){
                currentCoin -= 100;
                costCoin.textContent = currentCoin;
                var iconCard  = Math.floor(Math.random() * 100) + 1;
                console.log(iconCard);
                if(iconCard <= 5){
                    video.style.backgroundImage = "url('https://ak.picdn.net/shutterstock/videos/16761250/thumb/1.jpg?ip=x480')";
                    video.classList.add("show");
                    videoScreen.play();
                    //video events 
                        videoScreen.onended = function(){
                             setTimeout(function(){
                                videoScreen.classList.add("stop");
                                  video.style.backgroundImage = "url('./asset/images/icon.jpg')";
                                btnNext.style.opacity = 1;
                        },500)                       
                       }
                        
                        videoScreen.classList.remove("stop");
                }else{
                   /*  setTimeout(function(){
                        video.style.backgroundImage = "none";
                    },2000); */
                   
                    video.style.backgroundImage = "url('https://ak.picdn.net/shutterstock/videos/16761250/thumb/1.jpg?ip=x480')";
                    videoScreen.setAttribute("src","./asset/videos/base.mp4");
                    video.classList.add("show");
                    videoScreen.play();
                    //video events 
                        videoScreen.onended = function(){
                             setTimeout(function(){
                                videoScreen.classList.add("stop");
                                video.style.backgroundImage = "url('./asset/images/base.jpg')";
                                btnNext.style.opacity = 1;
                        },500)                       
                       }
                       
                        videoScreen.classList.remove("stop");
                }
               
                //btnNext events
                btnNext.onclick = function(){
                    btnNext.style.opacity = 0;
                    video.classList.remove("show");
                    video.style.backgroundImage = "url('./asset/images/icon.jpg')";
                    videoScreen.setAttribute("src","./asset/videos/icon.mp4");
                    videoScreen.pause();
                }


            }else{
                alert("Sorry!!Your myClub Coins is not enough");
            }
        }
    }

}

handleEvents();


