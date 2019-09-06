export class Urls {
	static readonly absolutePath = new URL('https://www.forocoches.com/');
	static readonly thread = new URL('https://www.forocoches.com/foro/showthread.php?t=');
	static readonly whoPosted = new URL('https://www.forocoches.com/foro/misc.php?do=whoposted&t=');
	static readonly post = new URL('https://www.forocoches.com/foro/showthread.php?p=');
	static readonly deletePost = new URL('https://www.forocoches.com/foro/editpost.php');
	static readonly user = new URL('https://www.forocoches.com/foro/member.php?u=');
	static readonly quote = new URL('https://www.forocoches.com/foro/newreply.php?do=newreply&p=');
	static readonly newPost = new URL('https://www.forocoches.com/foro/newreply.php?do=postreply&t=');
	static readonly private = new URL('https://www.forocoches.com/foro/private.php');
	static readonly ignoreList = new URL('https://www.forocoches.com/foro/profile.php?do=ignorelist');
	static readonly contactList = new URL('https://www.forocoches.com/foro/profile.php?do=buddylist');
	static readonly profile = new URL('https://www.forocoches.com/foro/profile.php');
	static readonly usercp = new URL('https://www.forocoches.com/foro/usercp.php?');
	static readonly userSearch = new URL('https://www.forocoches.com/foro/ajax.php?do=usersearch');
	static readonly onlineUsers = new URL('https://www.forocoches.com/foro/online.php'); // Low size file, has a token
	static readonly forumDisplay = new URL('https://www.forocoches.com/foro/forumdisplay.php?f=');
	static readonly showThread = new URL('https://www.forocoches.com/foro/showthread.php?t=');
}

/*
	Token example: 1565003385-ee88c358001996150a4b4ae9d2661ac7294bcdf4

	timestamp-hmac
 */
