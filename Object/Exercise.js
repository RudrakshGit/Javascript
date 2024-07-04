
const library = [
    {
       title: 'The Secrets 1',
       author: 'Rhonda Byrne',
       status: {
        own: true,
        reading: false,
        read: false,
       }
    },
    {
        title: 'The Secrets 2',
        author: 'Rhonda Byrne',
        status: {
            own: true,
            reading: false,
            read: false,
        }
     },
     {
        title: 'The Secrets 3',
        author: 'Rhonda Byrne',
        status: {
            own: true,
            reading: false,
            read: false,
        }
     },
];

library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

//console.log(library);

//destructuring title

const {title:firstBook} = library[0];

//console.log(firstBook);

//library as json string

const libraryJSON = JSON.stringify(library);

console.log(libraryJSON);