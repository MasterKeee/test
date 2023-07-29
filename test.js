const axios = require('axios');

// 替换成你自己的 Bark 服务器地址和推送密钥
const barkServer = 'https://api.day.app';
const barkKey = '7ag7V5kpuNBFev3FcduUFm';

function sendBarkNotification(title, body) {
  const url = `${barkServer}/${barkKey}/${encodeURIComponent(title)}/${encodeURIComponent(body)}`;

  axios.get(url)
    .then(response => {
      console.log('Bark notification sent successfully');
    })
    .catch(error => {
      console.error('Failed to send Bark notification:', error);
    });
}

// 使用示例
const notificationTitle = 'Hello';
const notificationBody = 'This is a test notification';

sendBarkNotification(notificationTitle, notificationBody);