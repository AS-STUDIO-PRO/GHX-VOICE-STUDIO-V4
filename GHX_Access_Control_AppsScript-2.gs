// GHX Voice Studio V4 - Access Control
// Deploy: Deploy > New deployment > Web app
// Execute as: Me | Who has access: Anyone
//
// Sheet1 columns:
// A = Email | B = Plan | C = Expires (YYYY-MM-DD) | D = Active (YES/NO)
// F1 = OFF  (optional master switch to disable everyone)

var SECRET_KEY = 'ghx_secure_key_2026';

function doGet(e) {
  try {
    var key = '';
    var email = '';
    if (e && e.parameter) {
      key = String(e.parameter.key || '');
      email = String(e.parameter.email || '').trim().toLowerCase();
    }

    if (key !== SECRET_KEY) {
      return jsonOut({ status: 'denied', message: 'invalid key' });
    }
    if (!email) {
      return jsonOut({ status: 'denied', message: 'email required' });
    }

    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheets()[0];

    var master = String(sheet.getRange('F1').getValue() || '').trim().toUpperCase();
    if (master === 'OFF') {
      return jsonOut({ status: 'off' });
    }

    var data = sheet.getDataRange().getValues();
    var i;
    for (i = 1; i < data.length; i++) {
      var rowEmail = String(data[i][0] || '').trim().toLowerCase();
      if (rowEmail !== email) {
        continue;
      }

      var plan = String(data[i][1] || '').trim();
      var expRaw = data[i][2];
      var active = String(data[i][3] || '').trim().toUpperCase();
      var expiresStr = formatDate(expRaw);

      if (active === 'NO' || active === 'N' || active === '0' || active === 'FALSE') {
        return jsonOut({ status: 'expired', plan: plan, expires: expiresStr });
      }

      if (expRaw) {
        var expDate = parseDate(expRaw);
        if (expDate) {
          var today = new Date();
          today.setHours(0, 0, 0, 0);
          if (expDate.getTime() < today.getTime()) {
            return jsonOut({ status: 'expired', plan: plan, expires: expiresStr });
          }
        }
      }

      return jsonOut({
        status: 'ok',
        plan: plan ? plan : 'standard',
        expires: expiresStr
      });
    }

    return jsonOut({ status: 'denied' });
  } catch (err) {
    return jsonOut({ status: 'error', message: String(err) });
  }
}

function jsonOut(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

function formatDate(v) {
  if (!v && v !== 0) {
    return '';
  }
  if (Object.prototype.toString.call(v) === '[object Date]' && !isNaN(v.getTime())) {
    return Utilities.formatDate(v, Session.getScriptTimeZone(), 'yyyy-MM-dd');
  }
  return String(v).trim();
}

function parseDate(v) {
  if (!v && v !== 0) {
    return null;
  }
  if (Object.prototype.toString.call(v) === '[object Date]' && !isNaN(v.getTime())) {
    var d = new Date(v.getTime());
    d.setHours(0, 0, 0, 0);
    return d;
  }
  var s = String(v).trim();
  var parts = s.match(/^(\d{4})-(\d{2})-(\d{2})/);
  if (parts) {
    var d2 = new Date(Number(parts[1]), Number(parts[2]) - 1, Number(parts[3]));
    d2.setHours(0, 0, 0, 0);
    return d2;
  }
  var t = Date.parse(s);
  if (!isNaN(t)) {
    var d3 = new Date(t);
    d3.setHours(0, 0, 0, 0);
    return d3;
  }
  return null;
}
