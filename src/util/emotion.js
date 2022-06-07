const env = process.env;
env.PUBLIC_URL = env.PUBLIC_URL || "";

export const emotionList = [
  {
    emotionId: 1,
    emotionImg: process.env.PUBLIC_URL + `assets/emotion1.png`,
    emotionDescribe: "완전 좋음",
  },
  {
    emotionId: 2,
    emotionImg: process.env.PUBLIC_URL + `assets/emotion2.png`,
    emotionDescribe: "좋음",
  },
  {
    emotionId: 3,
    emotionImg: process.env.PUBLIC_URL + `assets/emotion3.png`,
    emotionDescribe: "그럭저럭",
  },
  {
    emotionId: 4,
    emotionImg: process.env.PUBLIC_URL + `assets/emotion4.png`,
    emotionDescribe: "나쁨",
  },
  {
    emotionId: 5,
    emotionImg: process.env.PUBLIC_URL + `assets/emotion5.png`,
    emotionDescribe: "끔찍함",
  },
];
