let bandInfo;

// Put your code here

bandInfo = {
  name: "The Beatles",
  nationality: "english",
  genre: "rock",
  members: 4,
  formedYear: 1960,
  split: true,
  albums: [{
      name: "Please Please Me",
      released: 1960
    },
    {
      name: "Let It Be",
      released: 1970
    }
  ],
  introduction: function() {
    console.log(`${job} is a ${this.nationality} ${this.members} piece ${this.genre} band formed in ${this.formedYear}. 
    Their first album is '${this.albums[0].name}' released in ${this.albums[0].released}`)
  },
}

bandInfo.introduction()


// Don't edit the code below here

let para1 = document.createElement('p');
para1.textContent = bandInfo;
section.appendChild(para1);
