cd .\java-dependencies\stack_dependencies\Dll_Files\
dir | unblock-file
$loaded = [System.Reflection.Assembly]::LoadFrom((Get-Location).Path+"\WrapperAPI.dll")
$readDeviceList = [D_PDU.detectedVCIInfo]::GetDevicelist()
[D_PDU.detectedVCIInfo]::SimStackmode(2)
[D_PDU.detectedVCIInfo]::Simulationload()
$StaticMethodCall = $args[0]
$vciInitStatus = [D_PDU.detectedVCIInfo]::$StaticMethodCall($args[1])
if ($vciInitStatus.contains("VIC Initialized")) {
$readDeviceList = [D_PDU.detectedVCIInfo]::GetDevicelist()
foreach ($item in $readDeviceList) {
if ($item.Key.contains($args[1])) {
$vciDeviceDetail = @{
"interfaceDeviceName" = $item.Value.Devicename
"interfaceVendorName" = $item.Value.Vendorname
"interfaceFirmwareVersion" = $item.Value.FirmwareVersion
#"interfacePartNumber" = [D_PDU.detectedVCIInfo]::device_Partnumber()
"interfacePartNumber" = $item.Value.FirmwareVersion
}
}
}
}
$vciDeviceDetail | ConvertTo-JSON