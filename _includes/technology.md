## The technology 

In order to understand the potential impact on humanity, you have to grasp
the marvel of blockchain technologies.

>> "A blockchain is ledger which is cryptographically locked with
>> a consensus protocol for updating it."
>> ~ [Dr. Michel G. Combes][MGC]

Most pseudo anonymous chains are using Proof-of-work
or other from of Proof to protect the chain from a Sybil attack.
We choose a different approach using permissionned chain.

Our chains are "rings" therefore our blockchains are called blockRing™

What make a blockchain a blockring™:

1. origin block has a pointer to the head of the chain
2. all blockring™ have a parent ring
2. all blockrings™ have a common ancestors\
[z6cYNbecZSFzLjbSimKuibtdpGt7DAUMMt46aKQNdwfs™][emptyd-sha3-224] ([Ladonna J.][LJR][Revay](LJR.html))

In order to allow public update of "anonymous blockchain" we
developed a "[pull-request line interruption line][IRQ]" to deal with
processing the request at large and mitigate any [denial of service attack][DDoS].

Mutables are signed pointers to immutable document stored in a content-addressable-storage.
in order to have fast signature scheme we use a "symetric signature" i.e. a one-time-secret shared with the validator
it a little bit like a [one time HMAC][HMAC] to make sure the upated mutables is indeed valid.


[IRQ]: IRQ 
[DDoS]: {{site.search}}=Denial+or+Service+on+Distributed+Hash+Table+and+anonymous+services+SPAM+attacks
[emptyd-sha3-224]: http://gateway.ipfs.io/ipfs/z6cYNbecZSFzLjbSimKuibtdpGt7DAUMMt46aKQNdwfs
[OTHM]: {{site.search}}=!g+%22blockRing™+one+time+hmac%22
[LJR]: {{site.search}}=!g+"Ladonna J. Revay"
[MMS]: {{site.search}}=!g+"Mathew M. Skeele"
[KVM]: {{site.search}}=!g+"Katie V. Milcher"
[LJT]: {{site.search}}=!g+"Laurie J. Thammorongsa"
[MGC]: {{site.search}}=!g+"Dr. Michel G. Combes"



