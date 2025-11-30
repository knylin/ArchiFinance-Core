# ArchiFinance Core - 建築專案財務管理系統

<div align="center">
  <h3 align="center">專為建築師事務所設計的輕量級財務管理工具</h3>
</div>

## 🌟 專案簡介

ArchiFinance Core 是一個現代化的建築專案財務管理工具。本版本支援打包為 Windows 應用程式 (.exe)，可完全離線使用。

**特色：**
*   **完全離線**：資料儲存於本地檔案系統與 LocalStorage，斷網也能操作。
*   **桌面應用程式**：提供安裝版與免安裝版 (Portable) EXE。
*   **A4 輸出**：自動排版的報價單與請款單 PDF 預覽。
*   **成本損益**：即時計算專案淨利。

---

## 🚀 快速開始

### 1. 安裝環境
請確保電腦已安裝 **[Node.js](https://nodejs.org/)** (版本 18 或以上)。

### 2. 下載與安裝依賴
在專案目錄下開啟終端機：

```bash
# 安裝所有必要套件
npm install
```

### 3. 開發模式 (Development)
同時啟動 React 網頁伺服器與 Electron 視窗：

```bash
npm run electron:dev
```

---

## 📦 打包成 EXE 執行檔

若要將程式打包成可在其他電腦執行的檔案：

```bash
npm run build:exe
```

打包完成後，請前往 `dist_electron` 資料夾，您會看到：

1.  **ArchiFinance Core Setup 1.2.0.exe**: 安裝檔 (會安裝到開始選單)。
2.  **ArchiFinance Core 1.2.0.exe**: 免安裝版 (Portable)，直接點擊即可執行，適合放在隨身碟。

---

## ⚠️ 資料備份提醒

雖然此為單機版軟體，但為了資料安全：
*   請定期使用系統右上角的「匯出 JSON」功能進行備份。
*   若要在不同電腦間轉移資料，請先「匯出」成 JSON，再到新電腦上「匯入」。

---

## 🛠️ 技術架構
*   **Frontend**: React + Vite + TypeScript
*   **Styling**: Tailwind CSS
*   **Desktop Shell**: Electron + Electron Builder
