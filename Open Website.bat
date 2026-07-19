@echo off
title Vision Optics - Dev Server
cd /d "%~dp0"

rem If the server is already running on port 3000, just open the browser.
netstat -ano | findstr /r ":3000.*LISTENING" >nul
if %errorlevel%==0 (
  echo Server already running. Opening browser...
  start "" "http://localhost:3000"
  exit /b
)

echo Starting Vision Optics dev server...
start "" /min cmd /c "npm run dev"

echo Waiting for the server to come up...
:wait
timeout /t 2 /nobreak >nul
netstat -ano | findstr /r ":3000.*LISTENING" >nul
if not %errorlevel%==0 goto wait

start "" "http://localhost:3000"
echo Done! The website is open in your browser.
timeout /t 3 /nobreak >nul
