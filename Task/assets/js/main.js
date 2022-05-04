class Person{
  name;
  static people=[];
  constructor(name){
    this.name=name;
  }
  
  static createPerson(){
    const name=prompt("Please enter name").trim();
    const person=new Person(name);
    this.people.push(person);
  }
}
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
console.log(getRandomInt(3));

  
  

  window.onload=function(){
    const create=document.getElementById("createBtn");
    const random=document.getElementById("randomBtn");
    const list=document.getElementsByClassName("cus-ol");


    create.onclick=function(){
      Person.createPerson();
    }

    random.onclick=function(){
      if(Person.people.length>=2){
        const randomNum1=getRandomInt(Person.people.length);
        const firstPerson=Person.people[randomNum1];
        Person.people.splice(randomNum1,1);

        const randomNum2=getRandomInt(Person.people.length);
        const secondPerson=Person.people[randomNum2];
        Person.people.splice(randomNum2,1);
        const item=document.createElement("li");
        item.classList.add("cus-li");
        const spanFirst=document.createElement("span");
        const spanSecond=document.createElement("span");
        const spanIcon=document.createElement("span");
        const nameFirst=document.createTextNode(firstPerson.name);
        const nameSecond=document.createTextNode(secondPerson.name);

        spanIcon.innerHTML=' <i class="fa-solid fa-gift"></i> ';
        spanFirst.appendChild(nameFirst);
        spanSecond.appendChild(nameSecond);
        item.appendChild(spanFirst);
        item.appendChild(spanIcon);
        item.appendChild(spanSecond);
        list[0].appendChild(item);

        alert(firstPerson.name+" & "+secondPerson.name);
      }
      else{
        alert("You need to add more people");
      }
    }
  }