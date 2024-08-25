var sendbtn= document.getElementById("sendbtn");
var textbox=document.getElementById("textbox");
var chatcontainer=document.getElementById("chatcontainer");
var ticket= new Date().getTime();
var user={message:"",counter:0,meals:[],ticket:ticket};
let options =[
    {},
    {Number:1,chocie:"meal 1",price:100},
    {Number:2,chocie:"meal 2",price:200},
    {Number:3,chocie:"meal 3",price:300},
];
var httpRequest;
//chatBotSendMessage("please choose an option:");
//initializationOptions();
chatBotSendMessage("Hi, Wlecome to our resturant");
chatBotSendMessage("please choose your meal numbers");
showMenu();

function getDate(){
    var date=new Date();
    var day=date.getDay();
    var month=date.getMonth();
    var dayOfMonth=date.getDate();

    var dayArray=['sunday','monday','tuesday','wednsday','thursday','friday','saturday'];
    var monthArray=['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec'];

    return dayArray[day]+" , "+ monthArray[month]+" "+dayOfMonth;
}
var arrayOfPossibleMessage=[
    {"message":"how are you","responce":"i am fine"},
    {"message":"hi","responce":"hi"},
    {"message":"who are you","responce":"i am your assistant"},
    {"message":"what's your name","responce":"i am your assistant"},
    {"message":"what is your name","responce":"i am your assistant"},
    {"message":"how old are you","responce":"i'm ageless"},
    {"message":"do you have kids","responce":"no I don't!"},
    {"message":"do you have car","responce":"no, I travel through space."},
    {"message":"can you dance","responce":"yes"},
    {"message":"what's your favourite food","responce":"pizza"},
    {"message":"what is your favourite food","responce":"fish"},
    {"message":"do you have job","responce":"yes"},
    {"message":"where do you live","responce":"In the web"},
    {"message":"who is your owner","responce":"akshay"},
    {"message":"find me a job","responce":"<a href='http://www.indeed.com' target='_blank'> click here </a>"},
    {"message":"today's date","responce":getDate()}

];

var questionToAsk = [
    {"question":"what's your name","answer":""},
    {"question":"how are you","answer":""},
    {"question":"what's your job title","answer":""},
    {"question":"how  old are you","answer":""},
    {"question":"where do you live","answer":""}
];


function askQuestion(){
    if(questionToAsk.length>user.counter){
        setTimeout(function(){
            chatBotSendMessage(questionToAsk[user.counter].question);
            user.counter++;
    
        },1000);
    
        console.log(questionToAsk[user.counter-1]);
        
    }
    
}
function toGetTotalPrice(){
    let Totalprice=0;
    for(let i=0; i<user.meals.length; i++){
        Totalprice+=user.meals[i].price;
    }
    return Totalprice;
}

function chatBotSendMessage(messagetext){
    var messageElement=document.createElement('div');
    messageElement.classList.add('w-50');
    messageElement.classList.add('float-left');
    messageElement.classList.add('shadow-sm');
    messageElement.style.margin='10px';
    messageElement.style.padding='10px';
    messageElement.style.backgroundColor='white';
    messageElement.animate([{easing:"ease-in",opacity:0.4},{opacity:1}],{duration:1000});              
    messageElement.innerHTML="<span>chatbot : </span>"+
                "<span style="+"margin-top:10px;padding: 10px"+">"+ messagetext +"</span>"
                
                
    chatcontainer.appendChild(messageElement);     
    
    chatcontainer.scrollTop = chatcontainer.scrollHeight;

}

function sendmessage(messagetext){
    var messageElement=document.createElement('div');
    messageElement.classList.add('w-50');
    messageElement.classList.add('float-right');
    messageElement.classList.add('shadow-sm');
    messageElement.style.margin='10px';
    messageElement.style.padding='10px';
    messageElement.style.backgroundColor='white';
    messageElement.innerHTML="<span>you :</span>"+
                "<span style="+"margin-top:10px;padding: 10px"+">"+ messagetext +"</span>"

    messageElement.animate([{easing:"ease-in",opacity:0.4},{opacity:1}],{duration:1000});

    chatcontainer.appendChild(messageElement);     
    
    chatcontainer.scrollTop = chatcontainer.scrollHeight;
}
function restaurantResponceToUser(messagetext){

    let userChoice= parseInt(messagetext.trim());
    switch(userChoice){
        case 1:
            chatBotSendMessage("you choose meal 1");
            user.meals.push(options[1]);
            chatBotSendMessage('somthing else? if yes choose a number or 50 to checkout');
            break;

        case 2:
            chatBotSendMessage("you choose meal 2");
            user.meals.push(options[2]);
            chatBotSendMessage('somthing else? if yes choose a number or 50 to checkout');
            break;

        case 3:
            chatBotSendMessage("you choose meal 3");
            user.meals.push(options[3]);
            chatBotSendMessage('somthing else? if yes choose a number or 50 to checkout');
            break;

        case 50:
            alert("checkout");
            //chatBotSendMessage("you ordered : meal number"+user.meals);
            chatBotSendMessage("Total price : $"+ toGetTotalPrice());
            chatBotSendMessage("click this link to complete checkout");
            chatBotSendMessage("<a href='thanks.png'>click me</a>");
            break;

         default :
         alert("Please choose a valid number");
         chatBotSendMessage("please choose a valid number");
    }
    console.log(user);
    

}
function showMenu(){

    var messageElement=document.createElement('div');
    messageElement.classList.add('w-50');
    messageElement.classList.add('float-left');
    messageElement.classList.add('shadow-sm');
    messageElement.style.margin='10px';
    messageElement.style.padding='5px';
    for(let i=1;i<options.length;i++){
        messageElement.innerHTML +="<br>"+
                "<span style="+"margin-top:10px;padding: 10px"+">"+ options[i].Number +"-"+ options[i].chocie  + "  $"  +  options[i].price+"</span>"
                
    }             
    
    
    messageElement.animate([{easing:"ease-in",opacity:0.4},{opacity:1}],{duration:1000})            
    chatcontainer.appendChild(messageElement);
}
function initializationOptions(){
    let options =[
        {Number:1,chocie:"weather"},
        {Number:2,chocie:"sport"},
        {Number:3,chocie:"news"},
    ];
    var messageElement=document.createElement('div');
    messageElement.classList.add('w-50');
    messageElement.classList.add('float-left');
    messageElement.classList.add('shadow-sm');
    messageElement.style.margin='10px';
    messageElement.style.padding='5px';
    for(let i=0;i<options.length;i++){
        messageElement.innerHTML +="<br>"+
                "<span style="+"margin-top:10px;padding: 10px"+">"+ options[i].Number +"-"+ options[i].chocie +"</span>"
                
    }             
    
    
    messageElement.animate([{easing:"ease-in",opacity:0.4},{opacity:1}],{duration:1000})            
    chatcontainer.appendChild(messageElement);
}
 function handleWeatherResponce(){
     if(httpRequest.readyState === XMLHttpRequest.DONE){
        if(httpRequest.status===200){
            //console.log(httpRequest.responceText);
            let responce = JSON.parse(httpRequest.responseText);
            let city=responce.location.name;
            let temp=responce.current.temperture;
            let hum=responce.current.humidity;
            let icon=responce.current.weather_icons[0];
            let messageToSend="<br>";
            messageToSend+="<span><img src ='"+ icon +"'> </span>";
            messageToSend+="<br>";
            messageToSend+=" city: "+city;
            messageToSend+="<br>";
            messageToSend+=" temperture: "+ temp +" c ";
            messageToSend+="<br>";
            messageToSend+=" humidity: "+hum;

            chatBotSendMessage(messageToSend);
            chatBotSendMessage("please choose an option");
            initializationOptions();
        }else{
            alert("There is an unexpected error");
        }
    }
}
function getWeatherRequest(lat,long){

    httpRequest= new XMLHttpRequest();
    httpRequest.onreadystatechange = handleWeatherResponce;
    httpRequest.open('GET',"http://api.weatherstack.com/current?access_key=c3edb7edba538b40552ebeb0a2468b92&query="+parseInt(lat)+','+parseInt(long));
     httpRequest.send();
 }


 function getlocationAndWeather(){
    navigator.geolocation.getCurrentPosition((pos)=>{

        let lat=pos.coords.latitude;
        let long=pos.coords.longitude;
        getWeatherRequest(lat,long);

    },(err)=>{
        console.log(err);

    });
}
// function assistantResponce(messagetext){
//     let userChoice= parseInt(messagetext.trim());
//     chatBotSendMessage('please wait...');
//     switch(userChoice){
//         case 1:
//             //alert("you chose weather");
//             getlocationAndWeather();
//             break;

//         case 2:
//             alert("you choose sport");
//             window.open("https://www.google.com/search?q=sports");
//             break;

//         case 3:
//             alert("you cho0se news");
//             window.open("https://www.google.com/search?q=news");
//             break;

//          default :
//          alert("Please choose a valid number");
//          chatBotSendMessage("please choose a valid number");

//      }

//    }

sendbtn.addEventListener('click',function(e){
    if(textbox.value==""){
        alert("please enter text");
    }else{
        let messagetext= textbox.value.trim();
        user.message=messagetext;
        sendmessage(messagetext);
        textbox.value="";
        //questionToAsk[user.counter-1].answer= user.message;
        //askQuestion();

        //processMessage();
        //assistantResponce(messagetext);
        restaurantResponceToUser(messagetext);
       
    }
    });


    textbox.addEventListener("keypress",function(e){
        if(e.which == 13){
            if(textbox.value==""){
                alert("please enter text");
            }else{
                let messagetext= textbox.value.trim();
                user.message=messagetext;
                sendmessage(messagetext);
                textbox.value="";
                //questionToAsk[user.counter-1].answer= user.message;
                //askQuestion();
        
                //processMessage();
                //assistantResponce(messagetext);
                restaurantResponceToUser(messagetext);
               
            }
        }



    });

    function processMessage(){

        if(user.message.length>5 ||user.message.includes('hi')){
                    var result = arrayOfPossibleMessage.filter(value=>value.message.includes(user.message.toLocaleLowerCase()));
           
                    if(result.length>0){
                                        var responce = result[0].responce;
    
                                        setTimeout(function(){
                                        chatBotSendMessage(responce);
                                        },1000);
                                }else{
                                    setTimeout(function(){
                                        chatBotSendMessage("I don't understand question");
                                    },1000);
        }} else if(user.message=="how"|| user.message=="who") {
            setTimeout(function(){
                chatBotSendMessage("?");
            },1000);
                

        }else{
            setTimeout(function(){
                chatBotSendMessage("please send me complete message");
            },1000);
           
        }
        
    }


    