class Helper {
  const helper = new Helper();

    playPauseAndUpdate(song) = {

        player.playPause(song);

        $('#time-control playing').on('playing', function (event) {
           });

        if (player.playState !== 'playing') { return; }
        const duration = player.getDuration();
        $('#time-control .total-time').text( duration );

    }
}
