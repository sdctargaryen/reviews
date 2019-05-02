const fs = require('fs')
const reviewFile = fs.createWriteStream('./reviewFile.csv')
// const mongoose = require('mongoose');
// const db = require('./index.js');
// const Model = require('./models.js');

const place = ['place', 'home', 'house', 'apartment', 'location', 'property'];
const area = ['entrance', 'doorway', 'bedroom', 'bathroom', 'study', 'living room', 'basement', 'attic', 'closet', 'library', 'porch', 'yard', 'roof', 'kitchen', 'dining room', 'garage', 'backdoor', 'sidedoor'];
const verbs = ['loved', 'enjoyed'];
const adjectives = ['amazing', 'remarkable', 'the best', 'spectacular', 'outstanding', 'lovely', 'great', 'incomparable', 'pleasant', 'wonderful', 'incredible', 'marvelous', 'perfect'];
const users = ['Rachael', 'Susan', 'Britney', 'Whitney', 'Jessica', 'Thinh', 'Katie', 'Tiffany', 'David', 'Marie', 'Sahar', 'Angela', 'Joe', 'Derrin', 'Michael', 'Alanna', 'Brian', 'Gina', 'Faris', 'Patricia', 'Ladonna', 'Brett', 'Nicole', 'Ben', 'Abby', 'Nessrin', 'Sheree'];
const endingBlurb = ['Would recommend!', 'Very disappointed.', 'We loved our stay!', 'Charming!', 'I\'ll be back!', 'Thoroughly enjoyed every bit!', 'We cannot wait to go back!']
const imageURls = ['https://s3-us-west-1.amazonaws.com/sharebnbprofiles/Screenshot_2019-04-09+hrla28+Hack+Reactor+LA+-+Students+Slack(1).png',
                    'https://s3-us-west-1.amazonaws.com/sharebnbprofiles/Screenshot_2019-04-09+hrla28+Hack+Reactor+LA+-+Students+Slack(10).png',
                    'https://s3-us-west-1.amazonaws.com/sharebnbprofiles/Screenshot_2019-04-09+hrla28+Hack+Reactor+LA+-+Students+Slack(11).png',
                    'https://s3-us-west-1.amazonaws.com/sharebnbprofiles/Screenshot_2019-04-09+hrla28+Hack+Reactor+LA+-+Students+Slack(12).png',
                    'https://s3-us-west-1.amazonaws.com/sharebnbprofiles/Screenshot_2019-04-09+hrla28+Hack+Reactor+LA+-+Students+Slack(13).png',
                    'https://s3-us-west-1.amazonaws.com/sharebnbprofiles/Screenshot_2019-04-09+hrla28+Hack+Reactor+LA+-+Students+Slack(2).png',
                    'https://s3-us-west-1.amazonaws.com/sharebnbprofiles/Screenshot_2019-04-09+hrla28+Hack+Reactor+LA+-+Students+Slack(3).png',
                    'https://s3-us-west-1.amazonaws.com/sharebnbprofiles/Screenshot_2019-04-09+hrla28+Hack+Reactor+LA+-+Students+Slack(4).png',
                    'https://s3-us-west-1.amazonaws.com/sharebnbprofiles/Screenshot_2019-04-09+hrla28+Hack+Reactor+LA+-+Students+Slack(5).png',
                    'https://s3-us-west-1.amazonaws.com/sharebnbprofiles/Screenshot_2019-04-09+hrla28+Hack+Reactor+LA+-+Students+Slack(6).png',
                    'https://s3-us-west-1.amazonaws.com/sharebnbprofiles/Screenshot_2019-04-09+hrla28+Hack+Reactor+LA+-+Students+Slack(7).png',
                    'https://s3-us-west-1.amazonaws.com/sharebnbprofiles/Screenshot_2019-04-09+hrla28+Hack+Reactor+LA+-+Students+Slack(8).png',
                    'https://s3-us-west-1.amazonaws.com/sharebnbprofiles/Screenshot_2019-04-09+hrla28+Hack+Reactor+LA+-+Students+Slack(9).png',
                    'https://s3-us-west-1.amazonaws.com/sharebnbprofiles/Screenshot_2019-04-09+hrla28+Hack+Reactor+LA+-+Students+Slack.png',];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const years = ['2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018'];

function generateBody() {
  let chance = Math.random();
  if (chance > 0.7) {
    return `This ${place[Math.floor(Math.random() * place.length)]} is absolutely ${adjectives[Math.floor(Math.random() * adjectives.length)]}! \
You know it's a ${adjectives[Math.floor(Math.random() * adjectives.length)]} ${place[Math.floor(Math.random() * place.length)]} \
when you don't want to do anything but be in the ${place[Math.floor(Math.random() * place.length)]} or go anywhere else. \
This was the absolute ${adjectives[Math.floor(Math.random() * adjectives.length)]} ${place[Math.floor(Math.random() * place.length)]} \
for what we were wanting. Obviously the view is enough to stand on its own. However we also ${verbs[Math.floor(Math.random() * verbs.length)]} \
the little things like the ${area[Math.floor(Math.random() * area.length)]} \
and just the overall feel of the ${place[Math.floor(Math.random() * place.length)]}. ${endingBlurb[Math.floor(Math.random() * endingBlurb.length)]}`;
  } else {
    return `This ${place[Math.floor(Math.random() * place.length)]} is ${adjectives[Math.floor(Math.random() * adjectives.length)]}! \
${endingBlurb[Math.floor(Math.random() * endingBlurb.length)]}`;
  }
}

function reviewSeed(num) {
  let reviewObj = {
    id: num,
    property_id: Math.floor(Math.random() * 1e7),
    user: users[Math.floor(Math.random() * users.length)],
    date: `${months[Math.floor(Math.random() * months.length)]} ${years[Math.floor(Math.random() * years.length)]}`,
    text: generateBody(),
    userImage: `${imageURls[Math.floor(Math.random() * imageURls.length)]}`,
    accuracy: Number((Math.random() * 6).toFixed(1)),
    communication: Number((Math.random() * 6).toFixed(1)),
    cleanliness: Number((Math.random() * 6).toFixed(1)),
    location: Number((Math.random() * 6).toFixed(1)),
    checkIn: Number((Math.random() * 6).toFixed(1)),
    value: Number((Math.random() * 6).toFixed(1))
  }
  return reviewObj
}




function writeFiftyMillionTimes(callback, file) {
  let i = 5e7;
  write();
  function write() {
    let ok = true;
    do {
      if (i === 5e7) {
        let headers = callback(50000001 - i)
        headers = Object.keys(headers).toString()
        file.write(`${headers}\n`)
      }
      i--;
      if (i === 0) {
        // last time!
        //invoke cb, transform data in cb into string seperated by commas and only values no keys
        let data = callback(50000001 - i)
        data = Object.values(data).toString()
        file.write(data);
      } else {
        // See if we should continue, or wait.
        // Don't pass the callback, because we're not done yet.
        let data = callback(50000001 - i)
        data = Object.values(data).toString()
        ok = file.write(`${data}\n`);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      // had to stop early!
      // write some more once it drains
      file.once('drain', write);
    }
  }
}

writeFiftyMillionTimes(reviewSeed, reviewFile)

//come back to this for refactor due to callback