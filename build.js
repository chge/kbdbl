var Shell = new ActiveXObject('WSCRIPT.Shell'),
	child;

// NOTE install downloaded WinZip Self-Extracting archive.
WScript.Echo('Installing MSKLC...');
child = Shell.Exec('"' + Shell.currentDirectory + '\\MSKLC.exe"');
WScript.Sleep(5000);
Shell.AppActivate(child.processID);
// NOTE Setup.
Shell.SendKeys('%{S}');
WScript.Sleep(5000);
Shell.AppActivate('Microsoft Keyboard Layout Creator 1.4');
// NOTE Next.
Shell.SendKeys('%{N}');
WScript.Sleep(2000);
// NOTE I Agree, Next.
Shell.SendKeys('%{A}');
Shell.SendKeys('%{N}');
WScript.Sleep(2000);
// NOTE Next.
Shell.SendKeys('%{N}');
WScript.Sleep(2000);
// NOTE Next.
Shell.SendKeys('%{N}');
WScript.Sleep(10000);
// NOTE Close.
Shell.SendKeys('%{C}');

// NOTE open MSKLC and build the layout.
WScript.Echo('Starting MSKLC...');
child = Shell.Exec('"%PROGRAMFILES(X86)%\\Microsoft Keyboard Layout Creator 1.4\\MSKLC.exe" "' + Shell.currentDirectory + '\\kbdouble.klc"');
WScript.Sleep(5000);
Shell.AppActivate(child.processID);
// NOTE Project → Build DLL and Setup package.
Shell.SendKeys('%{P}{B}');
WScript.Echo('Validating layout...');
WScript.Sleep(10000);
// NOTE suppress log prompt.
Shell.AppActivate('Keyboard Layout Creator');
Shell.SendKeys('%{N}');
WScript.Echo('Building installers...');
WScript.Sleep(10000);
// NOTE force overwrite or accept directory prompt.
Shell.AppActivate('Keyboard Layout Creator');
Shell.SendKeys('%{D}');
Shell.SendKeys('%{Y}');
WScript.Echo('Finishing...');
WScript.Sleep(10000);
child.Terminate();
