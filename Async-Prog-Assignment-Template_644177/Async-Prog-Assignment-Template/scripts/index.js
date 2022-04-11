
document.getElementById("home").addEventListener("click",function(){
    window.location.href = "./index.html"
})
document.getElementById("log-in").addEventListener("click",function(){
    window.location.href = "./login.html"
})
document.getElementById("sign-in").addEventListener("click",function(){
    window.location.href = "./signup.html"
})



var movies = [
    "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/03/28/1220132-rrr-ram-charan-kgf-chapter-2-yash.jpg",
    "https://data1.ibtimes.co.in/en/full/730340/kgf-2-vs-rrr.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_5kIyvLcffq-Fo6y-Ri_tI4Ma7kBm8UmTgA&usqp=CAU",
    "https://st1.bollywoodlife.com/wp-content/uploads/2022/01/Upcoming_South_Movies_Release_Dates_RRR_Valimai_Beast_KGF2_Acharya_Vikram_Sarkaru__Vaari_Paata.jpg",
    "https://www.tollywood.net/wp-content/uploads/2022/03/Tough-war-between-RRR-and-Kgf-2.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBgJRkTqHNVswglED21aprCwirrOf4pKuRkg&usqp=CAU",
]

let container = document.getElementById("slideshow")

let i=0;

setInterval(function(){

    if(i == movies.length)
    {
        i=0;
    }
    
    let image = movies[i]
    container.innerHTML = null;

    let img = document.createElement("img")
    img.src = image

    container.append(img)
    i++;
    
},1000)



var Array = [];

function movie(name,release_date,poster,Imdp) {
    this.name = name;
    this.Rdate = release_date;
    this.img = poster;
    this.rating = Imdp;
}

Array.push(
    new movie(
        "Pushpa",
        "17 December 2021",
        "https://m.media-amazon.com/images/M/MV5BOWVjZTQ4MWMtZTk1MS00YTUzLWE4ZjktOWZkOGJlNmE4YjdjXkEyXkFqcGdeQXVyMTA1NjM4NDk2._V1_QL75_UY280_CR140,0,280,280_.jpg",
        8
    )
)
Array.push(
    new movie(
        "K.G.F: Chapter 1",
        "20 December 2018",
        "https://m.media-amazon.com/images/M/MV5BMzdmMDZhNTItOWFkZS00ZmI0LTgyZjItM2FkMWM4Nzg3OTYyXkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_QL75_UX280_CR0,0,280,280_.jpg",
        8.3
    )
)
Array.push(
    new movie(
        "Dhol",
        "14 September 2007",
        "https://m.media-amazon.com/images/M/MV5BMDgwZDMyMjctYzc5NC00MDY3LWEwODMtYWFlNWM4ZTNmOTgzXkEyXkFqcGdeQXVyMTMzMDEwMzM0._V1_QL75_UY210_CR82,0,210,210_.jpg",
        6.4
    )
)
Array.push(
    new movie(
        "Kabir Singh",
        "20 June 2019",
        "https://m.media-amazon.com/images/M/MV5BNTVjMjExNWEtOWFiNS00ZTE2LWI0ODMtZTFlNDZiZWQ4MWVjXkEyXkFqcGdeQXVyNjcyNjMzMjQ@._V1_QL75_UX210_CR0,0,210,210_.jpg",
       7.2
    )
)
Array.push(
    new movie(
        "Phir Hera Pheri",
        "9 June 2006",
        "https://m.media-amazon.com/images/M/MV5BNDNlMDE4MDMtMDRjYy00Yzg0LThjMTAtYjcyMjQ0NjcxMmM4XkEyXkFqcGdeQXVyODAzNzAwOTU@._V1_QL75_UY210_CR88,0,210,210_.jpg",
        7.2
    )
)

Array.push(
    new movie(
        "Khatta Meetha",
        "23 July 2010",
        "https://m.media-amazon.com/images/M/MV5BMTUxNjg3NDgyNV5BMl5BanBnXkFtZTcwMzEzNTE3Mw@@._V1_QL75_UX210_CR0,0,210,210_.jpg",
        5.9
    )
)
Array.push(
    new movie(
        "Gabbar Is Back",
        "1 May 2015",
        "https://m.media-amazon.com/images/M/MV5BMjQyMTY1NTc1NV5BMl5BanBnXkFtZTgwODUzMDIyNTE@._V1_QL75_UX210_CR0,0,210,210_.jpg",
        7.2
    )
)
Array.push(
    new movie(
        "Devdas",
        "12 July 2002",
        "https://m.media-amazon.com/images/M/MV5BMTk2NjkxMjAyMF5BMl5BanBnXkFtZTYwMjYxNDk5._V1_QL75_UX210_CR0,0,210,210_.jpg",
        7.6
    )
)
Array.push(
    new movie(
        "Antim: The Final Truth",
        "26 November 2021",
        "https://m.media-amazon.com/images/M/MV5BNmRlNjczN2MtZmI2ZS00YjI4LWE5ZmQtZTY4ZTBhMzcxMWRjXkEyXkFqcGdeQXVyMTQ3OTM0MDA3._V1_QL75_UX210_CR0,0,210,210_.jpg",
        7.3
    )
)

localStorage.setItem("movies",JSON.stringify(Array))
// console.log(Array)
var data = JSON.parse(localStorage.getItem("movies"))
displayData(data)
function displayData(data) {
    data.map(function (element) {
        let div = document.createElement("div")
        let imgD = document.createElement("div");
        let img = document.createElement("img")
        img.setAttribute("src", element.img);
        imgD.append(img)
        var h4 = document.createElement("h4")
        h4.innerText = element.name;
        var p = document.createElement("p")
        p.innerText = "Release Date: " + element.Rdate;
        p.setAttribute("id","release")
        var p1 = document.createElement("p")
        p1.innerText = "IMDP Rating: " + element.rating+"/10";
        p1.setAttribute("id","imdp")
        div.append(imgD, h4, p, p1)
        document.getElementById("movies").append(div)
    }) 
}

function sortItems() {
    document.getElementById("movies").innerHTML = "";
    var sorting = document.querySelector("#sorter").value;
    if ((sorting == "sort-lh") == true) {
        data.sort(function (a,b) {
            return a.rating-b.rating
        }
        )
        displayData(data)
    } else if(sorting == "sort-hl") {
        document.getElementById("movies").innerHTML = "";
        data.sort(function (a,b) {
            return b.rating-a.rating
        }
        )
        displayData(data)
    } 
}