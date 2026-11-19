Add-Type -AssemblyName System.Drawing

$srcPath = "c:\ddrive\HunchMind Intelligence\logo\logos.png"
$bmp = [System.Drawing.Bitmap]::FromFile($srcPath)

# 1. Favicon Squircle: X=[175, 740], Y=[920, 1485]
# Let's find exact boundary where squircle body starts on all 4 sides
$sqLeft = 0; $sqRight = 0; $sqTop = 0; $sqBot = 0

for ($y = 900; $y -lt 1000; $y++) {
    $c = $bmp.GetPixel(458, $y)
    if ($c.R -lt 50 -and $c.B -gt 60) {
        $sqTop = $y
        break
    }
}

for ($y = 1500; $y -gt 1400; $y--) {
    $c = $bmp.GetPixel(458, $y)
    if ($c.R -lt 50 -and $c.B -gt 60) {
        $sqBot = $y
        break
    }
}

$midY = [int](($sqTop + $sqBot) / 2)

for ($x = 150; $x -lt 250; $x++) {
    $c = $bmp.GetPixel($x, $midY)
    if ($c.R -lt 50 -and $c.B -gt 60) {
        $sqLeft = $x
        break
    }
}

for ($x = 760; $x -gt 680; $x--) {
    $c = $bmp.GetPixel($x, $midY)
    if ($c.R -lt 50 -and $c.B -gt 60) {
        $sqRight = $x
        break
    }
}

Write-Host "Exact Squircle: X=[$sqLeft, $sqRight] W=$($sqRight - $sqLeft + 1), Y=[$sqTop, $sqBot] H=$($sqBot - $sqTop + 1)"

# Crop squircle
$sqW = $sqRight - $sqLeft + 1
$sqH = $sqBot - $sqTop + 1
$rect = New-Object System.Drawing.Rectangle($sqLeft, $sqTop, $sqW, $sqH)
$sqCrop = $bmp.Clone($rect, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)

# Make outside corners of the squircle transparent!
# The background is off-white (R > 240, G > 240, B > 235)
for ($y = 0; $y -lt $sqH; $y++) {
    for ($x = 0; $x -lt $sqW; $x++) {
        $c = $sqCrop.GetPixel($x, $y)
        if ($c.R -gt 230 -and $c.G -gt 230 -and $c.B -gt 220) {
            $sqCrop.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(0, 0, 0, 0))
        }
    }
}

$sqCrop.Save("client/public/assets/debug-favicon-squircle.png", [System.Drawing.Imaging.ImageFormat]::Png)
Write-Host "Saved debug-favicon-squircle.png ($sqW x $sqH)"

# 2. Navbar Logo: X: 1650..2460, Y: 235..545
$navLeft = 1655; $navRight = 2455; $navTop = 237; $navBot = 538
# Let's crop Navbar Logo with transparent background!
$nW = $navRight - $navLeft + 1
$nH = $navBot - $navTop + 1
$nRect = New-Object System.Drawing.Rectangle($navLeft, $navTop, $nW, $nH)
$navCrop = $bmp.Clone($nRect, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)

for ($y = 0; $y -lt $nH; $y++) {
    for ($x = 0; $x -lt $nW; $x++) {
        $c = $navCrop.GetPixel($x, $y)
        # Any near-white pixel becomes transparent
        if ($c.R -gt 235 -and $c.G -gt 235 -and $c.B -gt 225) {
            $navCrop.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(0, 0, 0, 0))
        }
    }
}

$navCrop.Save("client/public/assets/debug-navbar-logo.png", [System.Drawing.Imaging.ImageFormat]::Png)
Write-Host "Saved debug-navbar-logo.png ($nW x $nH)"

$sqCrop.Dispose()
$navCrop.Dispose()
$bmp.Dispose()
