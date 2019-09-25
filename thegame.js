
alert ('welkom in deze game, ik ben de spelleider en zal je even uitleggen hoe spel dit werkt.');
alert ('je krijgt straks steeds vragen die je moet beantwoorden beantwoord. LET OP!! DEZE KEUZES BEINVLOEDEN DE REST VAN HET SPEL! DENK DUS GOED NA OVER DEZE KEUZES! (je kan het spel meerdere keren spelen.)');
alert ('het spel begint nu')
alert ('Je bent een man van 35, ontschuldig gearresteert door de politie, iedereen denkt dat je een collega vermoord hebt. ');

var geld = (prompt('Je wordt door de bewaker naar je cel gebracht onderweg vertelt deze bewaker dat hij je wilt helpen ontsnappen als je daarna binnen een week 5000 euro geeft. (als je hiermee accoort gaat type ja als je hier niet mee accoort gaat type nee.'));

if (geld == 'ja'){
	var vertellen = (prompt('Je hebt dit geld niet, vertel je dit tegen de bewaker of niet. (als je het vertelt type ja en als je het niet vertelt type nee.)'));
	
	if (vertellen == 'ja'){
		var kiezen = (prompt('De bewaker glimlacht en vertelt je dat het geen probleem is en dat hij wel een klusje voor je heeft. Hij loopt naar het kantoor van de  directeur van de gevangenis maakt een praatje. Als hij weer terug komt vertelt hij je dat je vrij bent. Ook zegt hij dat je kan kiezen tussen drugs naar de VS smokkelen of waardevolle papieren uit het appartement van een zakeman stelen. (type smokkelen als je wilt gaan smokkelen en type stelen als je de zakenman wilt bestelen.) '));
		
		if (kiezen == 'smokkelen'){
			var smokkelen = (prompt('Je staat op het punt met een tas voor cocaine op een boot naar de VS je ziet een kans de tas overboord te gooien en zonder drugs verder te varen en een nieuw leven in Amerika te starten doe je dit? (type ja om een nieuw leven te starten en nee om de drugs te houden)'));
		}
		 else{
			var stelen =(prompt('Je in het huis en steelt de papieren. Je bent vrij!'));
		}

	}
	 else{
		var vrij =(prompt('De bewaker loopt naar het kantoortje van de directeur, door het raam heen zie je hem geld geven. Als hij terug komt zegt hij mooi je bent vanaf nu vrij.'));

 else{
	var ontsnappen =(prompt('De bewaker moppert en duwt je je cel in. Als je maar niet denkt dat het hier gemakkelijk is zegt hij voordat hij je een duw geeft. Je kijkt rond in de cel. Gelukkig heb je geen celgenoot. De luidspreker roept om dat het pauze is en de celdeur gaat open. Je ziet de gevangenen hun cellen uitlopen naar butien en de kantine. Ga je op zoek naar andere gevangenen of kijk je eerst wat er in je cel te doen is.(type cel om de cel te bekijken en type gevangenen om naar de andere gevangenen op te zoeken'));
}