const testData = [
  {
      "id": 1,
      "question": "Who wrote 'Charlie and the Chocolate Factory'?",
      "answers": ["Roald Dahl", "J.K. Rowling", "Dr. Seuss"],
      "correctAnswer": "Roald Dahl"
  },
  {
      "id": 2,
      "question": "What is the name of Harry Potter's pet owl?",
      "answers": ["Hedwig", "Errol", "Crookshanks"],
      "correctAnswer": "Hedwig"
  },
  {
      "id": 3,
      "question": "In 'The Lion, the Witch and the Wardrobe', what is the name of the magical land the children discover?",
      "answers": ["Narnia", "Hogwarts", "Middle-earth"],
      "correctAnswer": "Narnia"
  },
  {
      "id": 4,
      "question": "What is the name of the author of 'Where the Wild Things Are'?",
      "answers": ["Maurice Sendak", "Shel Silverstein", "Dr. Seuss"],
      "correctAnswer": "Maurice Sendak"
  },
  {
      "id": 5,
      "question": "Who wrote 'The Cat in the Hat'?",
      "answers": ["Dr. Seuss", "Beatrix Potter", "Enid Blyton"],
      "correctAnswer": "Dr. Seuss"
  },
  {
      "id": 6,
      "question": "In 'Winnie-the-Pooh', what kind of animal is Eeyore?",
      "answers": ["Donkey", "Pig", "Kangaroo"],
      "correctAnswer": "Donkey"
  },
  {
      "id": 7,
      "question": "What is the name of the boy who never grows up in 'Peter Pan'?",
      "answers": ["Peter Pan", "Wendy", "John"],
      "correctAnswer": "Peter Pan"
  },
  {
      "id": 8,
      "question": "Who wrote 'Alice's Adventures in Wonderland'?",
      "answers": ["Lewis Carroll", "Beatrix Potter", "C.S. Lewis"],
      "correctAnswer": "Lewis Carroll"
  },
  {
      "id": 9,
      "question": "In 'Charlotte's Web', what kind of animal is Charlotte?",
      "answers": ["Spider", "Pig", "Mouse"],
      "correctAnswer": "Spider"
  },
  {
      "id": 10,
      "question": "What is the name of the train in 'The Polar Express'?",
      "answers": ["The Polar Express", "Thomas", "Hogwarts Express"],
      "correctAnswer": "The Polar Express"
  },
  {
      "id": 11,
      "question": "Who wrote 'Matilda'?",
      "answers": ["Roald Dahl", "J.K. Rowling", "Shel Silverstein"],
      "correctAnswer": "Roald Dahl"
  },
  {
      "id": 12,
      "question": "What is the name of the family in 'The Secret Garden'?",
      "answers": ["Craven", "Dursley", "Weasley"],
      "correctAnswer": "Craven"
  },
  {
      "id": 13,
      "question": "Who is the main character in 'The Little Prince'?",
      "answers": ["The Little Prince", "The Fox", "The Rose"],
      "correctAnswer": "The Little Prince"
  },
  {
      "id": 14,
      "question": "What is the name of the magical land in 'The Wizard of Oz'?",
      "answers": ["Oz", "Narnia", "Neverland"],
      "correctAnswer": "Oz"
  },
  {
      "id": 15,
      "question": "Who wrote 'Green Eggs and Ham'?",
      "answers": ["Dr. Seuss", "Beatrix Potter", "Eric Carle"],
      "correctAnswer": "Dr. Seuss"
  },
  {
      "id": 16,
      "question": "What is the name of the boy who can fly in 'Peter Pan'?",
      "answers": ["Peter Pan", "Wendy", "John"],
      "correctAnswer": "Peter Pan"
  },
  {
      "id": 17,
      "question": "Who wrote 'The Chronicles of Narnia'?",
      "answers": ["C.S. Lewis", "J.R.R. Tolkien", "Roald Dahl"],
      "correctAnswer": "C.S. Lewis"
  },
  {
      "id": 18,
      "question": "What is the name of the rabbit in 'Alice's Adventures in Wonderland'?",
      "answers": ["White Rabbit", "March Hare", "Thumper"],
      "correctAnswer": "White Rabbit"
  },
  {
      "id": 19,
      "question": "In 'The Jungle Book', who is the boy raised by wolves?",
      "answers": ["Mowgli", "Tarzan", "Simba"],
      "correctAnswer": "Mowgli"
  },
  {
      "id": 20,
      "question": "Who wrote 'The Very Hungry Caterpillar'?",
      "answers": ["Eric Carle", "Beatrix Potter", "Dr. Seuss"],
      "correctAnswer": "Eric Carle"
  },
  {
      "id": 21,
      "question": "What is the name of the boy who owns 'Where the Wild Things Are'?",
      "answers": ["Max", "Sam", "Jack"],
      "correctAnswer": "Max"
  },
  {
      "id": 22,
      "question": "In 'The Tale of Peter Rabbit', what does Peter Rabbit do despite his mother's warning?",
      "answers": ["He goes into Mr. McGregor's garden", "He goes to school", "He goes fishing"],
      "correctAnswer": "He goes into Mr. McGregor's garden"
  },
  {
      "id": 23,
      "question": "Who wrote 'The Wind in the Willows'?",
      "answers": ["Kenneth Grahame", "J.M. Barrie", "A.A. Milne"],
      "correctAnswer": "Kenneth Grahame"
  },
  {
      "id": 24,
      "question": "What is the name of the pig in 'Charlotte's Web'?",
      "answers": ["Wilbur", "Babe", "Piglet"],
      "correctAnswer": "Wilbur"
  },
  {
      "id": 25,
      "question": "In 'Alice's Adventures in Wonderland', what does the Cheshire Cat constantly do?",
      "answers": ["Disappear and reappear", "Sing", "Tell riddles"],
      "correctAnswer": "Disappear and reappear"
  },
  {
      "id": 26,
      "question": "Who wrote 'The Tale of Peter Rabbit'?",
      "answers": ["Beatrix Potter", "A.A. Milne", "C.S. Lewis"],
      "correctAnswer": "Beatrix Potter"
  },
  {
      "id": 27,
      "question": "In 'The Velveteen Rabbit', what kind of toy is the main character?",
      "answers": ["Rabbit", "Bear", "Doll"],
      "correctAnswer": "Rabbit"
  },
  {
      "id": 28,
      "question": "Who wrote 'The BFG'?",
      "answers": ["Roald Dahl", "J.K. Rowling", "Dr. Seuss"],
      "correctAnswer": "Roald Dahl"
  },
  {
      "id": 29,
      "question": "What is the name of the creature that hatches from an egg in 'Horton Hatches the Egg'?",
      "answers": ["Elephant-bird", "Grinch", "Yertle"],
      "correctAnswer": "Elephant-bird"
  },
  {
      "id": 30,
      "question": "Who wrote 'Anne of Green Gables'?",
      "answers": ["L.M. Montgomery", "Louisa May Alcott", "Laura Ingalls Wilder"],
      "correctAnswer": "L.M. Montgomery"
  },
  {
      "id": 31,
      "question": "What is the name of the boy in 'Where the Wild Things Are'?",
      "answers": ["Max", "Sam", "Jack"],
      "correctAnswer": "Max"
  },
  {
      "id": 32,
      "question": "Who wrote 'The Giving Tree'?",
      "answers": ["Shel Silverstein", "Dr. Seuss", "Roald Dahl"],
      "correctAnswer": "Shel Silverstein"
  },
  {
      "id": 33,
      "question": "In 'Charlotte's Web', what is the name of the pig who becomes friends with Wilbur?",
      "answers": ["Charlotte", "Babe", "Fern"],
      "correctAnswer": "Charlotte"
  },
  {
      "id": 34,
      "question": "What is the name of the girl who visits 'The Secret Garden'?",
      "answers": ["Mary", "Alice", "Lucy"],
      "correctAnswer": "Mary"
  },
  {
      "id": 35,
      "question": "Who wrote 'The Phantom Tollbooth'?",
      "answers": ["Norton Juster", "E.B. White", "J.R.R. Tolkien"],
      "correctAnswer": "Norton Juster"
  },
  {
      "id": 36,
      "question": "What is the name of the creature in 'Where the Wild Things Are' that Max becomes king of?",
      "answers": ["Wild Things", "Monsters", "Dragons"],
      "correctAnswer": "Wild Things"
  },
  {
      "id": 37,
      "question": "Who wrote 'Goodnight Moon'?",
      "answers": ["Margaret Wise Brown", "Beatrix Potter", "Dr. Seuss"],
      "correctAnswer": "Margaret Wise Brown"
  },
  {
      "id": 38,
      "question": "In 'The Chronicles of Narnia', what is the name of the lion who is a central figure in the series?",
      "answers": ["Aslan", "Simba", "Mufasa"],
      "correctAnswer": "Aslan"
  },
  {
      "id": 39,
      "question": "What is the name of the bear in 'Winnie-the-Pooh'?",
      "answers": ["Winnie-the-Pooh", "Eeyore", "Tigger"],
      "correctAnswer": "Winnie-the-Pooh"
  },
  {
      "id": 40,
      "question": "Who wrote 'The Tale of Despereaux'?",
      "answers": ["Kate DiCamillo", "J.K. Rowling", "Roald Dahl"],
      "correctAnswer": "Kate DiCamillo"
  }
];