function appendMovie(data){
    console.log(data);
    let parent = document.querySelector("#appendCont");
    console.log(parent)
    data.forEach(element => {
        let div = document.createElement("div");
        div.style.display = "flex";
        div.style.flexDirection= "column"
        div.style.alignItems="center";
        div.style.margin = "5px";
        parent.append(div);
        let cont = document.createElement("img");
        div.append(cont);
        cont.src=element.Poster;
        div.style.width = "20%";
        cont.style.width = "80%";           
        let text = document.createElement("h1");
        div.append(text);
        text.textContent = element.Title;
        text.style.fontSize = "medium" ;
        let para = document.createElement("p");
        div.append(para);
        para.textContent = element.Year;
        para.style.fontSize = "medium";
        para.style.color = "black";
        
        console.log(cont);  
    });


}




async function searchMovie(){
    let url = "http://www.omdbapi.com/?apikey=d5047f57&";
    let movieName = document.getElementById("input").value;
    let movies = await fetch(`http://www.omdbapi.com/?apikey=d5047f57&s=${movieName}`);
    // console.log(movies);
    let moviesData = await movies.json();
    console.log(moviesData);
    appendMovie(moviesData.Search);
}