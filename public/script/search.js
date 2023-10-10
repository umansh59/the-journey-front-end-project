
document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('searchInput');
    const animeListContainer = document.getElementById('animeList');
    const myAnimeListContainer = document.getElementById('myAnimeList');
    const animeInfoContainer = document.getElementById('animeInfo');
    const myList = [];

    function getData(search) {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', `https://api.jikan.moe/v4/anime?q=${search}&limit=20`, true);

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                const resData = JSON.parse(xhr.responseText);
                console.log(resData);
                
                function AnimeInfo(element) {
                    console.log(element); 
                    const { title, images: { jpg: { large_image_url } }, source, rank, score, popularity, members, status, rating, duration, title_japanese, synopsis } = element;
                    animeInfoContainer.innerHTML = `
                    <div class="anime-content">
                        <h3>${title}</h3><br />
                        <img src="${large_image_url}" alt="" />
                        <div class="info">
                            <h3>#Rank: ${rank}</h3>
                            <h3>#Score: ${score}</h3>
                            <h3>#Popularity: ${popularity}</h3>
                            <hr /><br />
                            <h4>Members: ${members}</h4>
                            <h4>Source: ${source}</h4>
                            <h4>Duration: ${duration}</h4>
                            <h4>Status: ${status}</h4>
                            <h4>Rating: ${rating}</h4>
                        </div>
                        <!-- </div>
                    <button class="add-to-list">Add To List +</button> 
                    </div> -->
                    `;
                }
                
                
                function updateMyAnimeList() {
                    myAnimeListContainer.innerHTML = '';
                    myList.forEach(function (element) {
                        myAnimeListContainer.innerHTML += `
                            <div class="card">
                                <img src="${element.images.jpg.large_image_url}" alt="animeImage" />
                                <div class="anime-info">
                                    <h4>${element.title}</h4>
                                    <div class="overlay">
                                        <h4>${element.title_japanese}</h4>
                                        <h3>SYNOPSIS</h3>
                                        <div class="synopsis">
                                            <p>${element.synopsis}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>`;
                    });
                }
            
                animeListContainer.innerHTML = '';
                resData.data.forEach(function (element) {
                    animeListContainer.innerHTML += `
                    <div class="card">
                    <img src="${element.images.jpg.large_image_url}" alt="animeImage" />
                        <div class="anime-info">
                            <h4>${element.title}</h4>
                            <div class="overlay">
                                <h4>${element.title_japanese}</h4>
                                <h3>SYNOPSIS</h3>
                                <div class="synopsis">
                                    <p>${element.synopsis}</p>
                                </div>
                                <div class="">
                                    <p>Add To List +</p>
                                </div>
                            </div>
                        </div>
                    </div>`;


                    const cardElements = document.querySelectorAll('.card');
                    cardElements.forEach(function (cardElement, index) {
                        const element = resData.data[index];
                        cardElement.addEventListener('click', function () {
                            AnimeInfo(element); 
                        });
                        cardElement.addEventListener('dblclick', function () {
                            myList.push(element);
                        updateMyAnimeList();
                        console.log(myList);
                        });
                    });

                
                });
                
                
                
                
            }
        };

        xhr.send();
    }
  getData("Naruto ")
//   searchInput.defaultValue ="Naruto "
    searchInput.addEventListener('input', function (event) {
        const searchTerm = event.target.value;
        getData(searchTerm);
    });
});