let daily=document.getElementById("day")
let weekly=document.getElementById("week")
let monthly=document.getElementById("month")


let work=document.getElementById("workhrs")
let lastwork=document.getElementById("lastwork")

let play=document.getElementById("playhrs")
let lastplay=document.getElementById("lastplay")

let study=document.getElementById("studyhrs")
let laststudy=document.getElementById("laststudy")

let exercise=document.getElementById("exercisehrs")
let lastexercise=document.getElementById("lastexercise")

let social=document.getElementById("socialhrs")
let lastsocial=document.getElementById("lastsocial")

let self=document.getElementById("selfhrs")
let lastself=document.getElementById("lastself")



daily.addEventListener("click",function(){
reset()
daily.classList.add("selected")

work.innerHTML=`6hrs`
lastwork.innerHTML=`Last Day- 8hrs`

play.innerHTML=`3hrs`
lastplay.innerHTML=`Last Day- 2hrs`

study.innerHTML=`4hrs`
laststudy.innerHTML=`Last Day- 5hrs`

exercise.innerHTML=`1.5hrs`
lastexercise.innerHTML=`Last Day- 2hrs`

social.innerHTML="3.5hrs"
lastsocial.innerHTML="Last Day- 4hrs"

self.innerHTML="2hrs"
lastself.innerHTML="Last Day- 3hrs"
})

weekly.addEventListener("click",function(){
    reset()
    weekly.classList.add("selected")

    work.innerHTML=`35hrs`
lastwork.innerHTML=`Last Week- 38hrs`

play.innerHTML=`19hrs`
lastplay.innerHTML=`Last Week- 22hrs`

study.innerHTML=`21hrs`
laststudy.innerHTML=`Last Week- 24hrs`

exercise.innerHTML=`12hrs`
lastexercise.innerHTML=`Last Week- 13hrs`

social.innerHTML="26hrs"
lastsocial.innerHTML="Last Week- 22hrs"

self.innerHTML="23hrs"
lastself.innerHTML="Last Week- 20hrs"
    })

monthly.addEventListener("click",function(){
    reset()
    monthly.classList.add("selected")

    work.innerHTML=`97hrs`
lastwork.innerHTML=`Last Month- 104hrs`

play.innerHTML=`78hrs`
lastplay.innerHTML=`Last Month- 73hrs`

study.innerHTML=`82hrs`
laststudy.innerHTML=`Last Month- 112hrs`

exercise.innerHTML=`42hrs`
lastexercise.innerHTML=`Last Month- 40hrs`

social.innerHTML="100hrs"
lastsocial.innerHTML="Last Month- 102hrs"

self.innerHTML="62hrs"
lastself.innerHTML="Last Month- 65hrs"
        })



function reset(){
daily.classList.remove("selected")
weekly.classList.remove("selected")
monthly.classList.remove("selected")

}