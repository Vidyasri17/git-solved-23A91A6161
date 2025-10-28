/**
 * DevOps Simulator - Unified System Monitoring Script
 * Supports production, development, and experimental AI mode
 */

const ENV = process.env.NODE_ENV || 'production';
const AI_MODE = process.env.AI_MODE === 'true'; // optional toggle

// === Configuration ===
const monitorConfig = {
  production: {
    interval: 60000,
    alertThreshold: 80,
    debugMode: false,
    verboseLogging: false
  },
  development: {
    interval: 5000,
    alertThreshold: 90,
    debugMode: true,
    verboseLogging: true
  }
};

const baseConfig = monitorConfig[ENV] || monitorConfig.production;

console.log('=================================');
console.log(`DevOps Simulator - System Monitor`);
console.log(`Environment: ${ENV}`);
console.log(`AI Mode: ${AI_MODE ? 'ENABLED' : 'DISABLED'}`);
console.log(`Debug: ${baseConfig.debugMode ? 'ENABLED' : 'DISABLED'}`);
console.log('=================================');

// === Basic Monitoring Function ===
function checkSystemHealth() {
  const timestamp = new Date().toISOString();

  if (baseConfig.debugMode) {
    console.log(`\n[${timestamp}] === DETAILED HEALTH CHECK ===`);
  } else {
    console.log(`[${timestamp}] Checking system health...`);
  }

  // Randomly simulate metrics
  const cpu = Math.random() * 100;
  const mem = Math.random() * 100;
  const disk = Math.random() * 100;

  console.log(`✓ CPU usage: ${cpu.toFixed(2)}%`);
  console.log(`✓ Memory usage: ${mem.toFixed(2)}%`);
  console.log(`✓ Disk space used: ${disk.toFixed(2)}%`);

  if (baseConfig.debugMode) {
    console.log('✓ Hot reload: Active');
    console.log('✓ Debug port: 9229');
  }

  if (cpu > baseConfig.alertThreshold) {
    console.log('⚠️  ALERT: High CPU usage detected');
  }

  console.log('System Status:', cpu > baseConfig.alertThreshold ? 'WARNING' : 'HEALTHY');

  // Run AI-powered analysis if enabled
  if (AI_MODE) {
    runAIMonitoring(cpu, mem, disk);
  }
}

// === Optional AI Experimental Monitoring ===
function runAIMonitoring(cpu, mem, disk) {
  console.log('\n🤖 AI Engine: Predictive Analysis Running...');
  const prediction = {
    cpu: (cpu + Math.random() * 10).toFixed(2),
    memory: (mem + Math.random() * 10).toFixed(2),
    confidence: (Math.random() * 30 + 70).toFixed(2)
  };

  console.log(`📊 Predicted CPU: ${prediction.cpu}% (confidence: ${prediction.confidence}%)`);
  console.log(`📊 Predicted Memory: ${prediction.memory}% (confidence: ${prediction.confidence}%)`);

  if (prediction.cpu > baseConfig.alertThreshold) {
    console.log('🚨 Predictive Alert: High CPU expected soon - Auto-scaling simulated');
  }
}

console.log(`Monitoring every ${baseConfig.interval}ms`);
setInterval(checkSystemHealth, baseConfig.interval);
checkSystemHealth();
