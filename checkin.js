
console.log("Hello");
const personalized = ()=>{
    x= document.getElementById("validationCustom04").value
    y=document.getElementById("Syllabus").value
    var Sem = document.getElementById("Sem").value
    
    var res = document.getElementById("flexCheckDefault");
    const checkboxes = res.document.checkboxes.
        const selectedFruits = [];
  
        for (let i = 0; i < checkboxes.length; i++) {
          selectedFruits.push(checkboxes[i].value);
        }
  
        z=console.log(selectedFruits);

    // ---------------------------------------->

    
    
    













    console.log("the selected option is",x)

    if(x=="CS"){
        alert("Your choose is CS.. Further processing....")
        window.location.href = "./All_files/CS.html"
        
    }
    if(x=="AU"){
        alert("Your choose is AU.. Departrment in progress < Please Hold ON for some time");
        if(y=="C20"){
            alert("C20")
            
            switch(Sem){
                case "1st Sem":
                    alert("1st Sem")
                    console.log("your selected resources are --",z)
                    if(res=="Text Books"){
                        alert("Processing Textbooks......");
                    }
                    if(res=="Text Books" && "Learning Videos"){
                        alert("Processing Textbooks and Learning videos......");
                    }
                    break;
                case "2nd Sem":
                    alert("2nd Sem")
                    break;
                case "3rd Sem":
                    alert("3rd Sem")
                    break;
                case "4th Sem":
                    alert("4th Sem")
                    break;
                case "5th Sem":
                    alert("5th Sem")
                    break;
                case "6th Sem":
                    alert("6th Sem")
                    break;
                
            }

        }
        if(y=="C15"){
            alert("C15")
        }
    }
    if(x=="EC"){
       return `<div class="alert alert-success alert-dismissible"><button type="button" class="btn-close" data-bs-dismiss="alert"></button><strong>Success!</strong> This alert box could indicate a successful or positive action.</div> `
        
    }
    if(x=="ME"){
        alert("Your choose is ME.. Departrment in progress < Please Hold ON for some time");
    }
    

  }