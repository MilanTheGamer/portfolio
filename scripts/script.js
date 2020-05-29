const expanded = document.getElementById("expanded");
const profileInfo = document.getElementById("profileInfo");
const contacts = document.getElementById("contacts");

const knowMore = () => {
    expanded.scrollIntoView();
};

profileInfo.addEventListener("click",()=>{
    contacts.scrollIntoView();
})