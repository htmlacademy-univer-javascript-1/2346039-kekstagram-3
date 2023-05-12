const getRandom = (min, max) =>
  Math.floor( min + Math.random() * (max + 1 - min));
getRandom(10,50);

const lengthCheck = (stringToCheck, maxLength) => stringToCheck.length <= maxLength;
lengthCheck('Эта строка состоит из 33 символов', 35);

const PhotosArray = [];
function generateArray(numberOfPhotos)
{
  for(let i = 1 ; i <= numberOfPhotos; i++)
  {
    const photo =
      {
        id: i,
        url: `photos/${i}.jpg`,
        description: `Фото №${i}`,
        likes: getRandom(15, 200),
        comments: getRandom(0, 200)
      };
    PhotosArray.push(photo);
  }
}

generateArray(25);
