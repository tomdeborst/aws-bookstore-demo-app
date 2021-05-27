from pathlib import Path
import sys
string1 = 'Thomas de Borst'
# opening a text file
file1 = open("/src/App.tsx", "r")
# read file content
readfile = file1.read()
# checking condition for string found or not
if string1 in readfile:
    print(1)
else:
    print(0)
# closing a file
file1.close()
