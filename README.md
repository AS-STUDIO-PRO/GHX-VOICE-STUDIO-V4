# GHX Voice Studio V4

**Advanced AI Voice Studio** by **GHX Studio** — Voice Cloning & Text-to-Speech in **600+ languages**.

[![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/AS-STUDIO-PRO/GHX-VOICE-STUDIO-V4/blob/main/GHX_Voice_Studio_V4.ipynb)
[![License](https://img.shields.io/badge/license-Private-red.svg)]()
[![Python](https://img.shields.io/badge/Python-3.10+-blue.svg)]()
[![Gradio](https://img.shields.io/badge/UI-Gradio-orange.svg)]()

---

## Features

| Feature | Detail |
|---------|--------|
| **Text to Speech** | 600+ languages, voice design presets |
| **Voice Cloning** | 3–10 sec reference audio, zero-shot |
| **Save Voice** | Save cloned voices and reuse in TTS |
| **Subtitles** | Optional SRT generation |
| **Output** | 320 kbps MP3 download |
| **Access control** | Paid / subscription via Google Sheet |

---

## Quick Start (Users)

1. Click **Open in Colab** above (or open `GHX_Voice_Studio_V4.ipynb`).
2. **Runtime → Change runtime type → GPU (T4)** → Save.
3. **Step 1:** Enter your **registered Gmail** → Run the cell.
4. Wait for `Access Granted`.
5. **Step 2:** Run the cell (first time ~2–3 minutes).
6. Open the public **`.gradio.live`** link and use the studio.

### Requirements

- A Gmail that the owner has added to the access list.
- Google Colab account with GPU runtime.

### Support

- **WhatsApp:** [0341-4657696](https://wa.me/923414657696)
- **Email:** gulhassankalera787@gmail.com

---

## For Owner (GHX Studio)

### Repo files

```
GHX-VOICE-STUDIO-V4/
├── GHX_Voice_Studio_V4.ipynb      # Main Colab notebook
├── GHX_Access_Control_AppsScript.gs  # Access API (reference copy)
├── GHX_Sheet_Template_README.txt  # Sheet setup notes
└── README.md
```

### Add a new customer

1. Open your **Google Sheet** (linked to Apps Script).
2. Add a new row:

| Email | Plan | Expires | Active |
|-------|------|---------|--------|
| client@gmail.com | monthly | 2026-12-31 | YES |

3. Send the client:
   - This repo’s **Open in Colab** link
   - Instruction to use the **same Gmail** in Step 1

### Disable a customer

- Set **Active** = `NO`, or set **Expires** to a past date.

### Master off switch

- Sheet cell **F1** = `OFF` → blocks everyone.

### Access API

- Web App URL is already set inside the notebook Step 1 cell.
- Secret key: `ghx_secure_key_2026` (must match Apps Script `SECRET_KEY`).

---

## Push to GitHub (first time)

```bash
# 1) Create empty repo on GitHub named: GHX-VOICE-STUDIO-V4
# 2) On your PC:

git clone https://github.com/AS-STUDIO-PRO/GHX-VOICE-STUDIO-V4.git
cd GHX-VOICE-STUDIO-V4

# Copy these files into the folder:
#   GHX_Voice_Studio_V4.ipynb
#   GHX_Access_Control_AppsScript.gs
#   GHX_Sheet_Template_README.txt
#   README.md

git add .
git commit -m "GHX Voice Studio V4 by GHX Studio"
git push -u origin main
```

Working Colab URL format:

```text
https://colab.research.google.com/github/AS-STUDIO-PRO/GHX-VOICE-STUDIO-V4/blob/main/GHX_Voice_Studio_V4.ipynb
```

---

## License & use

Private tool by **GHX Studio**.  
Only clone voices you have permission to use.  
Unauthorized redistribution is not allowed.

---

**Developed by GHX Studio** · WhatsApp [0341-4657696](https://wa.me/923414657696) · gulhassankalera787@gmail.com
