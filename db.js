const faker = require('faker');

module.exports = () => {
  const data = { posts: [] };
  for (let i = 0; i < 10; i++) {
    data.posts.push({
      id: i,
      title: faker.lorem.text(),
      intro: faker.lorem.sentences(),
      content: faker.lorem.paragraphs(),
    });
  }
  return data;
}
