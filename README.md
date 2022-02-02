### An exploration in using Expo as a peer to Redwood

An experiment in moving expo web to run inside the redwood app as though it were a natural component in the app.

Largely I think this isn't a super solid solution, it would tie expo web closer to the API in comparison to the ios/native aspects expo. So, I'm personally opting to fully separate out the expo repo and have a full DNS separation between what expo ships and the GraphQL API from Redwood.
