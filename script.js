//create a button and let it create the items when clicked
const button = document.getElementById("button");

button.addEventListener("click", () => 
{
    //get the value from the input element.
    const inputValue = document.getElementById("text").value;


    const input = document.getElementById("text");

    if (input.value == "")
    {
        alert("The Input field must not be empty.");
        input.focus();
    }
    else
    {
        // create a div to store both the paragraph and div element
        const div = document.createElement("div");
        div.setAttribute("class", "item")

        //create a paragraph element and store the value there
        const p = document.createElement("p");
        p.setAttribute("class","item-p");
        const pText = document.createTextNode(inputValue);
        p.appendChild(pText);
        div.appendChild(p); // paragraph is the child to the div

        //create the x button to delete the div element
        const buttonDelete = document.createElement("button");
        buttonDelete.setAttribute("id", "buttonDelete");

        //create an i element for the x
        const i = document.createElement("i")
        i.setAttribute("class", "fa-solid fa-x");
        buttonDelete.appendChild(i);

        //create an i element for the check
        const i1 = document.createElement("i")
        i1.setAttribute("class", "fa-solid fa-check");

        //create an element inside the paragraph tag to act as a check box
        const span = document.createElement("span");
        span.setAttribute("class", "span");
        span.setAttribute("id", "span");
        p.appendChild(span);
        span.appendChild(i1);

        //when the span is clicked it changes color as well as the paragraph element
        let on = 1;
        span.addEventListener("click", () => 
        {
            if(on ===1)
            {
                span.style.backgroundColor = "#D8315B";
            

                p.style.backgroundColor = "#d1cfd1";
                p.style.textDecoration = "line-through";
                
                on = 0
            }
            else
            {
                span.style.backgroundColor = "#FFFAFF";
            

                p.style.backgroundColor = "#FFFAFF";
                p.style.textDecoration = "none";
                
                on = 1
            }
        });

        //let it be the child to the div
        div.appendChild(buttonDelete);

        //make this the child to the items-holder div
        document.getElementById("items-holder").appendChild(div);

            //when he delete button is clicked, we remove the div element.
        buttonDelete.addEventListener("click", () => 
        {
            div.remove();
        });

        input.value = "";

    }



});
