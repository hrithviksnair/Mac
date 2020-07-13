#!/usr/bin/python3
#Hrithvik testing Python's CGI for web development

import os, sys, cgi, cgitb

form = cgi.FieldStorage()
print("Content-Type: text/html\n\n")
print("")
print("<html>")
print("<head>")
print("<title>Lets test a simple CGI</title>")
print("</head>")
i = "hello world"
print("<body>")
print("<h1>Test "+i+" </h1>")
print("</body>")
print("</html>")