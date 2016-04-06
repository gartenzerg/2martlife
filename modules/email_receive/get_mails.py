
import imaplib
import sys
import email
gmail_user = "mypi.balster@gmail.com"
gmail_pwd = ******  	

#function
def show_mails(conn):
    f = open("newmails.txt", "w")
    f.truncate()
    rv, data = conn.search(None, "ALL")
    if rv != 'OK':
       print "No new mails found!"
       return
    for num in data[0].split():
       rv, data = conn.fetch(num, '(RFC822)')
       if rv != 'OK':
         print "ERROR getting message", num
         return
       msg = email.message_from_string(data[0][1])
       msg['Content-Type'] = "charset=utf-8"
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

