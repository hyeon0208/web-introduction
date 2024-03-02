function submitForm() {
    const name = document.getElementById("visitor").value;
    const checkboxes = document.querySelectorAll("input[type='checkbox']");
    let checkedCount = 0;
    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            checkedCount++;
        }
    }
    alert(name + "님, 저와 " + checkedCount + "개의 취향이 같으시네요!")
}

document.querySelector('button[type="button"]').addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById("guest-form").reset();
});
