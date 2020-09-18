import axios from "axios";

const KEY = 'AIzaSyA6iRoO2QEarl0r_aPdmOZZNab1olXtSIM';

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: '5',
    key: KEY
  }
});