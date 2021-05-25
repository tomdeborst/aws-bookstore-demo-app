def comment_out(infilepath, outfilepath):
  with open(infilepath) as infile, open(outfilepath, 'w') as outfile:
    for line in infile:
      if 'test' not in line:
        outfile.write(line)
      else:
        outfile.write("#" + line)
