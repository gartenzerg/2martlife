#! /usr/bin/env python

import smtplib
import sys
gmail_user = "mypi.balster@gmail.com"
gmail_pwd = "raspberry_1"
FROM = 'mypi.balster@gmail.com'
TO = ["%s" % (sys.argv[1])] #must be a list
SUBJECT = "%s" % (sys.argv[2])
TEXT = "%s" % (sys.argv[3])

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
