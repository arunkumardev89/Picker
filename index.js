
let myLeads=[]
let oldLeads=[]
let inputEl=document.getElementById("input-el")
const inputBtn=document.getElementById("input-btn")
const ulEl=document.getElementById("ul-el")
const deleteBtn=document.getElementById("delete-btn")
const saveBtn=document.getElementById("save-btn")


const leadsFromLocalStorage=JSON.parse(localStorage.getItem("myLeads"))
if(leadsFromLocalStorage)
{
    myLeads= leadsFromLocalStorage
    oldLeads=leadsFromLocalStorage
    render(myLeads)
}

function render(leads)
{
  let listItems="" 
  for(let i=0;i<leads.length;i++)
    {
     //listItems+= "<li> <a target='_blank' href='" +  myLeads[i]+ "'>" +myLeads[i]+ "</a></li>"
     listItems+= `
      <li>
        <a target='_blank' href='${leads[i]}'>
           ${leads[i]} 
        </a>
      </li>
     `
    }
  ulEl.innerHTML=listItems
}


inputBtn.addEventListener("click",function(){
   myLeads.push(inputEl.value)
   inputEl.value=""
    localStorage.setItem("myLeads",JSON.stringify(myLeads))
    render(myLeads)
    //console.log(localStorage.getItem("myLeads"))
})


deleteBtn.addEventListener("dblclick",function(){
    localStorage.clear() //clearing local storage
    myLeads=[] //clearing the array
    render(myLeads) // clearing the DOM (display of the page)
})

saveBtn.addEventListener("click",function(){
   chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    myLeads.push(tabs[0].url)
    localStorage.setItem("myLeads",JSON.stringify(myLeads))
    render(myLeads)
    })
    // this function retrives url from the browser
})





  //let myLeads = `["www.awesomelead.com"]`

  // 1. Turn the myLeads string into an array
  //myLeads = JSON.parse(myLeads)
  // 2. Push a new value to the array
  //myLeads.push("www.lead2.com")
  // 3. Turn the array into a string again
  //yLeads = JSON.stringify(myLeads)
  // 4. Console. log the string using typeof to verify that it's a string
  //console. log(typeof myLeads)









  // ulEl.innerHTML= "<li>+myLeads[i]+</li>"
      // to add any tags directly to html page from js 2 ways above and below
      // const li=document.createElement("li")
      // li.textContent+=myLeads[i]
      // ulEl.append(li) 