var posts=["posts/627ce2e.html","posts/a209e79.html","posts/bafc9b08.html","posts/7662d574.html","posts/c00d292.html","posts/504a1459.html","posts/553b1827.html","posts/42b466a9.html","posts/705ab8e.html","posts/29af5f25.html","posts/f7e0747c.html","posts/bc6a14cb.html","posts/f1457c36.html","posts/5572f4d4.html","posts/7f89cced.html","posts/484efb44.html","posts/2281b539.html","posts/42cb52c5.html","posts/33c973ad.html","posts/4401ed47.html"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};