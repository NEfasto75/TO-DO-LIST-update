//=====Create Items=====
function addLi() {
    let li = document.createElement("li");
    let inputValue = document.getElementById("select").value;
    let testo = document.createTextNode(inputValue);
    li.appendChild(testo);
    if (inputValue === '') {
      alert("Insert a new task");
    } else {
      document.getElementById("listOfDuty").appendChild(li);
    }

    //=====POST Request=====

const postData = async () => {

  const newTask = {
  description: inputValue,
  done: false
  };

console.log("New Task " + (inputValue) + " Created")
fetch('http://localhost:3000/', {
  method: 'POST',                          
  headers: {
      "Content-Type": "application/json",
  },
  body: JSON.stringify(newTask)

}).then (res => { 
  return res.json()
                                       
})
.catch(error => console.log(error));
};
postData()



    document.getElementById("select").value = "";
   let span = document.createElement("SPAN");
  let text = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(text);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      let div = this.parentElement;
      div.style.display = "none";
    }
  }
}

//=====GET Request=====

const getData = async () => {
  
    await fetch('http://localhost:3000/', {
        method: 'GET',                          
        headers: {
            "Content-Type": "application/json",
        },
    
    }).then (res => { 
        return res.json()
    
    }).then (data => { console.log("fetching data ", data)
      const APILista = data.map((item) => {
        return item.description; 
      });                
        //console.log(APILista) //array valida
        
        
    APILista.forEach(item => {
      //console.log(data)                       
      let li = document.createElement("li");
      document.getElementById("listOfDuty").appendChild(li);
      li.innerHTML = item
      let span = document.createElement("SPAN");
      let text = document.createTextNode("\u00D7");
      span.className = "close";
      span.appendChild(text);
      li.appendChild(span);
      for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
          let div = this.parentElement;
          div.style.display = "none";
        }
      }
    })
    }).catch(error => console.log(error))
    
    }
    getData()

    //=====DELETE Request
const deleteData = async () => {
    await fetch('http://localhost:3000/' + id, {     
       method: 'DELETE',
     
   })
   }