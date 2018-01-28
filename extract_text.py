read_file = open('text.txt', 'r')
write_file = open('res.txt', 'w')

write_file.write("var texts = [")

content = read_file.readlines()
content = [x.strip() for x in content]

for line in content:
    line = line.replace('`', "\'")
    if len(line) > 1:
        words = line.split()
        for word in words:
            write_file.write('"' + word + '",')

write_file.write("];")

write_file.close()
read_file.close()
