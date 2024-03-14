const birds = [ "Parrots", "Falcons", "Eagles", "Emus", "Caracaras", "Egrets" ];

// Add your code here
birds.splice([birds.indexOf("Eagles")],1);

const eBirds = []
for (let i = 0; i < birds.length; i++) {
    if (birds[i].startsWith('E')) {
        eBirds.push(birds[i]);
    }
}
console.log(eBirds);
// Don't edit the code below here!