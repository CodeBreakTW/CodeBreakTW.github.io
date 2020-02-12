class TextPost {
  constructor(title,content,author,picture){
    this.title = title;
    this.content = content;
    this.author = author;
    this.picture = picture;
  }
  display() {
    var card = document.createElement("div");
    card.classList.add("card");
    var cardHeader = document.createElement("div");
    cardHeader.classList.add("card-header");
    cardHeader.classList.add("card-custom");
    cardHeader.innerHTML = this.title;
    var cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    var textBox = document.createElement("blockquote");
    textBox.classList.add("blockquote");
    textBox.classList.add("mb-0");
    var text = document.createElement("p");
    text.innerHTML = this.content;
    var footer = document.createElement("footer");
    footer.classList.add("blockquote-footer");
    footer.innerHTML = this.author;
    card.appendChild(cardHeader);
    card.appendChild(cardBody);
    cardBody.appendChild(textBox);
    textBox.appendChild(text);
    textBox.appendChild(footer);
    document.getElementById("posts").appendChild(card);
  }
}

class VerticalPicturePost{
  constructor(title,content,author,picture){
    this.title = title;
    this.content = content;
    this.author = author;
    this.picture = picture;
  }
  display() {
    var card = document.createElement("div");
    card.classList.add("card");
    card.classList.add("mb-3")
    var row = document.createElement("div");
    row.classList.add("row");
    row.classList.add("no-gutters");
    var col = document.createElement("div");
    col.classList.add("col-md-4");
    var image = document.createElement("img");
    image.classList.add("card-img");
    image.src=this.picture;
    var col2 = document.createElement("div");
    col2.classList.add("col-md-8");
    var cardBody =  document.createElement("div");
    cardBody.classList.add("card-body");
    var cardHeader = document.createElement("div");
    cardHeader.classList.add("card-header");
    cardHeader.classList.add("card-custom");
    cardHeader.innerHTML = this.title;
    var cardText =  document.createElement("p");
    cardText.classList.add("card-text");
    cardText.innerHTML = this.content;
    var footer = document.createElement("footer");
    footer.classList.add("blockquote-footer");
    footer.innerHTML = this.author;
    card.appendChild(cardHeader);
    card.appendChild(row);
    row.appendChild(col);
    col.appendChild(image);
    row.appendChild(col2);
    col2.appendChild(cardBody);

    cardBody.appendChild(cardText);
    cardBody.appendChild(footer);
    document.getElementById("posts").appendChild(card);
  }
}

textPost = new TextPost("Tyler's Tip", "Reduce, Reuse, Recycle!", "Tyler Wong", "");
textPost.display();
picturePost = new VerticalPicturePost("Tyler's Picture", "Here's a photo!", "Tyler Wong", "images/clean_nature.jpeg");
picturePost.display();
