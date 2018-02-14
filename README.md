# KBDouble

[![build](https://ci.appveyor.com/api/projects/status/github/chge/kbdouble?branch=master&svg=true)](https://ci.appveyor.com/project/chge/kbdouble)

Both English and Russian keyboards in one layout for Windows.

Pros:
* Switch between English and Russian using `CapsLock` key.
* `CapsLock` LED light will indicate langauge changes.
* Type some extra symbols using `AltGr` [+ `Shift`].
* Hack and build your own layouts using [MSKLC](https://www.microsoft.com/en-us/download/details.aspx?id=22339).

Cons:
* Language will be the same across all running applications.
* System spell check won't work for Russian.

# Installation

KBDouble is a system keyboard (input method) packed into DLL, so it needs to be installed.

* Run `setup.exe` or MSI installer suitable for your OS.
* You'll see a friendly elevation warning. If you don't trust next man, you can [build KBDouble yourself](#customization).
* Add `KBDouble` keyboard (input method) for English language.
* Remove other keyboards (input methods) for English language, if needed.
* Remove other languages, if needed.

In case of any trouble try to restart your system.

# Extra symbols

### `AtltGr` + `Key`

The same as `Ctrl` + `Alt` + `Key`, or `RAlt` + `Key` for most keyboards.

`Space` is [`U+00A0 NO-BREAK SPACE`](https://en.wikipedia.org/wiki/Non-breaking_space).

`N` is [`U+2060 WORD JOINER`](https://en.wikipedia.org/wiki/Word_joiner).

### `AtltGr` + `Shift` + `Key`

`Space` is [`U+202F NARROW NO-BREAK SPACE`](https://en.wikipedia.org/wiki/Thin_space).

# Customization

The easiest way to change languages or extra symbols is to fork this repo and perform automatic build.

In order to build or make changes locally, you'll need the [Microsoft Keyboard Layout Creator](https://www.microsoft.com/en-us/download/details.aspx?id=22339). Unfortunately, this beautiful piece of software has no useful command-line interface.

It's good to know that Windows disallow using multiple layouts with the same name or even description, so you have to rename your masterpiece or uninstall KBDouble first. You'll probably notice that maximum allowed length for case-insensitive layout name is 8 characters, which should be enough for everyone.

* Rename `kbdouble.klc` and open it in MSKLC.
* Make desired changes using its modern user-friendly interface.
* Poke `Project` → `Build DLL and Setup package`.
* Read build warnings. Note that duplicated symbols are intended.
* Proceed with [Installation](#installation).

# Troubleshooting

Don't forget to save your changes, if you customize your language using Control Panel instead of Settings.

In most other cases it's enough to simply restart your system, which is very convenient.
