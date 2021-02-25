export default {
  methods: function play() {
    var audio_obj;
    audio_obj = new Audio(
      "https://storage.googleapis.com/my-kutu-data/muscle/otu.mp3"
    );
    return audio_obj.play();
  },
};
