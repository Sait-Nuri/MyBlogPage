# MyBlogPage To-do list

#Icon Section
1. social media style

#Banner Section
1. Navbar route pages design and style.
2. Header text vertical align

#Left Menu Section
1. Menu states configuration.
2. Menu style
3. Route menu configuration

#Body Section
1. Content style (text, image, code style)
2. Async Loading
3. Scrollable content

#Comment Section
1. Commenter text in div overflow control
2. comment topic text overflow control
3. Dynamic texts (topics, names, numbers, dates) implementation
4. Comment actions (send comment, like, dislike) implementation
5. Comments async loading implementation

#General
1. Specify elements which interact with server 
2. DB design
3. Posting page design
4. Caching

---index.html----
<div ui-view="navbar"></div>
<div ui-view="iconbar"></div>
<div ui-view="sidebar"></div>
<div ui-view="content"></div>

---content.html----
<div ui-view></div>