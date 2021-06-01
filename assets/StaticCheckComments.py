from pathlib import Path
import sys
import os,glob

string1 = 'Thomas de Borst 1004302'

folder_path = 'src/'
for filename in glob.glob(os.path.join(folder_path, '*.tsx')):
  with open(filename) as file1:

# read file content
    readfile = file1.read()
# checking condition for string found or not
    if string1 in readfile:
        print(1)
        print(file1)
        print("Passed! Comments found in all files")
    else:
        print(0)
        break
# closing a file
    file1.close()



