read_file = open('text.txt', 'r')
write_file = open('res.txt', 'w')

write_file.write("var texts = [")

content = read_file.readlines()
content = [x.strip() for x in content]

for line in content:
    line = line.replace("'", "\\'")
    line = line.replace('"', '\\"')
    line = line.replace('`', "\\'")
    if len(line) > 1:
        write_file.write(line + ",")

write_file.write("];")

write_file.close()
read_file.close()
