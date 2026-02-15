import fs from 'fs';
import path from 'path';

class ExtentReporter {
  constructor() {
    this.tests = [];
    this.startTime = new Date();
    this.reportDir = './extent-reports';

    if (!fs.existsSync(this.reportDir)) {
      fs.mkdirSync(this.reportDir, { recursive: true });
    }
  }

  onBegin(config, suite) {
    console.log('\n========== EXTENT REPORT: Test Suite Started ==========\n');
    this.startTime = new Date();
  }

  onTestBegin(test) {
    test.startTime = new Date();
    console.log(`[STARTING] ${test.title}`);
  }

  onTestEnd(test, result) {
    const duration = new Date() - test.startTime;
    const testData = {
      title: test.title,
      status: result.status,
      duration: duration,
      error: result.error?.message || '',
      startTime: test.startTime,
      location: test.location.file,
    };

    this.tests.push(testData);
    console.log(`[${result.status.toUpperCase()}] ${test.title} (${duration}ms)`);

    if (result.error) {
      console.log(`  Error: ${result.error.message}`);
    }
  }

  async onEnd(result) {
    const timestamp = new Date().toISOString().split('T')[0];
    const time = new Date().toTimeString().split(' ')[0].replace(/:/g, '-');
    const filename = `extent-report-${timestamp}-${time}`;

    const reportPath = path.join(this.reportDir, `${filename}.json`);
    const htmlReportPath = path.join(this.reportDir, `${filename}.html`);

    const totalTests = this.tests.length;
    const passedTests = this.tests.filter(t => t.status === 'passed').length;
    const failedTests = this.tests.filter(t => t.status === 'failed').length;
    const skippedTests = this.tests.filter(t => t.status === 'skipped').length;

    const reportData = {
      total: totalTests,
      passed: passedTests,
      failed: failedTests,
      skipped: skippedTests,
      duration: result.duration || 0,
      startTime: this.startTime.toISOString(),
      endTime: new Date().toISOString(),
      tests: this.tests,
    };

    // Write JSON report
    fs.writeFileSync(reportPath, JSON.stringify(reportData, null, 2));
    console.log(`\n✓ JSON Report: ${reportPath}`);

    // Generate HTML Report
    this.generateHTMLReport(reportData, htmlReportPath);

    console.log(`✓ HTML Report: ${htmlReportPath}`);
    console.log('\n========== EXTENT REPORT: Test Suite Ended ==========\n');
  }

  generateHTMLReport(data, filePath) {
    const passPercentage = data.total > 0 ? ((data.passed / data.total) * 100).toFixed(2) : 0;

    const testRows = data.tests.map(test => `
      <tr class="test-row ${test.status}">
        <td><strong>${test.title}</strong></td>
        <td class="status-${test.status}">${test.status.toUpperCase()}</td>
        <td>${test.duration}ms</td>
        <td class="error-cell">${test.error ? `<span class="error-text">${test.error}</span>` : '—'}</td>
      </tr>
    `).join('');

    const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Extent Report - Test Execution</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      min-height: 100vh;
      padding: 20px;
    }
    .container {
      max-width: 1200px;
      margin: 0 auto;
      background: white;
      border-radius: 10px;
      box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
      overflow: hidden;
    }
    .header {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 40px 30px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .header-title h1 { font-size: 32px; margin-bottom: 5px; }
    .header-title p { font-size: 14px; opacity: 0.9; }
    .timestamp { text-align: right; font-size: 13px; opacity: 0.9; }
    .summary-section {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 20px;
      padding: 30px;
      background: #f8f9fa;
      border-bottom: 2px solid #e9ecef;
    }
    .summary-card {
      background: white;
      padding: 20px;
      border-radius: 8px;
      border-left: 4px solid;
      text-align: center;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }
    .summary-card.total { border-left-color: #007bff; }
    .summary-card.passed { border-left-color: #28a745; }
    .summary-card.failed { border-left-color: #dc3545; }
    .summary-card.skipped { border-left-color: #ffc107; }
    .summary-card h3 {
      color: #666;
      font-size: 13px;
      text-transform: uppercase;
      margin-bottom: 10px;
      letter-spacing: 1px;
    }
    .summary-card .value { font-size: 28px; font-weight: bold; color: #333; }
    .passed .value { color: #28a745; }
    .failed .value { color: #dc3545; }
    .skipped .value { color: #ffc107; }
    .progress-section { padding: 30px; }
    .progress-title {
      font-size: 16px;
      font-weight: 600;
      margin-bottom: 15px;
      color: #333;
    }
    .progress-bar {
      width: 100%;
      height: 30px;
      background: #e9ecef;
      border-radius: 15px;
      overflow: hidden;
      display: flex;
    }
    .progress-passed {
      background: #28a745;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-weight: bold;
      font-size: 12px;
    }
    .progress-failed {
      background: #dc3545;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-weight: bold;
      font-size: 12px;
    }
    .tests-section { padding: 30px; }
    .tests-title {
      font-size: 18px;
      font-weight: 600;
      margin-bottom: 20px;
      color: #333;
    }
    table { width: 100%; border-collapse: collapse; background: white; }
    thead { background: #f8f9fa; border-bottom: 2px solid #dee2e6; }
    th {
      padding: 15px;
      text-align: left;
      font-weight: 600;
      color: #666;
      font-size: 13px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    td {
      padding: 15px;
      border-bottom: 1px solid #dee2e6;
      font-size: 14px;
    }
    tbody tr:hover { background: #f8f9fa; }
    .status-passed { color: #28a745; font-weight: 600; }
    .status-failed { color: #dc3545; font-weight: 600; }
    .status-skipped { color: #ffc107; font-weight: 600; }
    .error-cell { max-width: 400px; }
    .error-text {
      color: #dc3545;
      font-size: 12px;
      word-break: break-word;
    }
    .footer {
      background: #f8f9fa;
      padding: 20px 30px;
      border-top: 2px solid #dee2e6;
      text-align: center;
      color: #666;
      font-size: 13px;
    }
    .pass-percentage {
      font-size: 24px;
      font-weight: bold;
      margin: 20px 0;
      color: ${parseFloat(passPercentage) >= 80 ? '#28a745' : '#dc3545'};
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <div class="header-title">
        <h1>Extent Report</h1>
        <p>Automated Test Execution Report</p>
      </div>
      <div class="timestamp">
        <p><strong>Start Time:</strong> ${new Date(data.startTime).toLocaleString()}</p>
        <p><strong>End Time:</strong> ${new Date(data.endTime).toLocaleString()}</p>
        <p><strong>Duration:</strong> ${(data.duration / 1000).toFixed(2)}s</p>
      </div>
    </div>

    <div class="summary-section">
      <div class="summary-card total">
        <h3>Total Tests</h3>
        <div class="value">${data.total}</div>
      </div>
      <div class="summary-card passed">
        <h3>Passed</h3>
        <div class="value">${data.passed}</div>
      </div>
      <div class="summary-card failed">
        <h3>Failed</h3>
        <div class="value">${data.failed}</div>
      </div>
      <div class="summary-card skipped">
        <h3>Skipped</h3>
        <div class="value">${data.skipped}</div>
      </div>
    </div>

    <div class="progress-section">
      <div class="progress-title">Test Execution Summary</div>
      <div class="progress-bar">
        ${data.passed > 0 ? `<div class="progress-passed" style="width: ${(data.passed / data.total) * 100}%">${data.passed} Passed</div>` : ''}
        ${data.failed > 0 ? `<div class="progress-failed" style="width: ${(data.failed / data.total) * 100}%">${data.failed} Failed</div>` : ''}
      </div>
      <div class="pass-percentage">Pass Rate: ${passPercentage}%</div>
    </div>

    <div class="tests-section">
      <div class="tests-title">Test Details</div>
      <table>
        <thead>
          <tr>
            <th>Test Name</th>
            <th>Status</th>
            <th>Duration</th>
            <th>Error/Reason</th>
          </tr>
        </thead>
        <tbody>
          ${testRows}
        </tbody>
      </table>
    </div>

    <div class="footer">
      <p>Generated by Extent Report | ${new Date().toLocaleString()}</p>
    </div>
  </div>
</body>
</html>
    `;

    fs.writeFileSync(filePath, html);
  }
}

export default ExtentReporter;
