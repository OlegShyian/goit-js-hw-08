import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
import { getFromLS, setToLS } from './utils/localStorage';

const LS_KEY_VIDEO_TIME = 'videoplayer-current-time';
const THROTTLE_DELAY = 1000;

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const timeFromLS = getFromLS(LS_KEY_VIDEO_TIME, 0);
const startTime = typeof timeFromLS === 'number' ? timeFromLS : 0;

player.setCurrentTime(startTime);

player.on('timeupdate', throttle(saveTimeToLS, THROTTLE_DELAY));

function saveTimeToLS({ seconds }) {
  setToLS(LS_KEY_VIDEO_TIME, seconds);
}
