const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Aarti = require('./models/Aarti');

dotenv.config();

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected"))
.catch(err => console.log(err));

const dummyAartis = [
  {
    title: "शिव आरती",
    content: "ॐ जय शिव ओंकारा, स्वामी जय शिव ओंकारा..."
  },
  {
    title: "हनुमान आरती",
    content: "आरती कीजै हनुमान लला की, दुष्ट दलन रघुनाथ कला की..."
  },
  {
    title: "संतोषी माता आरती",
    content: "जय संतोषी माता, मैया जय संतोषी माता..."
  }
];

async function seedData() {
  await Aarti.deleteMany(); // Clear old data
  await Aarti.insertMany(dummyAartis);
  console.log("Dummy Aarti inserted ✅");
  mongoose.disconnect();
}

seedData();
