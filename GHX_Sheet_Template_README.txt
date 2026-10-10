GHX Voice Studio V4 — Paid Access Setup (Step by step)
======================================================

1) GOOGLE SHEET BANAO
   - New Google Sheet open karo
   - Sheet1 pe headers (row 1):

     A1: Email
     B1: Plan
     C1: Expires
     D1: Active

   - Example users (row 2+):

     Email                         | Plan    | Expires     | Active
     user1@gmail.com               | monthly | 2026-11-30  | YES
     user2@gmail.com               | yearly  | 2027-01-15  | YES
     expired@gmail.com             | monthly | 2026-09-01  | YES
     blocked@gmail.com             | monthly | 2026-12-31  | NO

   - Optional master switch:
     F1 cell mein likho: OFF   → poora service band
     F1 empty rakho             → service chalega

2) APPS SCRIPT LAGAO
   - Sheet mein: Extensions → Apps Script
   - Default code delete karo
   - File "GHX_Access_Control_AppsScript.gs" ka sara code paste karo
   - SECRET_KEY change kar sakte ho (default: ghx_secure_key_2026)
   - Save (Ctrl+S)

3) WEB APP DEPLOY
   - Deploy → New deployment
   - Type: Web app
   - Execute as: Me
   - Who has access: Anyone
   - Deploy
   - Authorize permissions
   - Jo URL mile (https://script.google.com/macros/s/XXXX/exec) → copy karo

4) COLAB NOTEBOOK UPDATE
   Step 1 cell mein yeh 2 lines replace karo:

     api_url = 'PASTE_YOUR_WEB_APP_URL_HERE'
     secret_key = 'ghx_secure_key_2026'   # same as script SECRET_KEY

   ADMIN_EMAILS already set:
     ['gulhassankalera787@gmail.com']

5) TEST
   - Colab GPU runtime
   - Step 1: apna Gmail daalo (jo sheet mein Active=YES ho)
   - Run → Access Granted aana chahiye
   - Step 2 run → studio link

API RESPONSE (notebook yeh expect karta hai)
--------------------------------------------
  { "status": "ok",      "plan": "monthly", "expires": "2026-11-30" }
  { "status": "expired", "plan": "monthly", "expires": "2026-09-01" }
  { "status": "off" }
  { "status": "denied" }   // email list mein nahi / wrong key
