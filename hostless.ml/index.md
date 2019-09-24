# %title%: %domain%

*%description%*

Indeed, the site <%origin%> is residing on the [IPFS network][1].
to make it even more resilient, there is no host serving %name%'s data.

The data is located at [/p2p/%qm%][qm] and is addressed by it's content

[%qm%][2] is the [SHA256] of the whole website's tree and is a proof of its "integrity".
We use this <span title="%qm%">hash<span> to *lock* the content of the chain, therefore if we make a reference
to the previous "[hash][prev]" in this documents, we just create a *block*chain.

You can view the site via an [IPFS gateway][3]
or by running an [IPFS node][4] for better performance.

we recommend also you run the browser extension "[IPFS companion][5]"

--&nbsp;<br>
this site is best viewed locally:<br><http://127.0.0.1:8080/p2p/%qm%>


[prev]: http://127.0.0.1:8080/p2p/%prev%
[qm]: http://127.0.0.1:8080/p2p/%qm%
[1]: {{DUCK}}=!g+IPFS+network
[2]: https://cloudflare-ipfs.com/p2p/%qm%
[3]: https://gateway.ipfs.io/ipfs/%qm%
[4]: {{DUCK}}=!g+running+your+own+IPFS+daemon
[5]: {{DUCK}}=!g+browser+extension+IPFS+companion

[SHA256]: {{DUCK}}=!g+SHA-256
