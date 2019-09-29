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
						if (smokkelen == 'ja'){
							alert('Dit was niet zo slim na een paar dagen in Amerika wordt je op straat dood geschoten door vrienden van de bewaker')


						}
						else{
							alert('Bij aankomst in de haven wordt je er tussenuit gepikt door de douane, die vinden de cocaine en je onschuld bewijzen is nu alleen nog moeilijker.')
						}
		
				}
				else{
					alert('Je in het huis en steelt de papieren. Je bent vrij!');
				}

		}
		else {
		var vrij =(prompt('De bewaker loopt naar het kantoortje van de directeur, door het raam heen zie je hem geld geven. Als hij terug komt zegt hij mooi je bent vanaf nu vrij. Je moet echter nu het geld regelen. Je kan ook de directeur en bewaker verklikken aan de overheid wat doe je? (type geld als je het geld wilt regelen en verklikken als je wilt verklikken. '));
			if (vrij == 'geld'){
				var hoe =('Hoe ga je je geld verdienen, je kan gaan werken of je kan de bank overvallen. (Type werken om te werken en overvallen om de bank over te vallen.) ')
				if (hoe == 'werken'){
					alert('Je hebt geluk, je wordt meteen aangenomen als schoonmakers, je werkt 2 weken keihard en hebt precies 5000,- euro.')
				}
				else{
					alert('Je koopt illegaal een geweer om de bank over te vallen. Helaas is dit een scam en 2 weken later staat de politie voor je deur, de bewaker heeft vertelt dat je ontsnapt bent. Je wordt gearresteert en zit weer terug in de cel.')
				}


			}
			else{
				var telefoon = (prompt('Je beseft je dat je geen telefoon bij hebt. Je kan terug naar binnen gaan om een telefoon te vragen of je gebruikt de telefooncel aan de andere kant van de weg. (type binnen om de telefoon binnen te halen en buiten om de telefooncel te gebruiken.)'))
					if (telefoon == 'binnen'){
						alert('Je leent de telefoon van de bewaker en 2 minuten later worden meerdere bewakers en de directeur gearresteert en jij vrijgelaten.')

					}
					else{
						alert('Je heb je eerste zin nog niet afgemaakt of je wordt door de corrupte bewaker neer geschoten.')
					}
			}

		}
			


			
}
else {
	var ontsnappen =(prompt('De bewaker moppert en duwt je je cel in. Als je maar niet denkt dat het hier gemakkelijk is zegt hij voordat hij je een duw geeft. Je kijkt rond in de cel. Gelukkig heb je geen celgenoot. De luidspreker roept om dat het pauze is en de celdeur gaat open. Je ziet de gevangenen hun cellen uitlopen naar butien en de kantine. Ga je op zoek naar andere gevangenen of kijk je eerst wat er in je cel te doen is.(type cel om de cel te bekijken en type gevangenen om naar de andere gevangenen op te zoeken.)'));
		if (ontsnappen == 'cel'){
			var cel =(prompt('Je bent best moe en wil graag slapen. Maar de cel ziet er best oud uit. (Wil je slapen type slapen wil je de cel onderzoeken op ontsnap routes type onderzoeken.)'))
				if (cel =='slapen'){
					alert('als je wakker wordt komt een bewaker je vertellen dat er bewijzen zijn om jou onschuld te bewijzen. ')
				}
				else{
					alert('Als je je nachtkastje opent zie je er sleutels in liggen. Deze probeer je uit op de celdeur. Die gaat open, helaas komt er net een bewaker de hoek om gelopen en je zit weer terug in je cel.')
				}

		}
		else{
			alert('Je loopt naar buiten en ziet een grote chaos en hangen helikopers in de lucht en overal vliegen kogels. Je ziet een helikoper met een touw eronder hangen. Je pakt het touw en begimt te klimmen. Als je naar beneden kijkt zie je hoe hoog je bent en je valt flauw. Je valt meters naar beneden en overleeft dit niet.')

				
		}
}