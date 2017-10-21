function getPlayerOpts(opts) {
  const {
    aspectRatio,
    customProps = {},
    file,
    generatePrerollUrl,
    image,
    isAutoPlay,
    isMuted,
    licenseKey,
    playlist,
  } = opts;

  const hasAdvertising = !!generatePrerollUrl;

  const playerOpts = {};

  if (licenseKey) {
    playerOpts.key = licenseKey;
  }

  if (playlist) {
    playerOpts.playlist = playlist;
  } else if (file) {
    playerOpts.file = file;
  }

  if (aspectRatio && aspectRatio !== 'inherit') {
    playerOpts.aspectratio = aspectRatio;
  }

  if (hasAdvertising) {
    playerOpts.advertising = {
      client: 'googima',
      admessage: 'Ad — xxs left',
      autoplayadsmuted: true,
    };
  }

  if (typeof isAutoPlay !== 'undefined') {
    playerOpts.autostart = !!isAutoPlay;
  }

  if (typeof isMuted !== 'undefined') {
    playerOpts.mute = !!isMuted;
  }

  if (image) {
    playerOpts.image = image;
  }
  
  playerOpts.sharing = { link: "" };
  /*
  Allows for social sharing to link back to your website rather than jwplayer
  Fixes a known issue that is being worked on for an upcoming JW Player release. In the meantime, this is the workaround:

  jwplayer.defaults.sharing.link = ’’;

  You will need to add this to your cloud-hosted player setup like this:

  <script>
    jwplayer.defaults.sharing.link = '';
    jwplayer('test').setup({
      playlist: '//content.jwplatform.com/feeds/PehsHgRE.json',
    })
  </script>	
  Please see test page here for code implementation:

  http://dashtodd.com/jwplayer/test-sharing-library.html

  */
 
  return Object.assign(playerOpts, customProps);
}

export default getPlayerOpts;
