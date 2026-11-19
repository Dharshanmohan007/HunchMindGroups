Add-Type -AssemblyName System.Drawing

$srcPath = "c:\ddrive\HunchMind Intelligence\logo\logos.png"
$bmp = [System.Drawing.Bitmap]::FromFile($srcPath)

$publicDir = "c:\ddrive\DharshanGithub\HunchMindGroups\client\public"
$assetsDir = "c:\ddrive\DharshanGithub\HunchMindGroups\client\public\assets"
$appDir = "c:\ddrive\DharshanGithub\HunchMindGroups\client\app"

if (!(Test-Path $assetsDir)) { New-Item -ItemType Directory -Path $assetsDir -Force }

# -------------------------------------------------------------
# 1. EXTRACT & CLEAN FAVICON SQUIRCLE (Variant 3)
# Exact Coordinates: X=[181, 735] W=555, Y=[924, 1478] H=555
# -------------------------------------------------------------
$sqLeft = 181; $sqTop = 924; $sqW = 555; $sqH = 555
$sqRect = New-Object System.Drawing.Rectangle($sqLeft, $sqTop, $sqW, $sqH)
$squircleRaw = $bmp.Clone($sqRect, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)

# Make outer background transparent (outer cream background R>230, G>230, B>220)
# We use flood/boundary transparency from the outer corners inwards
for ($y = 0; $y -lt $sqH; $y++) {
    for ($x = 0; $x -lt $sqW; $x++) {
        $c = $squircleRaw.GetPixel($x, $y)
        # Background color on the canvas has high brightness and near-white
        if ($c.R -gt 230 -and $c.G -gt 230 -and $c.B -gt 220) {
            $squircleRaw.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(0, 0, 0, 0))
        }
    }
}

# Function to resize bitmap cleanly with high quality bicubic interpolation
function Resize-Bitmap($sourceBmp, $targetW, $targetH) {
    $targetBmp = New-Object System.Drawing.Bitmap($targetW, $targetH, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
    $g = [System.Drawing.Graphics]::FromImage($targetBmp)
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $g.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
    $g.Clear([System.Drawing.Color]::Transparent)
    $g.DrawImage($sourceBmp, 0, 0, $targetW, $targetH)
    $g.Dispose()
    return $targetBmp
}

# Save various favicon sizes
$sizes = @(16, 32, 48, 96, 144, 180, 192, 512)
foreach ($sz in $sizes) {
    $resized = Resize-Bitmap $squircleRaw $sz $sz
    if ($sz -eq 16) { $resized.Save("$publicDir\favicon-16x16.png", [System.Drawing.Imaging.ImageFormat]::Png) }
    if ($sz -eq 32) { $resized.Save("$publicDir\favicon-32x32.png", [System.Drawing.Imaging.ImageFormat]::Png) }
    if ($sz -eq 48) { 
        $resized.Save("$publicDir\favicon-48x48.png", [System.Drawing.Imaging.ImageFormat]::Png)
        $resized.Save("$publicDir\icon-48x48.png", [System.Drawing.Imaging.ImageFormat]::Png)
    }
    if ($sz -eq 96) { $resized.Save("$publicDir\icon-96x96.png", [System.Drawing.Imaging.ImageFormat]::Png) }
    if ($sz -eq 144) { $resized.Save("$publicDir\icon-144x144.png", [System.Drawing.Imaging.ImageFormat]::Png) }
    if ($sz -eq 180) { 
        $resized.Save("$publicDir\apple-touch-icon.png", [System.Drawing.Imaging.ImageFormat]::Png)
        $resized.Save("$appDir\apple-icon.png", [System.Drawing.Imaging.ImageFormat]::Png)
    }
    if ($sz -eq 192) { $resized.Save("$publicDir\icon-192x192.png", [System.Drawing.Imaging.ImageFormat]::Png) }
    if ($sz -eq 512) { 
        $resized.Save("$publicDir\icon-512x512.png", [System.Drawing.Imaging.ImageFormat]::Png)
        $resized.Save("$publicDir\icon.png", [System.Drawing.Imaging.ImageFormat]::Png)
        $resized.Save("$appDir\icon.png", [System.Drawing.Imaging.ImageFormat]::Png)
        $resized.Save("$assetsDir\favicon-squircle.png", [System.Drawing.Imaging.ImageFormat]::Png)
    }
    $resized.Dispose()
}

# Also save an official .ico file using a 48x48 or multi-resolution
# System.Drawing can convert icon via Hicon
$icon48 = Resize-Bitmap $squircleRaw 48 48
$hIcon = $icon48.GetHicon()
$iconObj = [System.Drawing.Icon]::FromHandle($hIcon)
$fsPublic = [System.IO.File]::OpenWrite("$publicDir\favicon.ico")
$iconObj.Save($fsPublic)
$fsPublic.Close()

$fsApp = [System.IO.File]::OpenWrite("$appDir\favicon.ico")
$iconObj.Save($fsApp)
$fsApp.Close()

$iconObj.Dispose()
$icon48.Dispose()

Write-Host "Favicons and Meta Icons successfully created in public and app directories!"

# -------------------------------------------------------------
# 2. EXTRACT & CLEAN NAVBAR LOGO (Variant 2)
# Exact Coordinates: X=[1659, 2455] W=797, Y=[317, 538] H=222
# -------------------------------------------------------------
$navLeft = 1659; $navTop = 317; $navW = 797; $navH = 222
$navRect = New-Object System.Drawing.Rectangle($navLeft, $navTop, $navW, $navH)
$navRaw = $bmp.Clone($navRect, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)

# Clean off-white background to transparent
for ($y = 0; $y -lt $navH; $y++) {
    for ($x = 0; $x -lt $navW; $x++) {
        $c = $navRaw.GetPixel($x, $y)
        # Background is cream/white R > 235, G > 235, B > 225
        if ($c.R -gt 230 -and $c.G -gt 230 -and $c.B -gt 220) {
            $navRaw.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(0, 0, 0, 0))
        }
    }
}

$navRaw.Save("$assetsDir\hunchmind-navbar-logo.png", [System.Drawing.Imaging.ImageFormat]::Png)
Write-Host "Saved hunchmind-navbar-logo.png ($navW x $navH)"

# Extract just the brain mark from the navbar logo (X: 1659 to 1910)
$markW = 250; $markH = $navH
$markRect = New-Object System.Drawing.Rectangle(0, 0, $markW, $markH)
$brainMark = $navRaw.Clone($markRect, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$brainMark.Save("$assetsDir\hunchmind-brain-mark.png", [System.Drawing.Imaging.ImageFormat]::Png)
Write-Host "Saved hunchmind-brain-mark.png ($markW x $markH)"

# Also create a high-contrast white-text version of Navbar Logo for dark backgrounds (Footer)
$navWhite = New-Object System.Drawing.Bitmap($navW, $navH, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
for ($y = 0; $y -lt $navH; $y++) {
    for ($x = 0; $x -lt $navW; $x++) {
        $c = $navRaw.GetPixel($x, $y)
        if ($c.A -gt 20) {
            # If it's part of the text "HunchMind - INTELLIGENCE -" (x >= 240)
            if ($x -gt 240) {
                # Turn text into bright white/cyan
                $navWhite.SetPixel($x, $y, [System.Drawing.Color]::FromArgb($c.A, 255, 255, 255))
            } else {
                # Keep the vibrant blue/cyan brain circuit mark as is
                $navWhite.SetPixel($x, $y, $c)
            }
        }
    }
}
$navWhite.Save("$assetsDir\hunchmind-navbar-logo-light.png", [System.Drawing.Imaging.ImageFormat]::Png)
Write-Host "Saved hunchmind-navbar-logo-light.png"

# -------------------------------------------------------------
# 3. EXTRACT PRIMARY SITE LOGO (Variant 1)
# X: 180 .. 1440, Y: 235 .. 700 (exclude label at Y < 280)
# -------------------------------------------------------------
$pLeft = 180; $pTop = 275; $pW = 1260; $pH = 425
$pRect = New-Object System.Drawing.Rectangle($pLeft, $pTop, $pW, $pH)
$pRaw = $bmp.Clone($pRect, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)

for ($y = 0; $y -lt $pH; $y++) {
    for ($x = 0; $x -lt $pW; $x++) {
        $c = $pRaw.GetPixel($x, $y)
        if ($c.R -gt 230 -and $c.G -gt 230 -and $c.B -gt 220) {
            $pRaw.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(0, 0, 0, 0))
        }
    }
}
$pRaw.Save("$assetsDir\hunchmind-primary-logo.png", [System.Drawing.Imaging.ImageFormat]::Png)
Write-Host "Saved hunchmind-primary-logo.png"

$squircleRaw.Dispose()
$navRaw.Dispose()
$brainMark.Dispose()
$navWhite.Dispose()
$pRaw.Dispose()
$bmp.Dispose()
