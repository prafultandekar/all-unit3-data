async function apiCall(url) {
  
        try {
          let res = await fetch(url);
          let data = await res.json();
            //console.log("data:", data);
            let main = document.getElementById("main");
            appendArticles(data,main)
          //appendData(data);
        } catch (error) {}
   

    //add api call logic here


}


function appendArticles(articles, main) {

    //add append logic here
    main.innerHTML = null;
    articles.forEach((elem) => {
      let div = document.createElement("div");
      div.setAttribute("id", "blog");
      div.style.display = "flex";
      div.style.flex_direction = "row";
      div.style.gap = "20px";
      div.style.justifyContent = "center";
      div.addEventListener("click", () => {
        article(elem);
      });
      let div1 = document.createElement("div");

      div1.innerText = elem.title;
      let div2 = document.createElement("div");
      div2.innerText = elem.description;
      let div3 = document.createElement("div");
      div3.style.height = "200px";
      div3.style.width = "400px";

      let img = document.createElement("img");

      img.src = elem.urlToImage;
      div3.append(img);

      div.append(div1, div2, div3);

      main.append(div);
    });

}

 //let input = document.getElementById("searchbar");
//   // console.log('input:', input)

//   input.addEventListener("keypress", () => {
//     search(event);
//   });


// let res = await fetch(
//     ` https://blog-search-u3c4.herokuapp.com/api/search/?q=${value}`
//   );
//   let data = await res.json();
  let search = async (e,value) => {
    if (e.code === "Enter") {
   
      localStorage.setItem("search_term",value);
    //   localStorage.setItem("searchData", JSON.stringify(data));
      window.location.href = "search.html";
      //console.log('data:', data)
      //appendData(data);
    }
  };


let clickData = [];

  let article = (elem) => {
    clickData.push(elem);
    localStorage.setItem("article", JSON.stringify(clickData));
    window.location.href = "blog.html";
  };

export { apiCall, appendArticles ,article ,search}