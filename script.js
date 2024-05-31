let addBtn = document.querySelector(".btn")

addBtn.addEventListener("click", function() {
    let input1 = document.querySelector("#input")
    let container = document.querySelector(".container2")

    let inputValue = input1.value.trim()

    if (inputValue !== "") {
        let newTask = document.createElement("div")
        newTask.className = "task"
        let text = document.createElement("p")
        text.classList = "text"
        text.textContent = inputValue
        let imgDiv = document.createElement("div")
        imgDiv.className = "img-div"
        let imgC = document.createElement("div")
        let imgC1 = document.createElement("div")
        imgC.classList = 'imgC'
        imgC1.classList = 'imgC'
        let check = document.createElement("img")
        check.src = "img/Check.svg"
        let remove = document.createElement("img")
        remove.src = "img/TrashSimple.svg"

        remove.addEventListener("click", function() {
            container.removeChild(newTask)
        })

        check.addEventListener("click", function() {
            text.classList.toggle("cheked-text")
        })




        container.appendChild(newTask)
        newTask.appendChild(text)
        newTask.appendChild(imgDiv)
        imgDiv.appendChild(imgC)
        imgDiv.appendChild(imgC1)
        imgC.appendChild(check)
        imgC1.appendChild(remove)
    }
    input1.value = ""
})
