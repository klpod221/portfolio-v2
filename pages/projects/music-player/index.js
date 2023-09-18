import { useState, useEffect, useRef } from "react";
import Head from "next/head";
import WaveSurfer from "wavesurfer.js";

import FullBackground from "../../../components/FullBackground";

// React icons
import { FaPlay, FaPause, FaStepBackward, FaStepForward } from "react-icons/fa";

const musicList = [
  {
    name: "Replay Trên Con Guây",
    singer: "Phúc Du",
    url: "/music/replay-tren-con-guay.mp3",
  },
  {
    name: "Một phút",
    singer: "Andiez",
    url: "/music/mot-phut.mp3",
  }
];

const formWaveSurferOptions = (ref) => ({
  container: ref,
  waveColor: "#fff",
  progressColor: "#007fff",
  cursorColor: "#ff4500",
  responsive: true,
  height: 30,
  partialRender: true,
  nomalize: true
});

const MusicPlayer = () => {
  const [music, setMusic] = useState(musicList[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  // load music with async
  const audioRef = useRef(null);

  const waveformRef = useRef(null);
  const wavesurfer = useRef(null);

  const playPause = () => {
    setIsPlaying(!isPlaying);
    wavesurfer.current.playPause();
  };

  const nextMusic = () => {
    const currentIndex = musicList.findIndex(
      (item) => item.name === music.name
    );
    if (currentIndex < musicList.length - 1) {
      setMusic(musicList[currentIndex + 1]);
    } else {
      setMusic(musicList[0]);
    }
  };

  const prevMusic = () => {
    const currentIndex = musicList.findIndex(
      (item) => item.name === music.name
    );
    if (currentIndex > 0) {
      setMusic(musicList[currentIndex - 1]);
    } else {
      setMusic(musicList[musicList.length - 1]);
    }
  };

  const createWavesurfer = async () => {
    const options = formWaveSurferOptions(waveformRef.current);

    if (wavesurfer.current) {
      wavesurfer.current.destroy();
    }

    wavesurfer.current = WaveSurfer.create(options);

    wavesurfer.current.load(music.url);

    wavesurfer.current.on("ready", function () {
      if (isPlaying) {
        wavesurfer.current.play();
      }
    });

    wavesurfer.current.on("finish", function () {
      nextMusic();
    });
  };

  useEffect(() => {
    createWavesurfer();

    return () => wavesurfer.current && wavesurfer.current.destroy();
  }, [music]);

  return (
    <>
      <Head>
        <title>Music Player | klpod221</title>
      </Head>
      <FullBackground overlay={false}>
        <div className="container mx-auto relative h-full">
          <div className="flex gap-4 justify-center items-center w-10/12 absolute bottom-10 left-0 right-0 mx-auto">
            <audio ref={audioRef} src={music.url} />

            {/* control */}
            <div className="flex gap-4 justify-center items-center text-xl text-white">
              <button onClick={prevMusic}>
                <FaStepBackward />
              </button>

              <button onClick={playPause}>
                {isPlaying ? <FaPause /> : <FaPlay />}
              </button>

              <button onClick={nextMusic}>
                <FaStepForward />
              </button>
            </div>

            {/* waveform */}
            <div
              className="w-full border rounded-3xl overflow-hidden"
              ref={waveformRef}
            />
          </div>
        </div>
      </FullBackground>
    </>
  );
};

export default MusicPlayer;
