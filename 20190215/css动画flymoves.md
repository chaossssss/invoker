@-webkit-keyframes flymoves {
  0% {
    background: url(/images/chnt/mwave.png);
    background-repeat: repeat-x;
    background-size: 200% 100%;
    background-position: 200% 0;
  }
  100% {
    background: url(/images/chnt/mwave.png);
    background-repeat: repeat-x;
    background-size: 200% 100%;
    background-position: 0 0;
  }
}
@keyframes flymoves {
  0% {
    background: url(/images/chnt/mwave.png);
    background-repeat: repeat-x;
    background-size: 200% 100%;
    background-position: 200% 0;
  }
  100% {
    background: url(/images/chnt/mwave.png);
    background-repeat: repeat-x;
    background-size: 200% 100%;
    background-position: 0 0;
  }
}

.music-pbox .mwave {
  width: 6.016rem;
  height: 1.062rem;
  position: absolute;
  top: 0.141rem;
  left: 50%;
  margin-left: -3.008rem;
  background-size: 200% 100%;
  -webkit-animation: flymoves 4s linear infinite;
          animation: flymoves 4s linear infinite;
}

将一张图连续不断的滚动展示