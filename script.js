function randomise_color()
{
	var font_color_id=Math.floor(Math.random()*6)+1;
	switch (font_color_id)
	{
		case 1:
		document.querySelector(':root').style.setProperty('--font', '#00ffbb');
		break;
		case 2:
		document.querySelector(':root').style.setProperty('--font', '#00aaff');
		break;
		case 3:
		document.querySelector(':root').style.setProperty('--font', 'orange');
		break;
		case 4:
		document.querySelector(':root').style.setProperty('--font', 'yellow');
		break;
		case 5:
		document.querySelector(':root').style.setProperty('--font', '#bbff00');
		break;
		case 6:
		document.querySelector(':root').style.setProperty('--font', '#ff00bb');
		break;
	}
}


var IsMeContentActive=false;

function display_me_content()
{
	if(IsMeContentActive==true)
	{
		document.getElementById("me_block").innerHTML="<div class='content'><h2>Czym się zajmuję ?</h2><p>Projektowanie i tworzenie stron internetowych.</p><a class='scroll-button' onclick='display_me_content()'><i class='demo-icon icon-right-open'></i></a><a class='scroll-button' href='#projects'><i class='demo-icon icon-down-open'></i></a></div><div class='ball4'></div><div class='ball1'></div><div class='ball2'></div><div class='ball3'></div>";
		document.getElementById("header").innerHTML="<div><a href='#' class='header-logo'>Konrad Rosiński</a></div><nav><div><a href='#projects'><i class='demo-icon icon-doc-alt'></i>Projekty</a></div><div><a href='#info'><i class='demo-icon icon-info-circled'></i>Informacje</a></div><div><a href='#contact'><i class='demo-icon icon-user'></i> Kontakt</a></div><div onclick='randomise_color()'><a><i class='demo-icon icon-brush'></i>Motyw</a></div></nav>"
		IsMeContentActive=false;
	}
	else
	{
		document.getElementById("me_block").innerHTML="<div class='me_content_content'><h2>Czym się zajmuję ?</h2><p>Projektowanie i tworzenie stron internetowych.</p><a class='me_content_scroll-button'><i class='demo-icon icon-right-open'></i></a><a class='me_content_scroll-button' href='#projects'><i class='demo-icon icon-down-open'></i></a></div><div class='me_content_ball4'></div><div class='me_content_ball1'></div><div class='me_content_ball2'></div><div class='me_content_ball3'></div><button class='me_content_back-button' onclick='display_me_content()'><i class='demo-icon icon-left-open'></i></button>";
		document.getElementById("header").innerHTML="<div>Strona została wykonana w HTML, CSS i JavaScript, gdzie:</div>"
		IsMeContentActive=true;
	}
}
