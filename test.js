const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//connecet DB
mongoose.connect('mongodb://localhost/pcat-test-db');

//create shema
const PhotoSchema = new Schema({
  title: String,
  description: String,
});

const Photo = mongoose.model('Photo', PhotoSchema);

//create a  photo
/* Photo.create({
  title: 'Photo Title 2',
  description: 'Photo description 2 lorem ipsum',
}); */

//read a photo
/* Photo.find({})
.then(docs => {
    console.log(docs);
})
.catch(err => {
    console.error(err);
});
 */

//update photo
/* const id = '67587b58f92de642d715158d';

Photo.findByIdAndUpdate(
  id,
  {
    title: 'Photo Title 1 updated',
    description: 'Photo description 1 updated',
  },
  { new: true }
)
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.error(err);
  }); */

//delete a photo
/* const id = '67587c13cba3b6ad5867f5c8';

Photo.findByIdAndDelete(id)
  .then(deletedPhoto => {
    if (deletedPhoto) {
      console.log('Deleted Photo:', deletedPhoto);
    } else {
      console.log('Photo not found.');
    }
  })
  .catch(err => {
    console.error(err);
  }); */
