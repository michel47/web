/* a javascript to get the ip address :
   (https://cloudflare-ipfs.com/ipns/QmdDjNaCZtUUAZzbzXLQ2RvpYehGtXguXZvqd9NGQFXUMZ/getip.js)
 
 usage :
  <a class=ip href="#">ip</a>
  or <span id=ipaddr> your ip address is <a href=http://%ip%>%ip%</a></span>

  <script src="https://cadavre.exquis.ml/test/getip.js></script>
 
 */
getj('http://iglake.heliohost.org/cgi-bin/ip.pl?fmt=json');
function getj(url) {
    fetch(url)
    .then( resp => resp.json() )
    .then( function(obj) {
       console.log(obj);
       elem = document.getElementById('ipaddr');
       if (elem) { // change in tag[id=ipaddr]
           elem.innerHTML = elem.innerHTML.replace(/%ip%/g,obj['ipaddr'])
       }
       /* 
       let elems = document.getElementsByClassName('ip');
       for(let i=0; i<elems.length; i++) { // change tags[class=ip]
         if (typeof elems[i].href != 'undefined') {
           elems[i].href = 'http://'+ obj['ipaddr'] +'/';
         }
         elems[i].innerHTML = obj['ipaddr'];
       }
       */
       
    }
    ).catch(e => console.log(e));
}

