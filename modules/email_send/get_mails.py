
import imaplib
import sys
import email
gmail_user = "mypi.balster@gmail.com"
gmail_pwd = "raspberry_1"    	

#function
def show_mails(conn):
    f = open("newmails.txt", "w")
    f.truncate()
    rv, data = conn.search(None, "UNREAD")
    if rv != 'OK':
       print "No new mails found!"
       return
    for num in data[0].split():
       rv, data = conn.fetch(num, '(RFC822)')
       if rv != 'OK':
         print "ERROR getting message", num
         return
       msg = email.message_from_string(data[0][1])
       f.write("Von: " + msg['From'] + "\nBetreff: " +  msg['Subject']+ "\n\n")
       print 'From:%s : %s' % (msg['From'], msg['Subject'])
    f.close()

#Start
conn = imaplib.IMAP4_SSL('imap.gmail.com')
try:
    conn.login(gmail_user, gmail_pwd)
    print 'login successful'
except:
    print "failed to log in"
rv, mailboxes = conn.list()
rv, data = conn.select("INBOX")
if rv == 'OK':
    show_mails(conn)    

conn.logout()

