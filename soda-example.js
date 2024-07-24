let attributeList = ["name", "sugarFree", "energy"];
const sodas = [
  {
    name: "Pepsi",
    sugarFree: false,
    energy: false,
    image: "fake.cdn/pepsi.jpg"
  },
  {
    name: "Coke",
    sugarFree: false,
    energy: false,
    image: "fake.cdn/coke.jpg"
  },
  {
    name: "NOS",
    sugarFree: false,
    energy: true,
    image: "fake.cdn/nos.jpg"
  },
  {
    name: "Diet Pepsi",
    sugarFree: true,
    energy: false,
    image: "fake.cdn/diet_pepsi.jpg"
  }
];
for (let i of sodas) {
  let name = i.name;
  let image = i.image;
  let sugarFree = i.sugarFree;
  let energy = i.energy;
  console.log(`name: ${name}, image: ${image}`);
  console.log(`name: ${name}, sugarFree: ${sugarFree}, energy: ${energy}`);
}
