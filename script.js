var faq = [
    {
        question: "What is Netflix?",
        answer: "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!"
    },
    {
        question: "How much does Netflix cost?",
        answer: "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts."
    },
    {
        question: "Where can I watch?",
        answer: "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.You can also download your favourite shows with the iOS or Android app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere."
    },
    {
        question: "How do I cancel?",
        answer: "Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime."
    },
    {
        question: "What can I watch on Netflix?",
        answer: "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want."
    },
    {
        question: "Is Netflix good for kids?",
        answer: "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see."
    }
]




function loadQuestions(){
    var questionAnswer = document.getElementById("faqContainer");
    for(i=0;i<faq.length;i++)
    {
        var container = `<div class="questionBox" onclick="displayAnswer('answerContent${i}')">
                   <div class="question">
                   ${faq[i].question}
                   </div>
                   <div class="plus">
                       <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="white" class="bi bi-plus-lg"
                           viewBox="0 0 16 16">
                           <path fill-rule="evenodd"
                               d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2" />
                       </svg>
                   </div>
               </div>
               <div class="answerBox">
                   <div class="answer" id="answerContent${i}">
                       ${faq[i].answer}
                    </div>
               </div>
               
               `;

           
        
        console.log(container);
        questionAnswer.innerHTML += container;
    }
    }

    function displayAnswer(id) {
        console.log(id)
        var element = document.getElementById(id);
        console.log(element);
        console.log("display function called")
        if (element.style.display === "none"||!element.style.display) {
            console.log(element.style.display);
            element.style.display = 'inline';
        }
        else {
            element.style.display = 'none'
        }
    }














    

// function loadQuestions(){
//     var questionAnswer = document.getElementById("faqContainer");
//     for(i=0;i<faq.length;i++)
//     {
//         var container = `<div class="questionBox" onclick="displayAnswer()">
//                    <div class="question">
//                    ${faq[i].question}
//                    </div>
//                    <div class="plus">
//                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="white" class="bi bi-plus-lg"
//                            viewBox="0 0 16 16">
//                            <path fill-rule="evenodd"
//                                d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2" />
//                        </svg>
//                    </div>
//                </div>
//                <div class="answerBox">
//                    <div class="answer" id="answerContent">
//                        ${faq[i].answer}
//                     </div>
//                </div>
               
//                `;

           
        
//         console.log(container);
//         questionAnswer.innerHTML += container;
//     }
//     }

//     function displayAnswer() {

//         var element = document.getElementById("answerContent");
//         console.log(element);
//         console.log("display function called")
//         if (element.style.display === "none"||!element.style.display) {
//             console.log(element.style.display);
//             element.style.display = 'inline';
//         }
//         else {
//             element.style.display = 'none'
//         }
//     }


























































// shrushti code



    // var faq=[
    //     {
    //         que:"What is Netflix ?",
    //         ans:"Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices. You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!"
    //     },
    //     {
    //         que:"How much does Netflix cost?",
    //         ans:"Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts."
    //     },
    //     {
    //         que:"Where can I watch?",
    //         ans:"Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.          You can also download your favourite shows with the iOS or Android app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere."
    //     },
    //     {
    //         que:"How do I cancel?",
    //         ans:"Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime."
    //     },
    //     {
    //         que:"What can I watch on Netflix?",
    //         ans:"Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want."
    //     },
    //     {
    //         que:"Is Netflix good for kids?",
    //         ans:"The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.                                       Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see."
    //     }
    // ] 
    
    
    // console.log(faq[0].que);
    
    // for(let i=0; i < faq.length; i++){
    //     var accordion= document.getElementById("faqList")
    
    //     accordion.innerHTML +=
    //     `<div class="faq">
    //                 <div class="ques" onclick="toggleAnswer(${i})">
    //                     <h2>${faq[i].que}</h2>
    //                     <i class="fa-sharp fa-regular fa-plus"></i>
    //                 </div>
    //                 <div class="hide" id="ans-${i}" >
    //                     <p>${faq[i].ans}</p>
    //                 </div>
    //     </div>`
    //             console.log(accordion)
    // }
    // function toggleAnswer(i){
    //     var faqAns= document.getElementById(ans-${i})
    //  if(faqAns.className ==="hide") {
    //     faqAns.className="show"
    //  }else{
    //     faqAns.className="hide"
    //  }
    // }
    // const element= document.getElementsByTagName("h2");
    




























































// var element = document.getElementById("answer1Content");

// function displayAnswer1() {
//     if (element.style.display === "none") {
//         element.style.display = 'inline';
//     }
//     else {
//         element.style.display = 'none'
//     }
// }

// var element2 = document.getElementById("answer2Content");

// function displayAnswer2() {
//     if (element2.style.display === "none") {
//         element2.style.display = 'inline';
//     }
//     else {
//         element2.style.display = 'none'
//     }
// }


// function loadQuestions() {
//     for (var i = 0; i <= faq.length; i++) {
//         console.log(faq[i].question)
//         const questionBox =
//             `
//     <div class="questionBox">
//     <div class="question">
//         ${faq[i].question}
//     </div>
//     <div class="plus">
//         <!-- <i class="fa-solid fa-plus" onclick="displayAnswer()"></i> -->
//         <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="white" onclick="handleQuestionClick(${i})"
//             class="bi bi-plus-lg" viewBox="0 0 16 16">
//             <path fill-rule="evenodd"
//                 d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2" />
//         </svg>
//     </div>
// </div>
// <div class="answerBox">
//     <div class="answer" id="${i}answer">
//        ${faq[i].answer}
//     </div>
// </div>`
//         console.log(questionBox)
//         document.getElementById(faqContainer).innerText = questionBox;
//     }
// }