const cvButtom = document.querySelector(".cvButtom");
const alertButtom = document.querySelector(".CVAlert");

const openCVForm = () => {
    alertButtom.innerHTML = "";
    const toastAlert = document.createElement("div");
    toastAlert.append("Now You are downloaded My CV Form.");
    alertButtom.append(toastAlert);

    toastAlert.classList.add("downloadCV");

    toastAlert.style.bottom = `-${toastAlert.offsetHeight}px`;

    setTimeout(() => {
        toastAlert.style.bottom = `0px`;
    }, 100);

    setTimeout(() => {
        toastAlert.style.bottom = `-${toastAlert.offsetHeight}px`;
    }, 3000);


    // console.log("cv click");
}
cvButtom.addEventListener('click', ()=> {
    openCVForm();
});