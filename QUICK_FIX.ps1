# Blue Wings Aviation - Windows Dev Server Quick Fix
# Run this script to clean and restart the development server

Write-Host "🛠️  Blue Wings Aviation - Windows Dev Server Fix" -ForegroundColor Cyan
Write-Host "=================================================" -ForegroundColor Cyan
Write-Host ""

# Step 1: Clean build artifacts
Write-Host "Step 1: Cleaning build artifacts..." -ForegroundColor Yellow
Remove-Item -Recurse -Force .next -ErrorAction SilentlyContinue
Remove-Item -Recurse -Force node_modules\.cache -ErrorAction SilentlyContinue
Write-Host "✅ Build artifacts cleaned" -ForegroundColor Green
Write-Host ""

# Step 2: Reinstall dependencies
Write-Host "Step 2: Reinstalling dependencies..." -ForegroundColor Yellow
Write-Host "(This will remove D3 and topojson-client)" -ForegroundColor Gray
Remove-Item -Recurse -Force node_modules -ErrorAction SilentlyContinue
npm install
Write-Host "✅ Dependencies installed" -ForegroundColor Green
Write-Host ""

# Step 3: Start dev server
Write-Host "Step 3: Starting development server..." -ForegroundColor Yellow
Write-Host "Press Ctrl+C to stop the server" -ForegroundColor Gray
Write-Host ""
npm run dev

