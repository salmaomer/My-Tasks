function addTask() {
    const input = document.getElementById("taskInput");
        const taskText = input.value.trim();

        if (taskText === "") return;

        const li = document.createElement("li");
        li.textContent = taskText;

        const statusContainer = document.createElement("div");
        statusContainer.style.marginLeft = "auto";
        statusContainer.style.display = "flex";
        statusContainer.style.gap = "10px";
        statusContainer.style.alignItems = "center";

        const doneLabel = document.createElement("label");
        const doneRadio = document.createElement("input");
        doneRadio.type = "radio";
        doneRadio.name = `status-${Date.now()}`; // Unique name for each task
        doneLabel.appendChild(doneRadio);
        doneLabel.appendChild(document.createTextNode("Done"));

        const progressLabel = document.createElement("label");
        const progressRadio = document.createElement("input");
        progressRadio.type = "radio";
        progressRadio.name = doneRadio.name;
        progressLabel.appendChild(progressRadio);
        progressLabel.appendChild(document.createTextNode("Progress"));

        statusContainer.appendChild(doneLabel);
        statusContainer.appendChild(progressLabel);

        li.appendChild(statusContainer);

        document.getElementById("taskList").appendChild(li);
        input.value = "";
    }