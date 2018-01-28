fname = raw_input("Enter book filename: ")
fl = open(fname,'r')
data = []
for line in fl:
    data += line.split()
fl.close()
fl = open(fname+"_proc",'w')
fl.write(str(data))
fl.close()
