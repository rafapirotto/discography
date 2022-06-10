const parsedAlbums = [
  { year: '1974', name: 'Planet Waves' },
  { year: '1975', name: 'Blood on the Tracks' },
  { year: '1975', name: 'The Basement Tapes' },
  { year: '1976', name: 'Desire' },
  { year: '1978', name: 'Street-Legal' },
  { year: '1979', name: 'Slow Train Coming' },
  { year: '1980', name: 'Saved' },
  { year: '1981', name: 'Shot of Love' },
  { year: '1970', name: 'New Morning' },
  { year: '1962', name: 'Bob Dylan' },
  { year: '1963', name: 'The Freewheelin’ Bob Dylan' },
  { year: '1964', name: 'The Times They Are a-Changin’' },
  { year: '1965', name: 'Bring It All Back Home' },
  { year: '1973', name: 'Dylan' },
  { year: '1965', name: 'Highway 61 Revisited' },
  { year: '1966', name: 'Blonde on Blonde' },
  { year: '1967', name: 'John Wesley Harding' },
  { year: '1969', name: 'Nashville Skyline' },
  { year: '1970', name: 'Self Portrait' },
  { year: '1973', name: 'Pat Garrett & Billy the Kid' },
  { year: '1983', name: 'Infidels' },
  { year: '2006', name: 'Modern Times' },
  { year: '2009', name: 'Together Through Life' },
  { year: '2009', name: 'Christmas in the Heart' },
  { year: '2012', name: 'Tempest' },
  { year: '2015', name: 'Shadows in the Night' },
  { year: '1985', name: 'Empire Burlesque' },
  { year: '1986', name: 'Knocked Out Loaded' },
  { year: '1988', name: 'Down in the Groove' },
  { year: '1989', name: 'Oh Mercy' },
  { year: '1990', name: 'Under the Red Sky' },
  { year: '1992', name: 'Good as I Been to You' },
  { year: '1993', name: 'World Gone Wrong' },
  { year: '1997', name: 'Time Out of Mind' },
  { year: '2001', name: 'Love and Theft' },
  { year: '2016', name: 'Fallen Angels' },
  { year: '1974', name: 'Before the Flood' },
  { year: '1976', name: 'Hard Rain' },
  { year: '1979', name: 'Bob Dylan at Budokan' },
  { year: '1984', name: 'Real Live' },
  { year: '2005', name: 'Live at the Gaslight 1962' },
  { year: '1989', name: 'Dylan & the Dead' },
  { year: '1993', name: 'The 30th Anniversary Concert Celebration' },
  { year: '1995', name: 'MTV Unplugged' },
  { year: '2001', name: 'Live 1961-2000: Thirty-Nine Years of Great Concert Performances' },
  { year: '2005', name: 'Live at Carnegie Hall 1963' },
  { year: '2011', name: 'In Concert - Brandeis University 1963' },
];

const albumsWithCoverArt = [
  {
    year: '1974',
    name: 'Planet Waves',
    coverArt: 'https://i.scdn.co/image/ab67616d0000b2734042ca1eaf2d769794da7930',
  },
  {
    year: '1975',
    name: 'Blood on the Tracks',
    coverArt: 'https://i.scdn.co/image/ab67616d0000b27372ca15b8637acbc7d15ff5ba',
  },
  {
    year: '1975',
    name: 'The Basement Tapes',
    coverArt: 'https://i.scdn.co/image/ab67616d0000b273f14967058439072a2d3c5f50',
  },
  {
    year: '1976',
    name: 'Desire',
    coverArt: 'https://i.scdn.co/image/ab67616d0000b2738e1a23e42f68260b7b274e09',
  },
  {
    year: '1978',
    name: 'Street-Legal',
    coverArt: 'https://i.scdn.co/image/ab67616d0000b273fb91d62490c637ac95c747cf',
  },
  {
    year: '1979',
    name: 'Slow Train Coming',
    coverArt: 'https://i.scdn.co/image/ab67616d0000b273e969b7bfe58c8fe5019310b1',
  },
  {
    year: '1980',
    name: 'Saved',
    coverArt: 'https://i.scdn.co/image/ab67616d0000b273d0789bcb434ebcc1f9727ae8',
  },
  {
    year: '1981',
    name: 'Shot of Love',
    coverArt: 'https://i.scdn.co/image/ab67616d0000b273fad6a06dba0f637726d5022b',
  },
  {
    year: '1970',
    name: 'New Morning',
    coverArt: 'https://i.scdn.co/image/ab67616d0000b273be634898c4b925ad6611ac64',
  },
  {
    year: '1962',
    name: 'Bob Dylan',
    coverArt: 'https://i.scdn.co/image/ab67616d0000b273f86dfb435345270049a75af9',
  },
  {
    year: '1963',
    name: 'The Freewheelin’ Bob Dylan',
    coverArt: 'https://i.scdn.co/image/ab67616d0000b2737d214af8499aa95ad220f573',
  },
  {
    year: '1964',
    name: 'The Times They Are a-Changin’',
    coverArt: 'https://i.scdn.co/image/ab67616d0000b2733b812eed53f0d7e134fe446e',
  },
  {
    year: '1965',
    name: 'Bring It All Back Home',
    coverArt: 'https://i.scdn.co/image/ab67616d0000b2736960c5f4eb72f0c06aa92181',
  },
  {
    year: '1973',
    name: 'Dylan',
    coverArt: 'https://i.scdn.co/image/ab67616d0000b273f86dfb435345270049a75af9',
  },
  {
    year: '1965',
    name: 'Highway 61 Revisited',
    coverArt: 'https://i.scdn.co/image/ab67616d0000b27341720ef0ae31e10d39e43ca2',
  },
  {
    year: '1966',
    name: 'Blonde on Blonde',
    coverArt: 'https://i.scdn.co/image/ab67616d0000b273c51563a479fa5a4917311197',
  },
  {
    year: '1967',
    name: 'John Wesley Harding',
    coverArt: 'https://i.scdn.co/image/ab67616d0000b27381efb7dfa40bbfa10a199e38',
  },
  {
    year: '1969',
    name: 'Nashville Skyline',
    coverArt: 'https://i.scdn.co/image/ab67616d0000b27322debe1325cc21c9bb0c0b07',
  },
  {
    year: '1970',
    name: 'Self Portrait',
    coverArt: 'https://i.scdn.co/image/ab67616d0000b27337a4208dc0fb7b1f7d6b6b56',
  },
  {
    year: '1973',
    name: 'Pat Garrett & Billy the Kid',
    coverArt: 'https://i.scdn.co/image/ab67616d0000b2736c86683d20c72e3874c11c6d',
  },
  {
    year: '1983',
    name: 'Infidels',
    coverArt: 'https://i.scdn.co/image/ab67616d0000b273e05b304c49b2afe53469b28f',
  },
  {
    year: '2006',
    name: 'Modern Times',
    coverArt: 'https://i.scdn.co/image/ab67616d0000b2736996cd6e6a1423a0c047cbcc',
  },
  {
    year: '2009',
    name: 'Together Through Life',
    coverArt: 'https://i.scdn.co/image/ab67616d0000b2739c239fa8f7d68820aff40309',
  },
  {
    year: '2009',
    name: 'Christmas in the Heart',
    coverArt: 'https://i.scdn.co/image/ab67616d0000b273cfff88f4afc7f485b123309a',
  },
  {
    year: '2012',
    name: 'Tempest',
    coverArt: 'https://i.scdn.co/image/ab67616d0000b27310e67dc9176f50e7a41748c6',
  },
  {
    year: '2015',
    name: 'Shadows in the Night',
    coverArt: 'https://i.scdn.co/image/ab67616d0000b273102f09ad3fd0578545ee4cf0',
  },
  {
    year: '1985',
    name: 'Empire Burlesque',
    coverArt: 'https://i.scdn.co/image/ab67616d0000b273643fea9543f5050ec89929d9',
  },
  {
    year: '1986',
    name: 'Knocked Out Loaded',
    coverArt: 'https://i.scdn.co/image/ab67616d0000b273cfff54d681fe3dd558e0949a',
  },
  {
    year: '1988',
    name: 'Down in the Groove',
    coverArt: 'https://i.scdn.co/image/ab67616d0000b2738f30f2289bcb57b555844a55',
  },
  {
    year: '1989',
    name: 'Oh Mercy',
    coverArt: 'https://i.scdn.co/image/ab67616d0000b2735954a6441cc1d88011841d1c',
  },
  {
    year: '1990',
    name: 'Under the Red Sky',
    coverArt: 'https://i.scdn.co/image/ab67616d0000b2736af10c3ceb263d3a0e4504cc',
  },
  {
    year: '1992',
    name: 'Good as I Been to You',
    coverArt: 'https://i.scdn.co/image/ab67616d0000b2735bc5cac089022a15ce1e845b',
  },
  {
    year: '1993',
    name: 'World Gone Wrong',
    coverArt: 'https://i.scdn.co/image/ab67616d0000b2739f4078d50693fb1fd6506a45',
  },
  {
    year: '1997',
    name: 'Time Out of Mind',
    coverArt: 'https://i.scdn.co/image/ab67616d0000b273fa4240ed863bbd8bec6e9c34',
  },
  {
    year: '2001',
    name: 'Love and Theft',
    coverArt: 'https://i.scdn.co/image/ab67616d0000b273bc66153fea3a00492f35a9f8',
  },
  {
    year: '2016',
    name: 'Fallen Angels',
    coverArt: 'https://i.scdn.co/image/ab67616d0000b27390e16023e3a2b202820c15ed',
  },
  {
    year: '1974',
    name: 'Before the Flood',
    coverArt: 'https://i.scdn.co/image/ab67616d0000b27355ecddc0466561dd83c773e4',
  },
  {
    year: '1976',
    name: 'Hard Rain',
    coverArt: 'https://i.scdn.co/image/ab67616d0000b273f875d49fa073fe8484870041',
  },
  {
    year: '1979',
    name: 'Bob Dylan at Budokan',
    coverArt: 'https://i.scdn.co/image/ab67616d0000b273fdfc5fbc19dd82b6537e16ea',
  },
  {
    year: '1984',
    name: 'Real Live',
    coverArt: 'https://i.scdn.co/image/ab67616d0000b273ab74ab75ea6f4a899a877a67',
  },
  {
    year: '2005',
    name: 'Live at the Gaslight 1962',
    coverArt:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Simple_Music.svg/600px-Simple_Music.svg.png',
  },
  {
    year: '1989',
    name: 'Dylan & the Dead',
    coverArt: 'https://i.scdn.co/image/ab67616d0000b27378835a7d6df72f22995643fd',
  },
  {
    year: '1993',
    name: 'The 30th Anniversary Concert Celebration',
    coverArt:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Simple_Music.svg/600px-Simple_Music.svg.png',
  },
  {
    year: '1995',
    name: 'MTV Unplugged',
    coverArt: 'https://i.scdn.co/image/ab67616d0000b273de2e5d954dfadb5ed5a16b64',
  },
  {
    year: '2001',
    name: 'Live 1961-2000: Thirty-Nine Years of Great Concert Performances',
    coverArt:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Simple_Music.svg/600px-Simple_Music.svg.png',
  },
  {
    year: '2005',
    name: 'Live at Carnegie Hall 1963',
    coverArt: 'https://i.scdn.co/image/ab67616d0000b27337d1a94ea2bc1d745de382d6',
  },
  {
    year: '2011',
    name: 'In Concert - Brandeis University 1963',
    coverArt: 'https://i.scdn.co/image/ab67616d0000b273435a96e463ed68ef39430f6a',
  },
];

const sortedAlbums = [
  {
    year: '1962',
    name: 'Bob Dylan',
    coverArt: 'https://i.scdn.co/image/ab67616d0000b273f86dfb435345270049a75af9',
  },
  {
    year: '1963',
    name: 'The Freewheelin’ Bob Dylan',
    coverArt: 'https://i.scdn.co/image/ab67616d0000b2737d214af8499aa95ad220f573',
  },
  {
    year: '1964',
    name: 'The Times They Are a-Changin’',
    coverArt: 'https://i.scdn.co/image/ab67616d0000b2733b812eed53f0d7e134fe446e',
  },
  {
    year: '1965',
    name: 'Bring It All Back Home',
    coverArt: 'https://i.scdn.co/image/ab67616d0000b2736960c5f4eb72f0c06aa92181',
  },
  {
    year: '1965',
    name: 'Highway 61 Revisited',
    coverArt: 'https://i.scdn.co/image/ab67616d0000b27341720ef0ae31e10d39e43ca2',
  },
  {
    year: '1966',
    name: 'Blonde on Blonde',
    coverArt: 'https://i.scdn.co/image/ab67616d0000b273c51563a479fa5a4917311197',
  },
  {
    year: '1967',
    name: 'John Wesley Harding',
    coverArt: 'https://i.scdn.co/image/ab67616d0000b27381efb7dfa40bbfa10a199e38',
  },
  {
    year: '1969',
    name: 'Nashville Skyline',
    coverArt: 'https://i.scdn.co/image/ab67616d0000b27322debe1325cc21c9bb0c0b07',
  },
  {
    year: '1970',
    name: 'New Morning',
    coverArt: 'https://i.scdn.co/image/ab67616d0000b273be634898c4b925ad6611ac64',
  },
  {
    year: '1970',
    name: 'Self Portrait',
    coverArt: 'https://i.scdn.co/image/ab67616d0000b27337a4208dc0fb7b1f7d6b6b56',
  },
  {
    year: '1973',
    name: 'Dylan',
    coverArt: 'https://i.scdn.co/image/ab67616d0000b273f86dfb435345270049a75af9',
  },
  {
    year: '1973',
    name: 'Pat Garrett & Billy the Kid',
    coverArt: 'https://i.scdn.co/image/ab67616d0000b2736c86683d20c72e3874c11c6d',
  },
  {
    year: '1974',
    name: 'Before the Flood',
    coverArt: 'https://i.scdn.co/image/ab67616d0000b27355ecddc0466561dd83c773e4',
  },
  {
    year: '1974',
    name: 'Planet Waves',
    coverArt: 'https://i.scdn.co/image/ab67616d0000b2734042ca1eaf2d769794da7930',
  },
  {
    year: '1975',
    name: 'Blood on the Tracks',
    coverArt: 'https://i.scdn.co/image/ab67616d0000b27372ca15b8637acbc7d15ff5ba',
  },
  {
    year: '1975',
    name: 'The Basement Tapes',
    coverArt: 'https://i.scdn.co/image/ab67616d0000b273f14967058439072a2d3c5f50',
  },
  {
    year: '1976',
    name: 'Desire',
    coverArt: 'https://i.scdn.co/image/ab67616d0000b2738e1a23e42f68260b7b274e09',
  },
  {
    year: '1976',
    name: 'Hard Rain',
    coverArt: 'https://i.scdn.co/image/ab67616d0000b273f875d49fa073fe8484870041',
  },
  {
    year: '1978',
    name: 'Street-Legal',
    coverArt: 'https://i.scdn.co/image/ab67616d0000b273fb91d62490c637ac95c747cf',
  },
  {
    year: '1979',
    name: 'Bob Dylan at Budokan',
    coverArt: 'https://i.scdn.co/image/ab67616d0000b273fdfc5fbc19dd82b6537e16ea',
  },
  {
    year: '1979',
    name: 'Slow Train Coming',
    coverArt: 'https://i.scdn.co/image/ab67616d0000b273e969b7bfe58c8fe5019310b1',
  },
  {
    year: '1980',
    name: 'Saved',
    coverArt: 'https://i.scdn.co/image/ab67616d0000b273d0789bcb434ebcc1f9727ae8',
  },
  {
    year: '1981',
    name: 'Shot of Love',
    coverArt: 'https://i.scdn.co/image/ab67616d0000b273fad6a06dba0f637726d5022b',
  },
  {
    year: '1983',
    name: 'Infidels',
    coverArt: 'https://i.scdn.co/image/ab67616d0000b273e05b304c49b2afe53469b28f',
  },
  {
    year: '1984',
    name: 'Real Live',
    coverArt: 'https://i.scdn.co/image/ab67616d0000b273ab74ab75ea6f4a899a877a67',
  },
  {
    year: '1985',
    name: 'Empire Burlesque',
    coverArt: 'https://i.scdn.co/image/ab67616d0000b273643fea9543f5050ec89929d9',
  },
  {
    year: '1986',
    name: 'Knocked Out Loaded',
    coverArt: 'https://i.scdn.co/image/ab67616d0000b273cfff54d681fe3dd558e0949a',
  },
  {
    year: '1988',
    name: 'Down in the Groove',
    coverArt: 'https://i.scdn.co/image/ab67616d0000b2738f30f2289bcb57b555844a55',
  },
  {
    year: '1989',
    name: 'Dylan & the Dead',
    coverArt: 'https://i.scdn.co/image/ab67616d0000b27378835a7d6df72f22995643fd',
  },
  {
    year: '1989',
    name: 'Oh Mercy',
    coverArt: 'https://i.scdn.co/image/ab67616d0000b2735954a6441cc1d88011841d1c',
  },
  {
    year: '1990',
    name: 'Under the Red Sky',
    coverArt: 'https://i.scdn.co/image/ab67616d0000b2736af10c3ceb263d3a0e4504cc',
  },
  {
    year: '1992',
    name: 'Good as I Been to You',
    coverArt: 'https://i.scdn.co/image/ab67616d0000b2735bc5cac089022a15ce1e845b',
  },
  {
    year: '1993',
    name: 'The 30th Anniversary Concert Celebration',
    coverArt:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Simple_Music.svg/600px-Simple_Music.svg.png',
  },
  {
    year: '1993',
    name: 'World Gone Wrong',
    coverArt: 'https://i.scdn.co/image/ab67616d0000b2739f4078d50693fb1fd6506a45',
  },
  {
    year: '1995',
    name: 'MTV Unplugged',
    coverArt: 'https://i.scdn.co/image/ab67616d0000b273de2e5d954dfadb5ed5a16b64',
  },
  {
    year: '1997',
    name: 'Time Out of Mind',
    coverArt: 'https://i.scdn.co/image/ab67616d0000b273fa4240ed863bbd8bec6e9c34',
  },
  {
    year: '2001',
    name: 'Live 1961-2000: Thirty-Nine Years of Great Concert Performances',
    coverArt:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Simple_Music.svg/600px-Simple_Music.svg.png',
  },
  {
    year: '2001',
    name: 'Love and Theft',
    coverArt: 'https://i.scdn.co/image/ab67616d0000b273bc66153fea3a00492f35a9f8',
  },
  {
    year: '2005',
    name: 'Live at Carnegie Hall 1963',
    coverArt: 'https://i.scdn.co/image/ab67616d0000b27337d1a94ea2bc1d745de382d6',
  },
  {
    year: '2005',
    name: 'Live at the Gaslight 1962',
    coverArt:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Simple_Music.svg/600px-Simple_Music.svg.png',
  },
  {
    year: '2006',
    name: 'Modern Times',
    coverArt: 'https://i.scdn.co/image/ab67616d0000b2736996cd6e6a1423a0c047cbcc',
  },
  {
    year: '2009',
    name: 'Christmas in the Heart',
    coverArt: 'https://i.scdn.co/image/ab67616d0000b273cfff88f4afc7f485b123309a',
  },
  {
    year: '2009',
    name: 'Together Through Life',
    coverArt: 'https://i.scdn.co/image/ab67616d0000b2739c239fa8f7d68820aff40309',
  },
  {
    year: '2011',
    name: 'In Concert - Brandeis University 1963',
    coverArt: 'https://i.scdn.co/image/ab67616d0000b273435a96e463ed68ef39430f6a',
  },
  {
    year: '2012',
    name: 'Tempest',
    coverArt: 'https://i.scdn.co/image/ab67616d0000b27310e67dc9176f50e7a41748c6',
  },
  {
    year: '2015',
    name: 'Shadows in the Night',
    coverArt: 'https://i.scdn.co/image/ab67616d0000b273102f09ad3fd0578545ee4cf0',
  },
  {
    year: '2016',
    name: 'Fallen Angels',
    coverArt: 'https://i.scdn.co/image/ab67616d0000b27390e16023e3a2b202820c15ed',
  },
];

const albumsByDecade = [
  {
    value: 1960,
    displayName: "60's",
    albums: [
      {
        year: '1962',
        name: 'Bob Dylan',
        coverArt: 'https://i.scdn.co/image/ab67616d0000b273f86dfb435345270049a75af9',
      },
      {
        year: '1963',
        name: 'The Freewheelin’ Bob Dylan',
        coverArt: 'https://i.scdn.co/image/ab67616d0000b2737d214af8499aa95ad220f573',
      },
      {
        year: '1964',
        name: 'The Times They Are a-Changin’',
        coverArt: 'https://i.scdn.co/image/ab67616d0000b2733b812eed53f0d7e134fe446e',
      },
      {
        year: '1965',
        name: 'Bring It All Back Home',
        coverArt: 'https://i.scdn.co/image/ab67616d0000b2736960c5f4eb72f0c06aa92181',
      },
      {
        year: '1965',
        name: 'Highway 61 Revisited',
        coverArt: 'https://i.scdn.co/image/ab67616d0000b27341720ef0ae31e10d39e43ca2',
      },
      {
        year: '1966',
        name: 'Blonde on Blonde',
        coverArt: 'https://i.scdn.co/image/ab67616d0000b273c51563a479fa5a4917311197',
      },
      {
        year: '1967',
        name: 'John Wesley Harding',
        coverArt: 'https://i.scdn.co/image/ab67616d0000b27381efb7dfa40bbfa10a199e38',
      },
      {
        year: '1969',
        name: 'Nashville Skyline',
        coverArt: 'https://i.scdn.co/image/ab67616d0000b27322debe1325cc21c9bb0c0b07',
      },
    ],
  },
  {
    value: 1970,
    displayName: "70's",
    albums: [
      {
        year: '1970',
        name: 'New Morning',
        coverArt: 'https://i.scdn.co/image/ab67616d0000b273be634898c4b925ad6611ac64',
      },
      {
        year: '1970',
        name: 'Self Portrait',
        coverArt: 'https://i.scdn.co/image/ab67616d0000b27337a4208dc0fb7b1f7d6b6b56',
      },
      {
        year: '1973',
        name: 'Dylan',
        coverArt: 'https://i.scdn.co/image/ab67616d0000b273f86dfb435345270049a75af9',
      },
      {
        year: '1973',
        name: 'Pat Garrett & Billy the Kid',
        coverArt: 'https://i.scdn.co/image/ab67616d0000b2736c86683d20c72e3874c11c6d',
      },
      {
        year: '1974',
        name: 'Before the Flood',
        coverArt: 'https://i.scdn.co/image/ab67616d0000b27355ecddc0466561dd83c773e4',
      },
      {
        year: '1974',
        name: 'Planet Waves',
        coverArt: 'https://i.scdn.co/image/ab67616d0000b2734042ca1eaf2d769794da7930',
      },
      {
        year: '1975',
        name: 'Blood on the Tracks',
        coverArt: 'https://i.scdn.co/image/ab67616d0000b27372ca15b8637acbc7d15ff5ba',
      },
      {
        year: '1975',
        name: 'The Basement Tapes',
        coverArt: 'https://i.scdn.co/image/ab67616d0000b273f14967058439072a2d3c5f50',
      },
      {
        year: '1976',
        name: 'Desire',
        coverArt: 'https://i.scdn.co/image/ab67616d0000b2738e1a23e42f68260b7b274e09',
      },
      {
        year: '1976',
        name: 'Hard Rain',
        coverArt: 'https://i.scdn.co/image/ab67616d0000b273f875d49fa073fe8484870041',
      },
      {
        year: '1978',
        name: 'Street-Legal',
        coverArt: 'https://i.scdn.co/image/ab67616d0000b273fb91d62490c637ac95c747cf',
      },
      {
        year: '1979',
        name: 'Bob Dylan at Budokan',
        coverArt: 'https://i.scdn.co/image/ab67616d0000b273fdfc5fbc19dd82b6537e16ea',
      },
      {
        year: '1979',
        name: 'Slow Train Coming',
        coverArt: 'https://i.scdn.co/image/ab67616d0000b273e969b7bfe58c8fe5019310b1',
      },
    ],
  },
  {
    value: 1980,
    displayName: "80's",
    albums: [
      {
        year: '1980',
        name: 'Saved',
        coverArt: 'https://i.scdn.co/image/ab67616d0000b273d0789bcb434ebcc1f9727ae8',
      },
      {
        year: '1981',
        name: 'Shot of Love',
        coverArt: 'https://i.scdn.co/image/ab67616d0000b273fad6a06dba0f637726d5022b',
      },
      {
        year: '1983',
        name: 'Infidels',
        coverArt: 'https://i.scdn.co/image/ab67616d0000b273e05b304c49b2afe53469b28f',
      },
      {
        year: '1984',
        name: 'Real Live',
        coverArt: 'https://i.scdn.co/image/ab67616d0000b273ab74ab75ea6f4a899a877a67',
      },
      {
        year: '1985',
        name: 'Empire Burlesque',
        coverArt: 'https://i.scdn.co/image/ab67616d0000b273643fea9543f5050ec89929d9',
      },
      {
        year: '1986',
        name: 'Knocked Out Loaded',
        coverArt: 'https://i.scdn.co/image/ab67616d0000b273cfff54d681fe3dd558e0949a',
      },
      {
        year: '1988',
        name: 'Down in the Groove',
        coverArt: 'https://i.scdn.co/image/ab67616d0000b2738f30f2289bcb57b555844a55',
      },
      {
        year: '1989',
        name: 'Dylan & the Dead',
        coverArt: 'https://i.scdn.co/image/ab67616d0000b27378835a7d6df72f22995643fd',
      },
      {
        year: '1989',
        name: 'Oh Mercy',
        coverArt: 'https://i.scdn.co/image/ab67616d0000b2735954a6441cc1d88011841d1c',
      },
    ],
  },
  {
    value: 1990,
    displayName: "90's",
    albums: [
      {
        year: '1990',
        name: 'Under the Red Sky',
        coverArt: 'https://i.scdn.co/image/ab67616d0000b2736af10c3ceb263d3a0e4504cc',
      },
      {
        year: '1992',
        name: 'Good as I Been to You',
        coverArt: 'https://i.scdn.co/image/ab67616d0000b2735bc5cac089022a15ce1e845b',
      },
      {
        year: '1993',
        name: 'The 30th Anniversary Concert Celebration',
        coverArt:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Simple_Music.svg/600px-Simple_Music.svg.png',
      },
      {
        year: '1993',
        name: 'World Gone Wrong',
        coverArt: 'https://i.scdn.co/image/ab67616d0000b2739f4078d50693fb1fd6506a45',
      },
      {
        year: '1995',
        name: 'MTV Unplugged',
        coverArt: 'https://i.scdn.co/image/ab67616d0000b273de2e5d954dfadb5ed5a16b64',
      },
      {
        year: '1997',
        name: 'Time Out of Mind',
        coverArt: 'https://i.scdn.co/image/ab67616d0000b273fa4240ed863bbd8bec6e9c34',
      },
    ],
  },
  {
    value: 2000,
    displayName: "00's",
    albums: [
      {
        year: '2001',
        name: 'Live 1961-2000: Thirty-Nine Years of Great Concert Performances',
        coverArt:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Simple_Music.svg/600px-Simple_Music.svg.png',
      },
      {
        year: '2001',
        name: 'Love and Theft',
        coverArt: 'https://i.scdn.co/image/ab67616d0000b273bc66153fea3a00492f35a9f8',
      },
      {
        year: '2005',
        name: 'Live at Carnegie Hall 1963',
        coverArt: 'https://i.scdn.co/image/ab67616d0000b27337d1a94ea2bc1d745de382d6',
      },
      {
        year: '2005',
        name: 'Live at the Gaslight 1962',
        coverArt:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Simple_Music.svg/600px-Simple_Music.svg.png',
      },
      {
        year: '2006',
        name: 'Modern Times',
        coverArt: 'https://i.scdn.co/image/ab67616d0000b2736996cd6e6a1423a0c047cbcc',
      },
      {
        year: '2009',
        name: 'Christmas in the Heart',
        coverArt: 'https://i.scdn.co/image/ab67616d0000b273cfff88f4afc7f485b123309a',
      },
      {
        year: '2009',
        name: 'Together Through Life',
        coverArt: 'https://i.scdn.co/image/ab67616d0000b2739c239fa8f7d68820aff40309',
      },
    ],
  },
  {
    value: 2010,
    displayName: "10's",
    albums: [
      {
        year: '2011',
        name: 'In Concert - Brandeis University 1963',
        coverArt: 'https://i.scdn.co/image/ab67616d0000b273435a96e463ed68ef39430f6a',
      },
      {
        year: '2012',
        name: 'Tempest',
        coverArt: 'https://i.scdn.co/image/ab67616d0000b27310e67dc9176f50e7a41748c6',
      },
      {
        year: '2015',
        name: 'Shadows in the Night',
        coverArt: 'https://i.scdn.co/image/ab67616d0000b273102f09ad3fd0578545ee4cf0',
      },
      {
        year: '2016',
        name: 'Fallen Angels',
        coverArt: 'https://i.scdn.co/image/ab67616d0000b27390e16023e3a2b202820c15ed',
      },
    ],
  },
];

module.exports = { parsedAlbums, albumsWithCoverArt, sortedAlbums, albumsByDecade };
