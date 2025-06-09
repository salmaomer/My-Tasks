function addTask() {

    const input = document.getElementById("taskInput");
        const taskText = input.value.trim();

        if (taskText === "") return;

        const li = document.createElement("li");
        li.textContent = taskText;

        const statusContainer = document.createElement("div");
        statusContainer.className = "listelement";
        
        /* The Radio Button 1 */
        const doneLabel = document.createElement("label");
        const doneRadio = document.createElement("input");

        doneRadio.type = "radio";
        doneRadio.name = `status-${Date.now()}`; // Unique name for each task

        doneLabel.appendChild(doneRadio);
        /* Namde The Button */
        doneLabel.appendChild(document.createTextNode("Done"));

        /* The Radio Button 2 */
        const progressLabel = document.createElement("label");
        const progressRadio = document.createElement("input");

        progressRadio.type = "radio";
        /* The Two Radio Masts Have The Same Name*/
        progressRadio.name = doneRadio.name;

        progressLabel.appendChild(progressRadio);
        /* Namde The Button */
        progressLabel.appendChild(document.createTextNode("Progress"));

        /* Attribution Of The Son (Two Radio) To The Father (Div) */
        statusContainer.appendChild(doneLabel);
        statusContainer.appendChild(progressLabel);

        /* Attribution Of The (Div) To The (Li Mean List) */
        li.appendChild(statusContainer);
 
        /* Attribution Of The (Li Mean List) To The (Ul) */
        const ul = document.getElementById ("taskList");
        ul.appendChild(li);

        /* Return The Input Fild Empty*/
        input.value = "";
    }