var searchYouTube = function({key, query, max = 5}, callback) {
  // TODO
  $.get('https://www.googleapis.com/youtube/v3/search',
    { key: key,
      q: query,
      part: 'snippet',
      videoEmbeddable: true,
      maxResults: max,
      type: 'video'
    })
  .done(({items}) => {
    if (callback) {
      callback(items);
    }
  });
};

window.searchYouTube = searchYouTube;
