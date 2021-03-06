const apps = [
  {
    appName: 'Hippity Hop',
    thumbnail:'https://preview.ibb.co/mDJHxF/Screen_Shot_2017_08_10_at_10_07_53_AM.png',
    full: 'https://ibb.co/dbLmra',
    github: 'https://github.com/woonandez/hippityhop',
    desc: 'Here is the landing page for Hippity hop.  Here users can enter lyrics that they remember, to find artists that they cannot.'
  },
  {
    appName: 'Hippity Hop',
    thumbnail: 'https://preview.ibb.co/nQg9Ba/Screen_Shot_2017_08_10_at_10_08_06_AM.png',
    full: 'https://ibb.co/mjOd4v',
    github: 'https://github.com/woonandez/hippityhop',
    desc: 'Once a user has lyrics that they cannot remember.  They can click the orange button to query the YouTube api for those lyrics.  They then can continue to click on the lyrics to cycle through the results; dynamically.'
  },
  {
    appName: 'Hippity Hop',
    thumbnail: 'https://preview.ibb.co/cwDpBa/Screen_Shot_2017_08_10_at_10_08_18_AM.png',
    full: 'https://ibb.co/hLHGra',
    github: 'https://github.com/woonandez/hippityhop',
    desc: 'Once the user finds the artist name.  They can then perform a google custom search on that artist.  The search will display in a modal, and allow the user to again search through the results.'
  },
  // {
  //   appName: 'Hippity Hop',
  //   thumbnail: 'https://preview.ibb.co/eAnhWa/Screen_Shot_2017_08_10_at_10_08_40_AM.png',
  //   full: 'https://ibb.co/dcB9Ba',
  //   github: 'https://github.com/woonandez/hippityhop',
  //   desc: 'Once the user is able to '
  // },
  {
    appName: 'Studdy Buddy',
    thumbnail: 'https://preview.ibb.co/j7qPuv/Screen_Shot_2017_08_11_at_11_19_35_AM.png',
    full: 'https://ibb.co/iDqeSF',
    github: 'https://github.com/team-piranha/NoteTakerExtension',
    desc: 'Here is the landing page for Studdy Buddy.  An app that helps students study! Once the user has highlited text (using the chrome extension), StuddyBuddy gives them several different options.  Using the Watson API, we allow the users to translate text, use text to speech, or directly query the Watson API for related info about that text.',
  },
  {
    appName: 'Studdy Buddy',
    thumbnail: 'https://preview.ibb.co/bUNnEv/Screen_Shot_2017_08_11_at_11_19_39_AM.png',
    full: 'https://ibb.co/j5cb7F',
    github: 'https://github.com/team-piranha/NoteTakerExtension',
    desc: 'Here is a query in action.  It will populate with 2-7 additional resources.  Watson also gives us links to an encyclopedia type of resource which we link to the user.'
  },
  {
    appName: 'It\'s Cut Time',
    thumbnail: 'https://preview.ibb.co/ghzwra/its_Cut_Time_thumb.png',
    full: 'https://ibb.co/idiNWa',
    github: 'https://github.com/oxford-commas/dingdong-its-cut-time',
    desc: 'Here is the login page for It\'s Cut Time.  An app that delivers hair cut stylists directly to your door.  Users can create accounts as either stylists or users.  This is basically the \'Uber\' for hair cut stylists.'
  },
  {
    appName: 'It\'s Cut Time',
    thumbnail: 'https://preview.ibb.co/mW4qHF/its_Cut_Time1.png',
    full: 'https://ibb.co/ckeeBa',
    github: 'https://github.com/oxford-commas/dingdong-its-cut-time',
    desc: 'Here is the landing page for It\'s Cut Time.  Users are able to see all of the local stylists which are servicing around them (represented by a pair of scissors).  They can directly message those stylists.  Once the user has decided to use their services; an official notification is sent to the stylist.  Allowing the stylist to either accept, or decline the cut.  The payment is done through the stripe API.'
  },
  {
    appName: 'Mattstagram',
    thumbnail: 'https://preview.ibb.co/kevFTw/Screen_Shot_2017_10_02_at_2_35_37_PM.png',
    full: 'https://ibb.co/mKEnab',
    github: 'https://github.com/woonandez/reduxstagram',
    desc: 'Mattstagram is a starter project that I forked from WesBos.  It is an application that mimics the popular web, and mobile app; Instagram.  Mattstagram uses redux for state management, and React for the view.  This is a fun project because it incorporated react-router v4, and react-redux.'
  },
  {
    appName: 'Mattstagram',
    thumbnail: 'https://preview.ibb.co/eii28w/Screen_Shot_2017_10_02_at_2_35_56_PM.png',
    full: 'https://ibb.co/dSH7ab',
    github: 'https://github.com/woonandez/reduxstagram',
    desc: 'Here is a great shot of an individual photo.  Once the user clicks on a photo they are brought to the photo view.  This allows the user to add comments to the photo, or even like it.  The photos, and comments are updated in real time.  The store is updated in real time using react-redux.'
  },
  {
    appName: 'Catch of the Day',
    thumbnail: 'https://preview.ibb.co/d5duow/Screen_Shot_2017_10_02_at_2_57_47_PM.png',
    full: 'https://ibb.co/mobfTw',
    github: 'https://github.com/woonandez/cotd',
    desc: 'Catch of the Day is a starter project that I forked from WesBos.  Here is a shot a the landing page.  This landing name is uniquely generated.  Once the user clicks on Visit Store it will then route the to the home page.  This application uses react-router v4 to move from this landing page to the home page.'
  },
  {
    appName: 'Catch of the Day',
    thumbnail: 'https://preview.ibb.co/cMN4ow/Screen_Shot_2017_10_02_at_2_58_01_PM.png',
    full: 'https://ibb.co/idiYgG',
    github: 'https://github.com/woonandez/cotd',
    desc: 'This is the Catch of the Day home page.  This is an ordering system.  Users can click on add to order.  Those fish will be added to the order, and ultimately have that order calculated in real time.  Data is also persisted.  The Catch of the Day application uses Firebase for data persistence.  All data can be updated, and/or modified in real time.'
  },
  {
    appName: 'Matt\'s Video Service',
    thumbnail: 'https://preview.ibb.co/hdD51G/Screen_Shot_2017_10_09_at_3_34_59_PM.png',
    full: 'https://ibb.co/mWRgab',
    github: 'https://github.com/woonandez/rrv4',
    desc: 'This was a starter repo that I cloned from the Front End Masters.  I really enjoyed working through this course.  It uses brand new technologies like Flow, Jest, and Typescript.  It uses React Router v4 for page management, and react-redux v3 for state management.  The React components, Redux action creators, and reducers are all heavily typed.'
  },
  {
    appName: 'Matt\'s Video Service',
    thumbnail: 'https://preview.ibb.co/ccXMab/Screen_Shot_2017_10_09_at_4_30_54_PM.png',
    full: 'https://ibb.co/h2cnFb',
    github: 'https://github.com/woonandez/rrv4',
    desc: 'Here is a sample shot of the popular NETFLIX show Narcos.  Once the user interacts with the search bar, the page begins to reduce what is shown.  The video that is clicked uses a regex like system to search through the search term.  The input box for the search term fires off an action, which is dispactched, and then reduced.  Once it is reduced the state is updated.  The video that is returned from the reducer is then passed into the child card like component.'
  }
];

module.exports = {
  apps
}