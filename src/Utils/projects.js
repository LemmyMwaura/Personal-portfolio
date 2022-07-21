function* idGenerator() {
  let id = 1;
  
  while (true) {
    yield id++;
  }
}

const generate = idGenerator();

const projects = [
  {
    id: generate.next().value,
    name: 'Sudoku Solver Visualiser',
    image: '../Assets/Images/Sudoku.png',
    description: 'Sudoku solver implemeneted using a Backtracking algorithm',
    status: 'active',
    liveLink: 'https://sudoku-solver-bylemmymwaura.netlify.app/',
  },
  {
    id: generate.next().value,
    name: 'Netflix Clone',
    image: '../Assets/Images/NetflixClone.png',
    description: 'My recreation of Netflix - Build to handle high volume of requests',
    status: 'active',
    liveLink: 'https://sudoku-solver-bylemmymwaura.netlify.app/',
  },
  {
    id: generate.next().value,
    name: 'Sudoku Solver Visualiser',
    image: '../Assets/Images/Sudoku.png',
    description: 'Sudoku solver implemeneted using a Backtracking algorithm',
    status: 'active',
    liveLink: 'https://sudoku-solver-bylemmymwaura.netlify.app/',
  },
  {
    id: generate.next().value,
    name: 'Netflix Clone',
    image: '../Assets/Images/NetflixClone.png',
    description: 'My recreation of Netflix - Build to handle high volume of requests',
    status: 'active',
    liveLink: 'https://sudoku-solver-bylemmymwaura.netlify.app/',
  }
]

export default projects;
