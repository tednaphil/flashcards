<!-- # FlashCards Starter Kit

## Fork This Repo

On the top right corner of this page, click the **Fork** button.

## Setup

Clone down the forked repo (from your GitHub). Since you don't want to name your project "flashcards-starter", you can use an optional argument when you run `git clone` (you replace the `[...]` with the terminal command arguments):

```bash
git clone [remote-address] [what you want to name the repo]
```

Once you have cloned the repo, change into the directory and install the library dependencies using the command:

```bash
npm install
```

To verify that it is setup correctly, run `npm test` in your terminal. You should have skipped tests in your `card` test file show up.

Running `node index.js` from the root of your project should result in the following message being displayed in your terminal: 

```bash
Your project is running...
```

*Note that you will not need to you run this file until you are running your `game` file in Iteration 3. Prior to that, you should strive to use TDD to drive your code. You should check the functionality of your application by running your tests via `npm test`.*


## Where to Add Your Code

**Create all of your feature code files in the `src` directory.** Use the `module.exports` and `require` syntax to share code across files.

## How to View Your Code in Action

Once you are working through Iteration 3, you will want to run the `node index.js` command in your terminal to run the game.

When the game is functioning appropriately, you will be prompted for each question, have the opportunity to select an answer, and will be given feedback. You will be able to play through the entire deck of cards:

![flash cards example gif](https://media.giphy.com/media/1zkb1q58eTiTH6D7wc/giphy.gif)

---

## Test Files Organization

Similar to feature code, your test code needs to be put in a specific place for it to run successfully.

**Put all of your test files in the `test` directory.** As a convention, all test filenames should end with `-test.js`. For instance: `card-test.js`.

## Running Your Tests

Run your test suite using the command:

```bash
npm test
```
-->
# <p align="center">Flashcards💥</p>

<p align="center">This is a terminal program that simulates a deck of flashcards on your command line. Users will see a multiple-choice style question, choose an answer, and then be provided with a final score after the round ends. The score is rounded up, of course!</p>

## Preview:
<div align="center">
  <img src="https://github.com/tednaphil/flashcards/assets/76406423/bc851ed7-9a95-4052-a4aa-721ab1f64a98" alt="app demo">

</div>
<p align="center">Technologies Used</p>
<div align="center">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=000&style=for-the-badge" alt="javascript badge">
  <img src="https://img.shields.io/badge/Mocha-8D6748?logo=mocha&logoColor=fff&style=for-the-badge" alt="mocha badge">
  <img src="https://img.shields.io/badge/Chai-A30701?logo=chai&logoColor=fff&style=for-the-badge" alt="chai badge">
  <img src="https://img.shields.io/badge/Visual%20Studio%20Code-007ACC?logo=visualstudiocode&logoColor=fff&style=for-the-badge" alt="vscode badge">
</div>

## Installation Instructions:
- Use the green <> Code button in the top right corner of the window to access and copy the SSH link
- Run `git clone` on your terminal command line followed by the pasted SSH link
- `cd` into the cloned directory
- Run `npm install` on your command line to install library dependencies
- Run `node index.js` on your command line to begin the game
- Use `CTRL + C` to exit the game at any time

### Context 

- Test Driven Development approach used
- Completed in the 7th week of learning JavaScript and during the 1st week of introduction to utilizing the Mocha framework for unit testing
- ~9 hours to complete test suite and functionality

