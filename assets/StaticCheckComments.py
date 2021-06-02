from pathlib import Path
import os,glob, sys

string1 = 'Thomas de Borst 1004302'
boolean = 0
folder_path = 'src/'
for filename in glob.glob(os.path.join(folder_path, '*.ts*')):
  with open(filename) as file1:

# read file content
    readfile = file1.read()
# checking condition for string found or not
    if string1 in readfile:
        boolean = 1
        #print(file1)
        #print("Passed! Comments found in all files")
    else:
        boolean = 0
        break
# closing a file
print(boolean)
file1.close()



