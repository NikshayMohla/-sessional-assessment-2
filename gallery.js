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
                <div class="item">
                    <a href=${response[i].thumbnailUrl} target="_blank" >
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