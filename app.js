
var arr = [
    {dp:"https://dukaan.b-cdn.net/700x700/webp/media/91bded64-9ca6-49f0-8726-63b6ec807678.png",story: "https://pbs.twimg.com/media/GNDZEGuWsAAYEZI.jpg"},
    {dp:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUBu9r8VePDudq5AMGSLLBQM-PHZwXjCrpgTBSVgDEcmyW8xKA7jil1AG58Flv4kP8RVI&usqp=CAU",story: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZZtVtWsRL4pDezK7NtnN0STgx5L0exKNck_ctDKHY4dFSkwF2J6v3CZWUlMxOubwUe2Q&usqp=CAU"},
    {dp:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQfKo-_wYsDATRtGmAqorfOWZi9nkfKfzWcg&s",story: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGgqH0sMIx3oEeh9tMEn0iqoZ1QVv4QwTOTw&s"},
    {dp:"https://i1.sndcdn.com/avatars-l2CGnnHIdKLIjzUX-yESDJQ-t240x240.jpg",story: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWNiolp7mE-h75yBBANraNNMS5ANLiVK4hz-Q3wOCXPSKzz-sI46SMcoB02f6iHoc1zEQ&usqp=CAU"},
    {dp:"https://source.boomplaymusic.com/group10/M00/04/12/83d911b97b694149b9cf2881d7c6ed5d_320_320.png",story: "https://i.ytimg.com/vi/lXZp98uaRx8/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBurws8qc9gZ6NzEXZ_lUw37oW1WQ"},
    {dp:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXwZhdYNO_lPscyaU1PDDJERxfE9vswazIUw&s",story: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrpWucMPUT9FV2r1Vik65Q9PZWi4v8GCZtZQ&s"},
    {dp:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDCvcH8A_XrjamfX0wTw9KIQO04Gk28g4J6g&s",story: "https://i.ytimg.com/vi/E71uHxiHUvI/mqdefault.jpg"},
    {dp:"https://images.genius.com/582ca715e12bbfdf2f0a19cb948d34b5.1000x1000x1.jpg",story: "https://rollingstoneindia.com/wp-content/uploads/2023/07/Sambata-Def-Jam-photo-web.jpg"},
    {dp:"https://i.scdn.co/image/ab6761610000e5eb333afbff9e5e939b9a139ee2",story: "https://i.ytimg.com/vi/0az6ZIJJZ5U/sddefault.jpg?v=66103e57"},
];


var stories = document.querySelector(".stories");
var clutter = ""

arr.forEach(function(elem,idx){
    clutter += `<div class="story">
        <img id="${idx}" src="${elem.dp}" alt="">
        </div>`
})

stories.innerHTML = clutter;
stories.addEventListener("click", (dets) => {
    document.querySelector("#full-screen").style.display = "block";
    document.querySelector("#full-screen").style.backgroundImage = `url(${arr[dets.target.id].story})`;

    setTimeout( () => {
        document.querySelector("#full-screen").style.display = "none";
    }, 2500)
})