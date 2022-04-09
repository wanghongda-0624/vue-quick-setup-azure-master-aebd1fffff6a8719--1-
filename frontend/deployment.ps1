$server = "mtvtix0archi01"
$name = "BMWBRILL\vi029467"
$password = "necnecnec@55555"

$destinationPath = "D:\nginx-1.19.4"

$artifactFileName = "dist.zip"
$websitePath = "D:\nginx-1.19.4\html"

$destinationFile = "D:\nginx-1.19.4\dist.zip"

Write-Host ready to deploy to: $server under folder: $destinationPath
$pass = ConvertTo-SecureString -String $password -AsPlainText -Force
$cre = New-Object pscredential($name, $pass)
$session = New-PSSession -ComputerName $server -Credential $cre

# copy artifact
Write-Host [begin] copy artifact
#Remove-Item $websitePath\* -recurse -ToSession $session -Recurse -Force
cp $artifactFileName -Destination $destinationPath -ToSession $session -Recurse -Force
Write-Host [end] copy artifact


Write-Host Expand-Archive ther archive
Invoke-Command -Session $session -Scriptblock{
    param($destinationFile,$websitePath)
    Remove-Item $websitePath\* -recurse -Force
    Expand-Archive $destinationFile -DestinationPath $websitePath -Force
} -argumentlist $destinationFile,$websitePath

Remove-PSSession $session
