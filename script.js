
var IsMeContentActive=false;

function display_me_content()
{
	if(IsMeContentActive==true)
	{
		document.getElementById("me_block").innerHTML="<div class='content'><h2>Czym się zajmuję ?</h2><p>Projektowanie i tworzenie stron internetowych.</p><a class='scroll-button' onclick='display_me_content()'><i class='demo-icon icon-right-open'></i></a><a class='scroll-button' href='#projects'><i class='demo-icon icon-down-open'></i></a></div><div class='ball4'></div><div class='ball1'></div><div class='ball2'></div><div class='ball3'></div>";
		IsMeContentActive=false;
	}
	else
	{
		document.getElementById("me_block").innerHTML="<div class='me_content_content'><h2>Czym się zajmuję ?</h2><p>Projektowanie i tworzenie stron internetowych.</p><a class='me_content_scroll-button'><i class='demo-icon icon-right-open'></i></a><a class='me_content_scroll-button' href='#projects'><i class='demo-icon icon-down-open'></i></a></div><div class='me_content_ball4'></div><div class='me_content_ball1'></div><div class='me_content_ball2'></div><div class='me_content_ball3'></div><div class='me_content_back-button' onclick='location.reload()'><i class='demo-icon icon-left-open'></i></div>";
		IsMeContentActive=true;
	}
}
