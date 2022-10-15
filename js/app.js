const loadPhotos = () => {
    fetch(`https://jsonplaceholder.typicode.com/photos`)
        .then(res => res.json())
        .then(data => displayPhotos(data))
        .catch(error => console.log(error))
}

const displayPhotos = photos => {
    // console.log(photos);
    const photosContainer = document.getElementById('photos-container');
    photos.forEach(photo => {
        // console.log(photo);
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('col');
        cardDiv.innerHTML = `
        <div class="card">
            <img onclick="loadPhotoDetail(${photo.id})" src="${photo.url}" class="card-img-top" alt="">
            <div class="card-body">
                <h5 class="card-title">${photo.title}</h5>
            </div>
        </div>
        `;
        photosContainer.appendChild(cardDiv);
    });
}

const loadPhotoDetail = id => {
    fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
        .then(res => res.json())
        .then(data => displyPhotoDetail(data))
        .catch(error => console.log(error))
}

const displyPhotoDetail = photoDetail => {
    // console.log(photoDetail);
    const photoDetailsContainer = document.getElementById('photos-details-container');
    // console.log(photoDetailsContainer);
    photoDetailsContainer.innerHTML = `
    <div class="card w-25" >         
        <img src="${photoDetail.thumbnailUrl}" class="card-img-top" alt="">
        <div class="card-body">
            <img src="${photoDetail.url}" class="card-img-top" alt="">
            <h5 class="card-title">${photoDetail.title}</h5>
        </div>
    </div>
    `;
    const photosContainer = document.getElementById('photos-container');
    photosContainer.classList.add('d-none');
}
loadPhotos();