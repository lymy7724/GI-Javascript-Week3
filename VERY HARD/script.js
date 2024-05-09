class Person {
  constructor(name, job, age) {
    this.name = name;
    this.job = job;
    this.age = age;
  }

  exercise() {
    console.log("Running is soooooooo fun");
  }

  fetchJob() {
    console.log(`${this.name} is a ${this.job}`);
  }
}

class Programmer extends Person {
  constructor(name, job, age, languages, busy = true) {
    super(name, job, age);
    this.languages = languages;
    this.busy = busy;
  }

  completeTask() {
    this.busy = false;
  }

  acceptNewTask() {
    this.busy = true;
  }

  offerNewTask() {
    if (this.busy) {
      console.log(`${this.name} can't accept any new tasks right now.`);
    } else {
      console.log(`${this.name} would love to take on a new responsbility.`);
    }
  }

  learnLanguage(newLanguage) {
    this.languages.push(newLanguage);
  }

  listLanguages() {
    console.log(this.languages);
  }
}

const person1 = new Person("Phil", "mentor", 50);
person1.fetchJob();

const programmer1 = new Programmer("Phil", "mentor", 50, [
  "HTML",
  "CSS",
  "Javascript",
]);

programmer1.learnLanguage("C");
programmer1.listLanguages();
