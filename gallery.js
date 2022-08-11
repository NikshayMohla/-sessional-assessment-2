const realFileBtn = document.getElementById("real-file");
const customBtn = document.getElementById("custom-button");
const customTxt = document.getElementById("custom-text");

customBtn.addEventListener("click", function () {
    realFileBtn.click();
});

realFileBtn.addEventListener("change", function () {
    if (realFileBtn.value) {
        customTxt.innerHTML = realFileBtn.value.match(
            /[\/\\]([\w\d\s\.\-\(\)]+)$/
        )[1];
    } else {
        customTxt.innerHTML = "No file chosen, yet.";
    }
});


const xhr = new XMLHttpRequest()
// const value = document.querySelector('#search').value

let url = `https://jsonplaceholder.typicode.com/photos?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-09`

xhr.open('GET', url)

xhr.onreadystatechange = () => {
    if (xhr.status === 200 && xhr.readyState === 4) {
        const response = JSON.parse(xhr.responseText)
        // console.log(response[1].title);
        // document.querySelector("#btn").addEventListener('click' , ()=>
        // {

        // })
        let output = ''
        for (let i = 0; i < 50; i++) {
            output += `
            <div class="item" data-aos="zoom-in">
            <a href=./${response[i].thumbnailUrl} target="_blank" >
            <img style="width: 100%;" src=${response[i].url} />
            </a>
            <h3>${response[i].title}</h3>
                </div>
            `
        }

        document.querySelector('#gallery').innerHTML = output
    }
}

xhr.send()