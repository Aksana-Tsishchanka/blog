const faker = require('faker');
const fs = require('fs');

const tags = [
  'it',
  'web',
  'sport',
  'flexbox',
  'react',
  'webpack',
];

const numOfTags = 3;

let numberOfGeneratedArticles = process.argv[2];

if (!numberOfGeneratedArticles) {
  const defaultCountArticles = 10;
  numberOfGeneratedArticles = defaultCountArticles;
  console.info(`Number of articles is not specified (node %file %number). ${defaultCountArticles} articles will be generated.`);
}

function makeSlugFromTitle(title) {
  return title.toLowerCase().replace(/ /g, '-');
}

function generateArrayOfUniqNumbers(number = 3, maxValue = 5) {
  const arr = [];
  while (arr.length < number) {
    const randomNum = Math.round(Math.random() * maxValue);
    if (arr.indexOf(randomNum) === -1) {
      arr[arr.length] = randomNum;
    }
  }
  return arr;
}

function createTags(arrayOfPossibleTags, arrayOfUniqId, numberOfTag) {
  const generatedTags = new Array(numberOfTag);
  for (let i = 0; i < numberOfTag; i++) {
    generatedTags[i] = arrayOfPossibleTags[arrayOfUniqId[i]];
  }
  return generatedTags;
}

function generateContent() {
  return `<div>
    <em>${faker.Company.catchPhrase()}</em>
    <div>${faker.Lorem.paragraphs(25)}</div>
    </div>`.replace(/\s+/g, ' ');
}

function generateArticles(numberOfArticles) {
  const object = {
    articles: [],
  };
  for (let i = 0; i < numberOfArticles; i++) {
    const title = faker.Company.catchPhrase();
    const article = {
      id: i,
      title,
      slug: makeSlugFromTitle(title),
      coverImage: faker.Image.imageUrl(600, 300),
      avatar: faker.Image.avatar(),
      pubDate: faker.Date.past(1),
      modifDate: faker.Date.future(1),
      tags: createTags(tags, generateArrayOfUniqNumbers(numOfTags, tags.length - 1), numOfTags),
      author: faker.Name.findName(),
      likeCounter: faker.random.number(10, 100) * 1000,
      content: generateContent(),
    };
    object.articles.push(article);
  }
  return object;
}

const json = JSON.stringify(generateArticles(numberOfGeneratedArticles));

fs.writeFile('db.json', json, 'utf8', () => { console.log('db.json is ready!'); });

