import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CollectionsService {
  getCollections(){
    return [
      {
        sampleImgUrl: 'http://loremflickr.com/300/150?random=1',
        sampleName: 'Mega Cat',
        releasedDate: new Date(2016, 5, 5),
        description: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.',
        rating: 4,
        numOfReviews: 2
      },
      {
        sampleImgUrl: 'http://loremflickr.com/300/150?random=3',
        sampleName: 'Small Cat',
        releasedDate: new Date(2016, 5, 5),
        description: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.',
        rating: 4,
        numOfReviews: 2
      },
      {
        sampleImgUrl: 'http://loremflickr.com/300/150?random=4',
        sampleName: 'Small Cat',
        releasedDate: new Date(2016, 5, 5),
        description: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.',
        rating: 4,
        numOfReviews: 2
      },
      {
        sampleImgUrl: 'http://loremflickr.com/300/150?random=9',
        sampleName: 'Small Cat',
        releasedDate: new Date(2016, 5, 5),
        description: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.',
        rating: 4,
        numOfReviews: 2
      },
      {
        sampleImgUrl: 'http://loremflickr.com/300/150?random=8',
        sampleName: 'Small Cat',
        releasedDate: new Date(2016, 5, 5),
        description: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.',
        rating: 4,
        numOfReviews: 2
      },
      {
        sampleImgUrl: 'http://loremflickr.com/300/150?random=6',
        sampleName: 'Small Cat',
        releasedDate: new Date(2016, 5, 5),
        description: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.',
        rating: 4,
        numOfReviews: 2
      },
      {
        sampleImgUrl: 'http://loremflickr.com/300/150?random=2',
        sampleName: 'Small Cat',
        releasedDate: new Date(2016, 5, 5),
        description: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.',
        rating: 4,
        numOfReviews: 2
      },
    ]
  }
}
