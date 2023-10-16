
async function getFactAboutCats() {
    const response = await fetch('https://catfact.ninja/fact');
    const fact = await response.json();

    console.log(fact);

    const h2 = document.getElementById('fact');

    h2.innerHTML = fact.fact;
}
