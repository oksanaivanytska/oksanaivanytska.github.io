const container = document.getElementById('container');

async function getData() {
    const response = await fetch('https://randomuser.me/api', {
        method: 'GET',
    });

    const content = await response.json();
    const temple = `
    <div class="card">
            <img src="${content.results[0].picture.large}" alt="">
            <div><b>Name:</b> ${content.results[0].name.title} ${content.results[0].name.first} ${content.results[0].name.last}</div>
            <div><b>City:</b> ${content.results[0].location.city}</div>
            <div><b>Postcode:</b> ${content.results[0].location.postcode}</div>
            <div><b>Phone:</b> ${content.results[0].phone}</div>
    </div>`;
        container.insertAdjacentHTML('afterbegin', temple);
}