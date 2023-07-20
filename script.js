let arr=[
    {
        dp:"https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZmlsZSUyMGltYWdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60",
        name:"Anna Johnson",
        prof:"Graphic Designer",
        det:"Graphic Designer is responsible for producing written, audio, or visual information for content marketing platforms, like social media or blogs. We're using the word “content” pretty loosely here. Today, content could be a video on TikTok, a Instagram testimonial, or a blog post for a website."
        
    },
    {
        dp:"https://images.unsplash.com/photo-1619539465730-fea9ebf950f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2ZpbGUlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
        name:"Aleena Rais",
        prof:"Content Creator",
        det:"A content creator is responsible for producing written, audio, or visual information for content marketing platforms, like social media or blogs. We're using the word “content” pretty loosely here. Today, content could be a video on TikTok, a Instagram testimonial, or a blog post for a website."
        
    },
    {
        dp:"https://images.unsplash.com/photo-1558072844-b2e8b546d415?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHByb2ZpbGUlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
        name:"Summan John",
        prof:"Web Designer",
        det:"A Web Designer is responsible for producing written, audio, or visual information for content marketing platforms, like social media or blogs. We're using the word “content” pretty loosely here. Today, content could be a video on TikTok, a Instagram testimonial, or a blog post for a website."

    },
    {
        dp:"https://images.unsplash.com/photo-1505033575518-a36ea2ef75ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=386&q=80",
        name:"Nidhi Poudel",
        prof:"Software Developer",
        det:"A Software Developer is responsible for producing written, audio, or visual information for content marketing platforms, like social media or blogs. We're using the word “content” pretty loosely here. Today, content could be a video on TikTok, a Instagram testimonial, or a blog post for a website."

    },
    {
        dp:"https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZSUyMGltYWdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60",
        name:"Rumorjoy",
        prof:"Artist",
        det:"An Artist is responsible for producing written, audio, or visual information for content marketing platforms, like social media or blogs. We're using the word “content” pretty loosely here. Today, content could be a video on TikTok, a Instagram testimonial, or a blog post for a website."

    },
    {
        dp:"https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZSUyMGltYWdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60",
        name:"Alex Davin",
        prof:"Content Creator",
        det:"A content creator is responsible for producing written, audio, or visual information for content marketing platforms, like social media or blogs. We're using the word “content” pretty loosely here. Today, content could be a video on TikTok, a Instagram testimonial, or a blog post for a website."

    }
]
let image=document.querySelector(".dp img")
let nam=document.querySelector(".name h3")
let proff=document.querySelector(".profession h3")
let details=document.querySelector(".details p")

let lbtn=document.querySelector(".btn-left svg")
let rbtn=document.querySelector(".btn-right svg")
let surprise=document.querySelector(".sub button")

let currentItem = 0;

// load initial item
window.addEventListener("DOMContentLoaded", function () {
  const item = arr[currentItem];
  image.src = item.dp;
  nam.textContent = item.name;
  proff.textContent = item.prof;
  details.textContent = item.det;
});

function showperson(person){
    // console.log(`showing ${arr[person].name}`)
    const item = arr[person];
    image.src = item.dp;
    nam.textContent = item.name;
    proff.textContent = item.prof;
    details.textContent = item.det;
}

rbtn.addEventListener("click",function(){
    currentItem++;
    if(currentItem>arr.length-1){
        currentItem=0
    }
    showperson(currentItem)
})
lbtn.addEventListener("click",function(){
    currentItem--;
    if(currentItem<0){
        currentItem=arr.length-1;
    }
    showperson(currentItem)
})
surprise.addEventListener("click",function(){
    let randomNum=(Math.floor((Math.random() * (arr.length))));
    showperson(randomNum)
})