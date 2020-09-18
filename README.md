# Reeven Govaert

Ik heb de opdracht verder uitgewerkt. 

De website is responsive en alle linken werken. De foto’s kunnen niet opgehaald worden omdat ik niet de juiste link gekregen heb (https://api.digital.dvlp.delen.be/api/images/contactPersons?emailAddress=XXX => werkt niet voor mij). 

De volgorde van de contactpersonen is conform aan de regels.

Ik heb er facultatief ook de header bij geplaatst.

Graag uw feedback.

## Feedback Reeven

Ik wil u in alle nederigheid volgende feedback meegeven wat de sollicitatieprocedure betreft.

Indien er verwacht wordt dat de opdracht afgewerkt moet zijn in een zo kort mogelijke tijd, lijkt het mij aangewezen dat dit duidelijker wordt gesteld naar de sollicitant. In mijn geval was dit niet duidelijk en minstens voor twijfel vatbaar, temeer daar twee personen expliciet de uitdrukking gebruikten “doe maar op uw gemak”. Dergelijke uitdrukking kan redelijkerwijze door sommige sollicitanten geinterpreteerd worden in die zin dat na het doornemen en summier uitwerken (en niet het volledig uitwerken) een gesprek over de opdracht zelf en over de verdere uitwerking zal plaats hebben.

Hopelijk speelt de voornoemde onduidelijkheid niet in mijn nadeel.

Ik meen immers dat ik met de voorlegging van de volledig uitgewerkte opdracht u genoegzaam aantoont dat ik over de nodige capaciteiten beschik om dergelijke opdrachten uit te werken binnen een korte tijdspanne. Ik heb er thuis autonoom een 2 uur aan gewerkt.

# Opdracht contactpersonen

Een klant heeft altijd een reeks van contactpersonen bij de bank. Deze contactpersonen hebben allemaal een bepaalde functie en worden in een bepaalde volgorde getoond in de app.
Een klant kan contactpersonen hebben op bankrekening niveau (contract genoemd in de bank wereld) en op niveau van de persoon.

Opdracht: De contactpersonen van de klant op een correcte manier tonen in de app

## Regels

- Sorteren op type in onderstaande volgorde:

  1. Manager (van persoon)
  2. Manager (van contract)
  3. Agent
  4. PatrimonialAdvisor
  5. SuccessionAdvisor
  6. FiscalAdvisor

- Binnen deze sortering sorteren op achternaam
- Geen dubbele contactpersonen
- Afbeelding tonen met https://api.digital.dvlp.delen.be/api/images/contactPersons?emailAddress=XXX

## Commands

Start web: `ng serve`
Start server `yarn run server`

## HTML

```
<div class="c-contact">
<div class="c-contact__item">
    <div class="c-contact__info">
    	<figure class="c-contact__figure">
        	<!-- BD-AVATAR HERE -->
    	</figure>
    	<p class="c-contact__name">Voornaam</p>
    	<p class="c-contact__name">Naam</p>
    	<p class="c-contact__description">Functie</p>
    	<p class="c-contact__description">Locatie</p>
    </div>
    <div class="c-contact__actions">
    	<div class="o-button-list o-button-list--small">
         	<!-- TELEPHONE AND MAIL BUTTON HERE -->
    	</div>
    </div>
</div>
</div>
```

