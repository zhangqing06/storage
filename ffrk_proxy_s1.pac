function FindProxyForURL(url, host)
{
	/* Normalize the URL for pattern matching */
	url = url.toLowerCase();
	host = host.toLowerCase();

	/* Match the host addresses*/
	
	// If the domain hostname matches FFRK site send to your proxy server
    if ( url.substring(0, 6) != 'https:' && (shExpMatch(host, "*.denagames.*") || shExpMatch(host, "*.sp.mbga.*"))) 
        return "PROXY s1.ffrkproxy.com:9999";
	
	// DEFAULT RULE: All other traffic, go direct.
    return "DIRECT";
}


