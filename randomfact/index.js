const fact = document.querySelector('.fact')
const button = document.querySelector('.button')

let facts = [
  'It is impossible for most people to lick their own elbow. (try it!)',
  'A crocodile cannot stick its tongue out.',
  "A shrimp's heart is in its head.",
  'It is physically impossible for pigs to look up into the sky.',
  'If you sneeze too hard, you could fracture a rib.',
  'Some lipsticks contain fish scales.',
  'Cat urine glows under a black-light.',
  "Like fingerprints, everyone's tongue print is different.",
  'Rubber bands last longer when refrigerated.',
  'There are 293 ways to make change for a dollar.',
  'A shark is the only known fish that can blink with both eyes.',
]

button.addEventListener('click', (e) => {
  let i = Math.floor(Math.random() * facts.length)
  fact.textContent = facts[i]
  button.disabled = true
  button.classList.add('disabled')
  setTimeout(() => {
    button.disabled = false
    button.classList.remove('disabled')
  }, 10000)
})
