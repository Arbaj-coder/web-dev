function createCard(title, cName, views, monthsOld, duration, thumbnail , link) {
    let div = document.createElement("div");
    div.setAttribute("class", "box");
    document.querySelector(".output-box").before(div);
    if(views >= 1000 && views < 1000000){
      views /= 1000;
      views = views.toString();
      views += 'K';
    }
    else if(views >= 1000000){
      views /= 1000000;
      views = views.toString();
      views += 'M';      
    }
    div.innerHTML = `
    <a target="_blank" href=${link}>
      <div class="image-container">
        <img src="${thumbnail}" alt="Thumbnail">
        <div class="text-overlay">${duration}</div>
      </div>
      </a> 
      <div class="text-content">
        <h1>${title}</h1>
        <span>${cName} • ${views} views • ${monthsOld} months ago</span>
      </div>
     
    `;
}


function showResult() {
    const s1 = document.getElementById("title").value.trim();
    const s2 = document.getElementById("channel").value.trim();
    const num1 = parseFloat(document.getElementById("views").value);
    const num2 = parseFloat(document.getElementById("months").value);    
    const s3 = document.getElementById("duration").value.trim();
    const s4 = document.getElementById("URL").value.trim();
    const s5 = document.getElementById("URL1").value.trim();
    createCard(s1,s2,num1,num2,s3,s4,s5);
}
// createCard("Introduction to Backend | Sigma Web Dev video #2", "CodeWithHarry", 560000, 7, "31:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")