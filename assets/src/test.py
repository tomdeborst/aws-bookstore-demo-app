string1 = 'Thomas de Borst'

# opening a text file

file1 = open("App.tsx", "r")

# read file content
readfile = file1.read()

# checking condition for string found or not
if string1 in readfile:
    print('TEST PASSED', 'Comments found in file')
else:
    print('TEST FAILED', 'Comments not found in file')

# closing a file
file1.close()
