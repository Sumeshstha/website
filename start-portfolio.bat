@echo off
echo Starting Sumesh Portfolio Application...
echo.

echo Starting Backend Server...
start "Backend Server" cmd /k "cd /d test\backend && node server.js"

timeout /t 3 /nobreak > nul

echo Starting Frontend Development Server...
start "Frontend Server" cmd /k "cd /d test\frontend && npm start"

echo.
echo Both servers are starting...
echo Backend: http://localhost:5000
echo Frontend: http://localhost:3000
echo.
echo Press any key to exit...
pause > nul
