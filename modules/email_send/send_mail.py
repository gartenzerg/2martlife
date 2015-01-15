import smtplib

fromaddr = 'mypi.balster@gmail.com'
toaddr = 's.balster@gmx.net'
msg = 'TesT'

username = 'mypi.balster@gmail.com'
password = 'raspberry_1'

server = smtplib.SMTP("smtp.gmail.com:587")
server.starttls()
server.login(username,password)
server.sendmail(fromaddr,toaddr,msg)
server.quit()
