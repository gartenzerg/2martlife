import smtplib
gmail_user = "mypi.balster@gmail.com"
gmail_pwd = "raspberry_1"
FROM = 'mypi.balster@gmail.com'
TO = ['s.balster@gmx.net'] #must be a list
SUBJECT = "Testing sending using gmail"
TEXT = "Testing sending mail using gmail servers"

            # Prepare actual message
message = """\From: %s\nTo: %s\nSubject: %s\n\n%s
""" % (FROM, ", ".join(TO), SUBJECT, TEXT)
try:
#server = smtplib.SMTP(SERVER) 
    server = smtplib.SMTP("smtp.gmail.com", 587) #or port 465 doesn't seem to work!
    server.starttls()
    server.login(gmail_user, gmail_pwd)
    server.sendmail(FROM, TO, message)
#server.quit()
    server.close()
    print 'successfully sent the mail'
except:
    print "failed to send mail"
