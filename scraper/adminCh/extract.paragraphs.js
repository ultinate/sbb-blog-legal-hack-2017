const cheerio = require('cheerio')
const _ = require('lodash')
const cheerioLoad = text => cheerio.load(text, { decodeEntities: false })

const text = `<p><sup><a
  name=\"1\">1</a></sup> Jede Person, die vom Inhaber einer Datensammlung Auskunft darüber verlangt, ob Daten über sie bearbeitet werden (Art. 8 DSG), muss dies in der Regel in schriftlicher Form beantragen und sich über ihre Identität ausweisen.</p>

<p>
<sup>
<a name=\"2\">2</a></sup> Das Auskunftsbegehren sowie die Auskunftserteilung können auf elektronischem Weg
erfolgen, wenn der Inhaber der Datensammlung dies ausdrücklich vorsieht und angemessene Massnahmen trifft, um:</p>
<dl compact=\"compact\">
    <dt>a.</dt>
    <dd>die Identifizierung der betroffenen Person sicherzustellen; und</dd>
<dt>b.</dt>
<dd>die persönlichen Daten der betroffenen Person bei der Auskunftserteilung vor dem Zugriff unberechtigter Dritter
zu schützen.<sup><a href=\"#fn-#a1-1\">1</a>
</sup>
</dd>
</dl>
<p><sup><a name=\"3\">3</a></sup> Im Einvernehmen mit dem Inhaber der Datensammlung oder auf dessen Vorschlag hin
kann die betroffene Person ihre Daten auch an Ort und Stelle einsehen. Die Auskunft kann auch mündlich erteilt
werden, wenn die betroffene Person eingewilligt hat und vom Inhaber identifiziert worden ist.</p><p><sup><a
name=\"4\">4</a></sup> Die Auskunft oder der begründete Entscheid über die Beschränkung des Auskunftsrechts
(Art. 9 und 10 DSG) wird innert 30 Tagen seit dem Eingang des Auskunftsbegehrens erteilt. Kann die Auskunft nicht
innert 30 Tagen erteilt werden, so muss der Inhaber der Datensammlung den Gesuchsteller hierüber benachrichtigen und
ihm die Frist mitteilen, in der die Auskunft erfolgen wird.</p><p><sup><a name=\"5\">5</a></sup> Werden eine oder
mehrere Datensammlungen von mehreren Inhabern gemeinsam geführt, kann das Auskunftsrecht bei jedem Inhaber geltend
gemacht werden, sofern nicht einer von ihnen für die Behandlung aller Auskunftsbegehren verantwortlich ist. Wenn der
Inhaber der Datensammlung zur Auskunftserteilung nicht ermächtigt ist, leitet er das Begehren an den Zuständigen
weiter.</p><p><sup><a name=\"6\">6</a></sup> Betrifft das Auskunftsbegehren Daten, die im Auftrag des Inhabers der
Datensammlung von einem Dritten bearbeitet werden, so leitet der Auftraggeber das Begehren an den Dritten zur
Erledigung weiter, sofern er nicht selbst in der Lage ist, Auskunft zu erteilen.<sup>
<a href=\"#fn-#a1-2\">2</a></sup></p><p><sup><a name=\"7\">7</a></sup> Wird Auskunft über Daten von
verstorbenen Personen verlangt, so ist sie zu erteilen, wenn der Gesuchsteller ein Interesse an der Auskunft
nachweist und keine überwiegenden Interessen von Angehörigen der verstorbenen Person oder von Dritten
entgegenstehen. Nahe Verwandtschaft sowie Ehe mit der verstorbenen Person begründen ein Interesse.</p>
<hr>
  <div class=\"fns\">
  <p>
    <small><a name=\"fn-#a1-1\"><sup>1</sup></a> Fassung gemäss Ziff. I der V vom 28. Sept. 2007, in Kraft seit 1.
    Jan. 2008 (<a href=\"http://www.admin.ch/ch/d/as/2007/4993.pdf\">AS <strong>2007</strong> 4993</a>).<br><a
    name=\"fn-#a1-2\"><sup>2</sup></a> Fassung gemäss Ziff. I der V vom 28. Sept. 2007, in Kraft seit 1.
  Jan. 2008 (<a href=\"http://www.admin.ch/ch/d/as/2007/4993.pdf\">AS <strong>2007</strong> 4993</a>).
</small>
</p>
</div></kkk>`

const $ = cheerioLoad(text)

const test = $('p').map((i, el) => ({
  paragraphName: $(el).text(),
  // paragraphContent: $('dl').text(),
})).get()

console.log(JSON.stringify(test))