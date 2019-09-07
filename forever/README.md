=== README.md ===

The idea is to deploy a site on IPFS network
and have it repost itself, forever,
making itself sustainable by seeding itself :)

### what I have tried so far:

 "uploading" [page.htm][1] w/ the cmd:

  ipfs add --raw-leaves --cid-base=base58btc page.htm
  [zb2rhYeMc8NcyforVNrmjFYubEiPMjYsmJJ6uyViohfoLMv3Z][2]

  
<link rel=preload src=https://web.archive.org/web/20190906oe_/https://siderus.io/ipfs/zb2rhZPzCsCxTmNTv25uRLysRmQHpnBo7MyhbiwuCtKiqQqUw>

The problem encountered is either 

- a Content Security Policy (CSP) blocking the image of the page when view from "web.archive.org"
- or a cross-domain origin problem if I try to pull the data with some js..

 maybe using a wrapper could help point 1

background image : <https://gateway.ipfs.io/ipfs/zb2rhay83tXR45okME4mcZ7BFZuHJx22sBvokD7VB6HYTrGTy>

"Cross-Origin Request Blocked:
 The Same Origin Policy disallows reading the remote resource at
 <https://web.archive.org/web/20190906oe_/https://cloudflare-ipfs.com/ipfs/zb2rhZPzCsCxTmNTv25uRLysRmQHpnBo7MyhbiwuCtKiqQqUw>.
 (Reason: CORS header ‘Access-Control-Allow-Origin’ missing)."

But hey maybe that is enough to trigger a "cash refresh" !

how about a simple link preload


[1]: page.htm
[2]: https://ipfs.blockringtm.ml/ipfs/zb2rhYeMc8NcyforVNrmjFYubEiPMjYsmJJ6uyViohfoLMv3Z
[3]: https://cloudflare-ipfs.com/ipfs/zdj7Wg1ao5TTJmYe8Kb1aTGy75YW93dNUNcanQn5iSbD3ixmF
[4]: https://siderus.io/ipfs/zdj7Wg1ao5TTJmYe8Kb1aTGy75YW93dNUNcanQn5iSbD3ixmF
